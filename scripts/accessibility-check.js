#!/usr/bin/env node

/**
 * Accessibility Quick Check
 * 
 * Scans pages for common accessibility issues:
 * - Missing alt text on images
 * - Multiple or missing H1 tags
 * - Missing aria-labels where needed
 * - Focus state handling
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');

function checkAccessibility(filePath, content) {
  const fileName = path.basename(filePath);
  const issues = [];
  
  // Check for img tags without alt
  const imgMatches = content.match(/<img[^>]*>/g) || [];
  imgMatches.forEach(img => {
    if (!img.includes('alt=')) {
      issues.push({
        type: 'missing-alt',
        severity: 'error',
        message: 'Image tag without alt attribute'
      });
    }
  });
  
  // Check for multiple H1 tags
  const h1Matches = content.match(/<h1[^>]*>/g) || [];
  if (h1Matches.length > 1) {
    issues.push({
      type: 'multiple-h1',
      severity: 'error',
      message: `Found ${h1Matches.length} H1 tags (should be exactly 1 per page)`
    });
  }
  if (h1Matches.length === 0 && !fileName.includes('NotFound') && !fileName.includes('DemoItinerary')) {
    issues.push({
      type: 'missing-h1',
      severity: 'warning',
      message: 'No H1 tag found'
    });
  }
  
  // Check for buttons without aria-label or text
  const buttonMatches = content.match(/<button[^>]*>[\s]*<\/button>/g) || [];
  if (buttonMatches.length > 0) {
    buttonMatches.forEach(btn => {
      if (!btn.includes('aria-label=') && !btn.includes('aria-labelledby=')) {
        issues.push({
          type: 'button-no-label',
          severity: 'warning',
          message: 'Empty button without aria-label'
        });
      }
    });
  }
  
  // Check for focus-visible styles
  const hasFocusVisible = content.includes('focus-visible') || content.includes('&:focus');
  if (!hasFocusVisible && (fileName.includes('Button') || fileName.includes('Nav'))) {
    issues.push({
      type: 'missing-focus-styles',
      severity: 'warning',
      message: 'No focus-visible styles found (important for interactive elements)'
    });
  }
  
  // Check for motion accessibility
  const hasMotion = content.includes('motion.') || content.includes('framer-motion');
  const hasReducedMotion = content.includes('prefers-reduced-motion');
  if (hasMotion && !hasReducedMotion && fileName.endsWith('.jsx')) {
    issues.push({
      type: 'missing-reduced-motion',
      severity: 'info',
      message: 'Uses animations but no prefers-reduced-motion check found (may be handled globally)'
    });
  }
  
  return {
    file: fileName,
    path: filePath,
    issuesCount: issues.length,
    issues: issues
  };
}

function scanDirectory(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.')) {
      results = results.concat(scanDirectory(fullPath));
    } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      results.push(checkAccessibility(fullPath, content));
    }
  }
  
  return results;
}

function main() {
  console.log('♿ Running accessibility checks...\n');
  
  const pageResults = scanDirectory(PAGES_DIR);
  const componentResults = scanDirectory(COMPONENTS_DIR);
  
  const allResults = [...pageResults, ...componentResults];
  
  const errors = allResults.filter(r => r.issues.some(i => i.severity === 'error'));
  const warnings = allResults.filter(r => r.issues.some(i => i.severity === 'warning'));
  const infos = allResults.filter(r => r.issues.some(i => i.severity === 'info'));
  
  console.log('📊 Summary:');
  console.log(`   Files scanned: ${allResults.length}`);
  console.log(`   Files with errors: ${errors.length}`);
  console.log(`   Files with warnings: ${warnings.length}`);
  console.log(`   Files with info: ${infos.length}\n`);
  
  if (errors.length > 0) {
    console.log('❌ Errors:');
    errors.forEach(r => {
      console.log(`\n   ${r.file}:`);
      r.issues.filter(i => i.severity === 'error').forEach(issue => {
        console.log(`      - ${issue.message}`);
      });
    });
    console.log('');
  }
  
  if (warnings.length > 0 && warnings.length < 10) {
    console.log('⚠️  Warnings (sample):');
    warnings.slice(0, 5).forEach(r => {
      console.log(`\n   ${r.file}:`);
      r.issues.filter(i => i.severity === 'warning').forEach(issue => {
        console.log(`      - ${issue.message}`);
      });
    });
    console.log('');
  }
  
  const report = {
    summary: {
      totalFiles: allResults.length,
      filesWithIssues: allResults.filter(r => r.issuesCount > 0).length,
      errors: errors.length,
      warnings: warnings.length,
      infos: infos.length
    },
    results: allResults.filter(r => r.issuesCount > 0)
  };
  
  const outputPath = path.join(__dirname, 'audit-output', 'accessibility.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  
  console.log(`✅ Accessibility check complete!`);
  console.log(`📄 Full report: ${path.relative(path.join(__dirname, '..'), outputPath)}\n`);
  
  // Overall assessment
  if (errors.length === 0) {
    console.log('✨ No critical accessibility errors found!');
  } else {
    console.log(`⚠️  Found ${errors.length} files with accessibility errors that should be fixed.`);
  }
}

main();

