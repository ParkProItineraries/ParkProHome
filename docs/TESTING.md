# ParkProHome - Golden Path Test Plan

## Purpose
Minimal test plan to verify core functionality before and after cleanup. This ensures we don't break anything during the cleanup process.

## Pre-Cleanup Baseline

### Prerequisites
- Node.js >=18.0.0 installed
- npm installed
- Backend API running (or mock available)

### Baseline Commands (MUST PASS)
```bash
# 1. Install dependencies
npm install

# 2. Development server starts
npm run dev
# Expected: Server starts on http://localhost:5173
# Expected: No console errors
# Expected: Home page loads

# 3. Production build succeeds
npm run build
# Expected: Build completes without errors
# Expected: dist/ directory created
# Expected: No build warnings (or known acceptable warnings)

# 4. Tests run (if present)
npm test
# Expected: Tests pass (or skip if no tests)

# 5. Linting passes
npm run lint
# Expected: No linting errors (or known acceptable errors)
```

## Golden Path User Flows

### Flow 1: Home Page Load
1. Navigate to `http://localhost:5173/`
2. **Expected**: Home page loads without errors
3. **Expected**: Navbar visible
4. **Expected**: Footer visible
5. **Expected**: No console errors
6. **Expected**: No 404s for assets

### Flow 2: Navigation
1. Click "Pricing" link
2. **Expected**: Navigates to `/pricing`
3. **Expected**: Pricing page loads
4. Click "Features" link
5. **Expected**: Navigates to `/features`
6. **Expected**: Features page loads
7. Click "Request Access" or "Signup"
8. **Expected**: Navigates to signup/request access page

### Flow 3: SEO Pages
1. Navigate to `/disney-planning-software`
2. **Expected**: Page loads
3. Navigate to `/travel-agent-software`
4. **Expected**: Page loads
5. Navigate to `/comparison`
6. **Expected**: Page loads

### Flow 4: Business Pages
1. Navigate to `/terms-of-service`
2. **Expected**: Terms page loads
3. Navigate to `/privacy-policy`
4. **Expected**: Privacy policy page loads

### Flow 5: 404 Handling
1. Navigate to `/non-existent-page`
2. **Expected**: 404 page loads
3. **Expected**: No console errors

## Post-Cleanup Verification

After each cleanup phase, re-run:
1. All baseline commands
2. All golden path flows
3. Verify no routes disappeared
4. Verify no pages broken

## Automated Baseline Verification Script

A baseline verification script is available at `scripts/verify-baseline.sh`:

**Usage**:
```bash
./scripts/verify-baseline.sh
```

**What it does**:
1. Installs dependencies (`npm install`)
2. Runs production build (`npm run build`)
3. Verifies build completes successfully

**Purpose**: Quick smoke test to verify the repository is in a buildable state after changes.

**Note**: This script does not run tests or linting. Use `npm test` and `npm run lint` separately for full verification.

## Known Issues

### Test Dependency Issue (Pre-Existing)

**Status**: Pre-existing, not caused by cleanup  
**Date Identified**: 2025-01-27  
**Command**: `npm test -- --run`

**Error**:
```
Error: Cannot find module '@testing-library/dom'
Require stack:
- /Users/ktodoran/Dev/ParkProHome/node_modules/@testing-library/react/dist/pure.js
```

**Root Cause**: Missing `@testing-library/dom` dependency. The `@testing-library/react` package requires `@testing-library/dom` as a peer dependency, but it's not installed.

**Impact**: Test suite cannot run. This is a configuration issue, not a code issue.

**Resolution** (for future engineer):
1. Install missing dependency: `npm install --save-dev @testing-library/dom`
2. Verify test files are properly configured in `vite.config.js` or `vitest.config.js`
3. Re-run tests: `npm test -- --run`

**Status**: ✅ **RESOLVED** (2025-01-27)
- Missing dependency installed: `@testing-library/dom` added to devDependencies
- Tests now pass: 6 tests passing in 2 test files
- No additional test failures identified

**Note**: This issue existed before cleanup work began. Cleanup actions did not modify test configuration or dependencies.

## Notes
- This is a **smoke test**, not comprehensive testing
- Focus on **core user flows** that must work
- Document any known issues before cleanup
- Re-run after every cleanup batch
