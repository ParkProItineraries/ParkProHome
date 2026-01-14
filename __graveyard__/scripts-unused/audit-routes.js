#!/usr/bin/env node

/**
 * Routes & Pages Audit Script
 * 
 * Analyzes all routes, pages, links, and dependencies to identify:
 * - Active routes
 * - Linked paths (nav, footer, in-content)
 * - Sitemap entries
 * - Unused/orphan pages
 * - Dependencies and imports
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const OUTPUT_DIR = path.join(__dirname, 'audit-output');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Recursively find all files with given extensions
 */
function findFiles(dir, extensions, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        findFiles(filePath, extensions, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

/**
 * Extract routes from App.jsx
 */
function extractRoutes() {
  const appPath = path.join(SRC_DIR, 'App.jsx');
  const content = fs.readFileSync(appPath, 'utf8');
  
  const routes = [];
  
  // Extract lazy imports with their paths
  const lazyImportRegex = /const\s+(\w+)\s+=\s+React\.lazy\(\(\)\s+=>\s+import\(["'](.+?)["']\)\);?/g;
  const lazyImports = {};
  let match;
  
  while ((match = lazyImportRegex.exec(content)) !== null) {
    const [, componentName, importPath] = match;
    lazyImports[componentName] = importPath;
  }
  
  // Extract <Route> definitions
  const routeRegex = /<Route\s+path=["']([^"']+)["']\s+element=\{<(\w+)\s*\/>\}/g;
  
  while ((match = routeRegex.exec(content)) !== null) {
    const [, routePath, componentName] = match;
    const importPath = lazyImports[componentName] || 'unknown';
    
    routes.push({
      path: routePath,
      component: componentName,
      file: importPath,
      lazy: !!lazyImports[componentName]
    });
  }
  
  return routes;
}

/**
 * Find all page files
 */
function findPageFiles() {
  const pageFiles = findFiles(PAGES_DIR, ['.jsx', '.js', '.tsx', '.ts']);
  
  return pageFiles.map(filePath => {
    const relativePath = path.relative(SRC_DIR, filePath);
    return {
      file: relativePath,
      absolutePath: filePath,
      name: path.basename(filePath, path.extname(filePath))
    };
  });
}

/**
 * Extract internal links from Navbar
 */
function extractNavbarLinks() {
  const navbarPath = path.join(COMPONENTS_DIR, 'Navbar.jsx');
  const content = fs.readFileSync(navbarPath, 'utf8');
  
  const links = [];
  
  // Extract navItems array
  const navItemsMatch = content.match(/const navItems = \[([\s\S]*?)\];/);
  if (navItemsMatch) {
    const navItemsStr = navItemsMatch[1];
    const itemRegex = /\{\s*to:\s*["']([^"']+)["']/g;
    let match;
    
    while ((match = itemRegex.exec(navItemsStr)) !== null) {
      links.push(match[1]);
    }
  }
  
  // Extract button links
  const buttonLinkRegex = /to=["']([^"']+)["']/g;
  let match;
  
  while ((match = buttonLinkRegex.exec(content)) !== null) {
    if (!links.includes(match[1])) {
      links.push(match[1]);
    }
  }
  
  return links;
}

/**
 * Extract internal links from Footer
 */
function extractFooterLinks() {
  const footerPath = path.join(COMPONENTS_DIR, 'Footer.jsx');
  const content = fs.readFileSync(footerPath, 'utf8');
  
  const links = [];
  const linkRegex = /to=["']([^"']+)["']/g;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    if (!links.includes(match[1])) {
      links.push(match[1]);
    }
  }
  
  return links;
}

/**
 * Extract paths from sitemap.xml
 */
function extractSitemapPaths() {
  const sitemapPath = path.join(ROOT_DIR, 'public', 'sitemap.xml');
  const content = fs.readFileSync(sitemapPath, 'utf8');
  
  const paths = [];
  const urlRegex = /<loc>https:\/\/parkproit\.com(\/[^<]*)<\/loc>/g;
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    paths.push(match[1]);
  }
  
  return paths;
}

/**
 * Find all internal Link and navigate references in content
 */
function extractContentLinks() {
  const allFiles = [
    ...findFiles(PAGES_DIR, ['.jsx', '.js', '.tsx', '.ts']),
    ...findFiles(COMPONENTS_DIR, ['.jsx', '.js', '.tsx', '.ts'])
  ];
  
  const links = new Set();
  
  allFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // <Link to="...">
    const linkRegex = /<Link\s+[^>]*to=["']([^"']+)["']/g;
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      links.add(match[1]);
    }
    
    // navigate("...")
    const navigateRegex = /navigate\(["']([^"']+)["']\)/g;
    
    while ((match = navigateRegex.exec(content)) !== null) {
      links.add(match[1]);
    }
    
    // href="..." (internal paths starting with /)
    const hrefRegex = /href=["'](\/[^"']+)["']/g;
    
    while ((match = hrefRegex.exec(content)) !== null) {
      // Skip external URLs and mailto/tel links
      if (!match[1].startsWith('http') && !match[1].includes('@')) {
        links.add(match[1]);
      }
    }
  });
  
  return Array.from(links).filter(link => link.startsWith('/'));
}

/**
 * Check if a page file is imported anywhere
 */
function findImportReferences(pageFile) {
  const allFiles = [
    ...findFiles(SRC_DIR, ['.jsx', '.js', '.tsx', '.ts'])
  ];
  
  const references = [];
  const pageName = path.basename(pageFile, path.extname(pageFile));
  
  allFiles.forEach(filePath => {
    if (filePath === pageFile) return; // Skip self
    
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(path.dirname(filePath), pageFile)
      .replace(/\\/g, '/')
      .replace(/\.(jsx|js|tsx|ts)$/, '');
    
    // Check for imports of this page
    const importRegex = new RegExp(`import\\s+.*?["']${relativePath.replace(/\//g, '\\/')}["']`, 'g');
    
    if (importRegex.test(content)) {
      references.push(path.relative(SRC_DIR, filePath));
    }
  });
  
  return references;
}

/**
 * Main audit function
 */
function performAudit() {
  console.log('🔍 Starting routes and pages audit...\n');
  
  // 1. Extract all routes
  console.log('📋 Extracting routes from App.jsx...');
  const routes = extractRoutes();
  console.log(`   Found ${routes.length} routes\n`);
  
  // 2. Find all page files
  console.log('📁 Finding all page files...');
  const pageFiles = findPageFiles();
  console.log(`   Found ${pageFiles.length} page files\n`);
  
  // 3. Extract navigation links
  console.log('🔗 Extracting navigation links...');
  const navLinks = extractNavbarLinks();
  console.log(`   Found ${navLinks.length} navbar links\n`);
  
  // 4. Extract footer links
  console.log('🔗 Extracting footer links...');
  const footerLinks = extractFooterLinks();
  console.log(`   Found ${footerLinks.length} footer links\n`);
  
  // 5. Extract sitemap paths
  console.log('🗺️  Extracting sitemap paths...');
  const sitemapPaths = extractSitemapPaths();
  console.log(`   Found ${sitemapPaths.length} sitemap entries\n`);
  
  // 6. Extract all content links
  console.log('🔎 Extracting all content links...');
  const contentLinks = extractContentLinks();
  console.log(`   Found ${contentLinks.length} unique internal links\n`);
  
  // 7. Identify unlinked and unrouted pages
  console.log('🚨 Identifying unused pages...');
  
  const routedFiles = new Set(routes.map(r => r.file));
  const allLinkedPaths = new Set([...navLinks, ...footerLinks, ...contentLinks, ...sitemapPaths]);
  
  const unlinkedPages = [];
  const unroutedPages = [];
  
  pageFiles.forEach(page => {
    const isRouted = routes.some(r => r.file.includes(page.name));
    const pagePath = page.file.replace(/\\/g, '/');
    
    // Check if this page is imported anywhere (for lazy loading)
    const importRefs = findImportReferences(page.absolutePath);
    
    if (!isRouted) {
      unroutedPages.push({
        ...page,
        importedBy: importRefs
      });
    }
  });
  
  console.log(`   Found ${unroutedPages.length} unrouted pages\n`);
  
  // 8. Generate report
  const report = {
    summary: {
      totalRoutes: routes.length,
      totalPages: pageFiles.length,
      navLinks: navLinks.length,
      footerLinks: footerLinks.length,
      sitemapPaths: sitemapPaths.length,
      contentLinks: contentLinks.length,
      unroutedPages: unroutedPages.length
    },
    routes: routes,
    pages: pageFiles,
    navPaths: navLinks,
    footerPaths: footerLinks,
    sitemapPaths: sitemapPaths,
    contentLinks: contentLinks,
    allLinkedPaths: Array.from(allLinkedPaths).sort(),
    unroutedPages: unroutedPages,
    recommendations: {
      safeToRemove: unroutedPages.filter(p => 
        p.importedBy.length === 0 && 
        !p.name.includes('NotFound') &&
        !p.name.includes('ErrorBoundary')
      ),
      needsInvestigation: unroutedPages.filter(p => 
        p.importedBy.length > 0 ||
        p.name.includes('NotFound') ||
        p.name.includes('ErrorBoundary')
      )
    }
  };
  
  // Save report
  const outputPath = path.join(OUTPUT_DIR, 'routes.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  
  console.log('✅ Audit complete!');
  console.log(`📄 Report saved to: ${path.relative(ROOT_DIR, outputPath)}\n`);
  
  // Print summary
  console.log('📊 Summary:');
  console.log(`   Routes: ${report.summary.totalRoutes}`);
  console.log(`   Pages: ${report.summary.totalPages}`);
  console.log(`   Unrouted: ${report.summary.unroutedPages}`);
  console.log(`   Safe to remove: ${report.recommendations.safeToRemove.length}`);
  console.log(`   Needs investigation: ${report.recommendations.needsInvestigation.length}\n`);
  
  if (report.recommendations.safeToRemove.length > 0) {
    console.log('🗑️  Pages safe to remove:');
    report.recommendations.safeToRemove.forEach(page => {
      console.log(`   - ${page.file}`);
    });
    console.log('');
  }
  
  if (report.recommendations.needsInvestigation.length > 0) {
    console.log('⚠️  Pages needing investigation:');
    report.recommendations.needsInvestigation.forEach(page => {
      console.log(`   - ${page.file} (imported by: ${page.importedBy.join(', ') || 'none'})`);
    });
    console.log('');
  }
  
  return report;
}

// Run the audit
try {
  const report = performAudit();
  process.exit(0);
} catch (error) {
  console.error('❌ Audit failed:', error);
  process.exit(1);
}

