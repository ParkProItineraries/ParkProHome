#!/usr/bin/env node

/**
 * Asset Usage Audit Script
 * 
 * Scans the codebase for asset file references and produces a report
 * identifying which assets are used and which may be unused.
 * 
 * Usage: node scripts/audit-assets.js
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname, basename, extname, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, '..');

// Asset file extensions to scan for
const ASSET_EXTENSIONS = ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.ttf', '.eot'];

// Directories to scan for assets
const ASSET_DIRS = [
  join(repoRoot, 'src', 'assets'),
  join(repoRoot, 'public'),
];

// Directories to scan for references
const SCAN_DIRS = [
  join(repoRoot, 'src'),
  join(repoRoot, 'public'),
  join(repoRoot, 'index.html'),
];

/**
 * Get all asset files from asset directories
 */
function findAssetFiles() {
  const assets = [];
  
  for (const assetDir of ASSET_DIRS) {
    if (!existsSync(assetDir)) continue;
    
    const files = readdirSync(assetDir, { recursive: true });
    for (const file of files) {
      const fullPath = join(assetDir, file);
      const stat = statSync(fullPath);
      
      if (stat.isFile()) {
        const ext = extname(file).toLowerCase();
        if (ASSET_EXTENSIONS.includes(ext) || !ext) {
          const relPath = relative(repoRoot, fullPath);
          assets.push({
            path: fullPath,
            relPath: relPath,
            name: basename(file),
            dir: relative(repoRoot, assetDir),
            ext: ext,
          });
        }
      }
    }
  }
  
  return assets;
}

/**
 * Normalize asset path for matching
 */
function normalizeAssetPath(path) {
  // Remove leading slash, normalize separators
  return path.replace(/^\/+/, '').replace(/\\/g, '/');
}

/**
 * Extract filename from various path formats
 */
function extractFilename(path) {
  // Extract just the filename, handling various formats
  const normalized = normalizeAssetPath(path);
  const parts = normalized.split('/');
  return parts[parts.length - 1];
}

/**
 * Check if a file is a code file we should scan
 */
function isCodeFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  return ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html', '.json'].includes(ext);
}

/**
 * Find all code files to scan
 */
function findCodeFiles() {
  const files = [];
  
  const scanDir = (dir) => {
    if (!existsSync(dir)) return;
    
    const stat = statSync(dir);
    if (stat.isFile() && isCodeFile(dir)) {
      files.push(dir);
      return;
    }
    
    if (!stat.isDirectory()) return;
    
    // Skip node_modules and other ignored dirs
    const dirName = basename(dir);
    if (dirName === 'node_modules' || dirName === 'dist' || dirName === '.git' || dirName === '__graveyard__') {
      return;
    }
    
    try {
      const entries = readdirSync(dir);
      for (const entry of entries) {
        scanDir(join(dir, entry));
      }
    } catch (err) {
      // Skip directories we can't read
    }
  };
  
  for (const scanPath of SCAN_DIRS) {
    scanDir(scanPath);
  }
  
  return files;
}

/**
 * Scan a file for asset references
 */
