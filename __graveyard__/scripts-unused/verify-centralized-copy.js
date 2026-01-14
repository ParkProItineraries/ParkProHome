#!/usr/bin/env node

/**
 * Verify Centralized Copy Usage
 * 
 * Checks which pages are using centralized copy from strings.js
 * vs hardcoded marketing text.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const OUTPUT_DIR = path.join(__dirname, 'audit-output');

function analyzePageFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  
  const analysis = {
    file: fileName,
    path: filePath,
    importsCopy: /import.*copy.*from.*strings/.test(content),
    usesCopyPages: /copy\.pages\./.test(content),
    usesCopyHero: /copy\.hero\./.test(content),
    usesCopySections: /copy\.sections\./.test(content),
    usesCopyCtas: /copy\.ctas\./.test(content),
    hasHardcodedStrings: false,
    potentialHardcodedCount: 0,
    hasHelmet: /Helmet/.test(content) || /SEO/.test(content),
    usesSection: /Section/.test(content),
    usesContainer: /Container/.test(content),
  };
  
  // Look for potential hardcoded strings (strings in JSX that look like marketing copy)
  // This is a heuristic - look for quoted strings > 20 chars that aren't imports/configs
  const stringMatches = content.match(/>[\s]*["']([^"']{20,})["'][\s]*</g);
  if (stringMatches && stringMatches.length > 0) {
    analysis.potentialHardcodedCount = stringMatches.length;
    analysis.hasHardcodedStrings = true;
  }
  
  return analysis;
}

function getAllPageFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results = results.concat(getAllPageFiles(fullPath));
    } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
      results.push(fullPath);
    }
  }
  
  return results;
}

function main() {
  console.log('🔍 Analyzing pages for centralized copy usage...\n');
  
  const pageFiles = getAllPageFiles(PAGES_DIR);
  const results = pageFiles.map(analyzePageFile);
  
  // Categorize results
  const fullyCompliant = results.filter(r => 
    r.importsCopy && 
    (r.usesCopyPages || r.usesCopyHero) &&
    r.usesSection &&
    r.usesContainer
  );
  
  const partiallyCompliant = results.filter(r => 
    r.importsCopy && 
    (r.usesCopyPages || r.usesCopyHero) &&
    (!r.usesSection || !r.usesContainer)
  );
  
  const needsWork = results.filter(r => 
    !r.importsCopy || 
    (!r.usesCopyPages && !r.usesCopyHero)
  );
  
  console.log('✅ Fully Compliant Pages:', fullyCompliant.length);
  fullyCompliant.forEach(r => console.log(`   - ${r.file}`));
  
  console.log('\n⚠️  Partially Compliant Pages:', partiallyCompliant.length);
  partiallyCompliant.forEach(r => {
    const issues = [];
    if (!r.usesSection) issues.push('missing Section');
    if (!r.usesContainer) issues.push('missing Container');
    console.log(`   - ${r.file} (${issues.join(', ')})`);
  });
  
  console.log('\n❌ Needs Work:', needsWork.length);
  needsWork.forEach(r => {
    const issues = [];
    if (!r.importsCopy) issues.push('no copy import');
    if (!r.usesCopyPages && !r.usesCopyHero) issues.push('hardcoded text');
    if (!r.usesSection) issues.push('no Section');
    if (!r.usesContainer) issues.push('no Container');
    console.log(`   - ${r.file} (${issues.join(', ')})`);
  });
  
  // Save detailed report
  const report = {
    summary: {
      total: results.length,
      fullyCompliant: fullyCompliant.length,
      partiallyCompliant: partiallyCompliant.length,
      needsWork: needsWork.length
    },
    pages: results,
    compliance: {
      fullyCompliant: fullyCompliant.map(r => r.file),
      partiallyCompliant: partiallyCompliant.map(r => ({
        file: r.file,
        issues: [
          !r.usesSection && 'missing Section',
          !r.usesContainer && 'missing Container'
        ].filter(Boolean)
      })),
      needsWork: needsWork.map(r => ({
        file: r.file,
        issues: [
          !r.importsCopy && 'no copy import',
          !r.usesCopyPages && !r.usesCopyHero && 'hardcoded text',
          !r.usesSection && 'no Section',
          !r.usesContainer && 'no Container'
        ].filter(Boolean)
      }))
    }
  };
  
  const outputPath = path.join(OUTPUT_DIR, 'copy-compliance.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  
  console.log(`\n📄 Report saved to: ${path.relative(path.join(__dirname, '..'), outputPath)}`);
}

main();