function scanFileForReferences(filePath, assets) {
  const references = [];
  let content;
  
  try {
    content = readFileSync(filePath, 'utf-8');
  } catch (err) {
    return references;
  }
  
  const relFilePath = relative(repoRoot, filePath);
  const lines = content.split('\n');
  
  for (let lineNum = 1; lineNum <= lines.length; lineNum++) {
    const line = lines[lineNum - 1];
    
    // Check each asset
    for (const asset of assets) {
      const assetName = asset.name;
      const assetRelPath = asset.relPath;
      const assetPath = normalizeAssetPath(assetRelPath);
      
      // Pattern 1: Direct import/require statements (HIGH confidence)
      const importPatterns = [
        new RegExp(`(?:import|require|from)\\s+['"]([^'"]*${assetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'"]*)['"]`, 'i'),
        new RegExp(`(?:import|require|from)\\s+['"]([^'"]*${assetPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'"]*)['"]`, 'i'),
      ];
      
      for (const pattern of importPatterns) {
        if (pattern.test(line)) {
          references.push({
            asset: asset,
            file: relFilePath,
            line: lineNum,
            match: line.trim(),
            confidence: 'high',
            type: 'import',
          });
        }
      }
      
      // Pattern 2: String references (MEDIUM confidence)
      // Look for quoted strings containing the asset name or path
      const stringPatterns = [
        new RegExp(`['"]([^'"]*${assetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'"]*)['"]`, 'i'),
        new RegExp(`['"]([^'"]*${assetPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'"]*)['"]`, 'i'),
      ];
      
      for (const pattern of stringPatterns) {
        const match = line.match(pattern);
        if (match && (match[1].includes(assetName) || match[1].includes(assetPath))) {
          // Skip if already found as import
          if (!references.some(r => r.asset.path === asset.path && r.line === lineNum && r.type === 'import')) {
            references.push({
              asset: asset,
              file: relFilePath,
              line: lineNum,
              match: line.trim(),
              confidence: 'medium',
              type: 'string',
            });
          }
        }
      }
      
      // Pattern 3: CSS url() references (HIGH confidence)
      const urlPattern = new RegExp(`url\\(['"]?([^'")]*${assetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'")]*)['"]?\\)`, 'i');
      if (urlPattern.test(line)) {
        if (!references.some(r => r.asset.path === asset.path && r.line === lineNum)) {
          references.push({
            asset: asset,
            file: relFilePath,
            line: lineNum,
            match: line.trim(),
            confidence: 'high',
            type: 'css-url',
          });
        }
      }
      
      // Pattern 4: HTML src/href attributes (HIGH confidence)
      const htmlPatterns = [
        new RegExp(`(?:src|href)=['"]([^'"]*${assetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'"]*)['"]`, 'i'),
        new RegExp(`(?:src|href)=['"]([^'"]*${assetPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^'"]*)['"]`, 'i'),
      ];
      
      for (const pattern of htmlPatterns) {
        if (pattern.test(line)) {
          if (!references.some(r => r.asset.path === asset.path && r.line === lineNum)) {
            references.push({
              asset: asset,
              file: relFilePath,
              line: lineNum,
              match: line.trim(),
              confidence: 'high',
              type: 'html-attr',
            });
          }
        }
      }
    }
  }
  
  return references;
}

/**
 * Main audit function
 */
async function auditAssets() {
  console.log('🔍 Starting asset usage audit...\n');
  
  // Find all assets
  console.log('📦 Scanning for asset files...');
  const assets = findAssetFiles();
  console.log(`   Found ${assets.length} asset files\n`);
  
  // Find all code files
  console.log('📄 Scanning for code files...');
  const codeFiles = findCodeFiles();
  console.log(`   Found ${codeFiles.length} code files to scan\n`);
  
  // Scan for references
  console.log('🔎 Scanning for asset references...');
  const allReferences = [];
  
  for (const file of codeFiles) {
    const refs = scanFileForReferences(file, assets);
    allReferences.push(...refs);
  }
  
  console.log(`   Found ${allReferences.length} references\n`);
  
  // Build asset usage report
  const assetReport = assets.map(asset => {
    const refs = allReferences.filter(r => r.asset.path === asset.path);
    
    return {
      path: asset.relPath,
      name: asset.name,
      directory: asset.dir,
      extension: asset.ext,
      referenced: refs.length > 0,
      referenceCount: refs.length,
      references: refs.map(r => ({
        file: r.file,
        line: r.line,
        type: r.type,
        confidence: r.confidence,
        match: r.match.substring(0, 100), // Truncate long matches
      })),
      confidence: refs.length > 0 
        ? (refs.some(r => r.confidence === 'high') ? 'high' : 'medium')
        : 'low',
      status: refs.length > 0 ? 'USED' : 'CANDIDATE_UNUSED',
    };
  });
  
  // Sort by status (USED first, then CANDIDATE_UNUSED)
  assetReport.sort((a, b) => {
    if (a.status === 'USED' && b.status === 'CANDIDATE_UNUSED') return -1;
    if (a.status === 'CANDIDATE_UNUSED' && b.status === 'USED') return 1;
    return a.path.localeCompare(b.path);
  });
  
  // Generate markdown report
  const markdownReport = generateMarkdownReport(assetReport);
  
  // Generate JSON report
  const jsonReport = {
    generated: new Date().toISOString(),
    totalAssets: assets.length,
    usedAssets: assetReport.filter(a => a.referenced).length,
    candidateUnusedAssets: assetReport.filter(a => !a.referenced).length,
    assets: assetReport,
  };
  
  // Write reports
  const markdownPath = join(repoRoot, 'docs', 'ASSET_AUDIT.md');
  const jsonPath = join(repoRoot, 'scripts', 'audit-output', 'asset-audit.json');
  
  // Ensure audit-output directory exists
  const { mkdirSync, writeFileSync } = await import('fs');
  try {
    mkdirSync(join(repoRoot, 'scripts', 'audit-output'), { recursive: true });
  } catch (err) {
    // Directory might already exist
  }
  
  writeFileSync(markdownPath, markdownReport, 'utf-8');
  writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2), 'utf-8');
  
  console.log('✅ Audit complete!\n');
  console.log(`📊 Results:`);
  console.log(`   Total assets: ${assets.length}`);
  console.log(`   Used assets: ${assetReport.filter(a => a.referenced).length}`);
  console.log(`   Candidate unused: ${assetReport.filter(a => !a.referenced).length}\n`);
  console.log(`📝 Reports generated:`);
  console.log(`   ${markdownPath}`);
  console.log(`   ${jsonPath}\n`);
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(assetReport) {
  const usedAssets = assetReport.filter(a => a.referenced);
  const candidateUnused = assetReport.filter(a => !a.referenced);
  
  let report = `# ParkProHome - Asset Usage Audit Report\n\n`;
  report += `**Generated**: ${new Date().toISOString()}\n`;
  report += `**Purpose**: Identify which assets are used and which may be unused\n\n`;
  
  report += `## Summary\n\n`;
  report += `- **Total Assets**: ${assetReport.length}\n`;
  report += `- **Used Assets**: ${usedAssets.length}\n`;
  report += `- **Candidate Unused**: ${candidateUnused.length}\n\n`;
  
  report += `## Important Notes\n\n`;
  report += `⚠️ **This audit identifies potential unused assets but does NOT guarantee they are safe to remove.**\n\n`;
  report += `**Confidence Levels**:\n`;
  report += `- **High**: Asset is directly imported/required or referenced in HTML/CSS\n`;
  report += `- **Medium**: Asset appears in string literals (may be false positive)\n`;
  report += `- **Low**: No references found (may still be used dynamically or in build process)\n\n`;
  report += `**CANDIDATE_UNUSED** assets should be manually reviewed before removal:\n`;
  report += `- Check for dynamic imports or runtime asset loading\n`;
  report += `- Verify assets aren't referenced in build configuration\n`;
  report += `- Check if assets are used in external tools or processes\n`;
  report += `- Consider if assets are referenced via environment variables or config files\n\n`;
  
  if (usedAssets.length > 0) {
    report += `## Used Assets (${usedAssets.length})\n\n`;
    report += `| Asset | Directory | References | Confidence | Reference Locations |\n`;
    report += `|-------|-----------|------------|------------|---------------------|\n`;
    
    for (const asset of usedAssets) {
      const refList = asset.references.map(r => `${r.file}:${r.line} (${r.type})`).join('; ');
      report += `| \`${asset.name}\` | \`${asset.directory}\` | ${asset.referenceCount} | ${asset.confidence} | ${refList} |\n`;
    }
    
    report += `\n`;
  }
  
  if (candidateUnused.length > 0) {
    report += `## Candidate Unused Assets (${candidateUnused.length})\n\n`;
    report += `⚠️ **These assets have no references found. Review carefully before removal.**\n\n`;
    report += `| Asset | Directory | Extension |\n`;
    report += `|-------|-----------|-----------|\n`;
    
    for (const asset of candidateUnused) {
      report += `| \`${asset.name}\` | \`${asset.directory}\` | ${asset.extension || 'none'} |\n`;
    }
    
    report += `\n`;
  }
  
  report += `## Detailed Reference Information\n\n`;
  
  for (const asset of assetReport) {
    if (asset.references.length > 0) {
      report += `### ${asset.path}\n\n`;
      report += `**Status**: ${asset.status}\n`;
      report += `**Confidence**: ${asset.confidence}\n\n`;
      report += `**References**:\n\n`;
      
      for (const ref of asset.references) {
        report += `- **${ref.file}:${ref.line}** (${ref.type}, ${ref.confidence} confidence)\n`;
        report += `  \`\`\`\n  ${ref.match}\n  \`\`\`\n\n`;
      }
    }
  }
  
  return report;
}

// Run the audit
auditAssets().catch(err => {
  console.error('❌ Error running asset audit:', err);
  process.exit(1);
});
