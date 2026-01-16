# ParkProHome - Candidate Removal List

**Generated**: 2025-01-27  
**Purpose**: Systematically identify files that may be unused or candidates for cleanup

## Methodology

For each candidate, we check:
1. Import/reference searches across codebase
2. Route definitions
3. Build configuration
4. Package.json scripts
5. Deployment scripts
6. Public assets references

## Categories

- **Safe to Delete**: High confidence, no references found
- **Quarantine First**: Medium confidence, needs review
- **Keep**: Needed, has references
- **Unknown**: Needs manual decision

---

## Documentation Files (Root Level)

### Candidates for `/docs/` or `__graveyard__/docs-archived/`

#### High Priority (Likely Outdated/Redundant)
1. **BRAND_SEO_STRATEGY.md**
   - **Evidence**: Check if content is in other docs
   - **Action**: Review → Move to `/docs/` or archive

2. **COMPREHENSIVE_ENHANCEMENT_OPPORTUNITIES.md**
   - **Evidence**: Check if still relevant
   - **Action**: Review → Move to `/docs/` or archive

3. **COPY_CENTRALIZATION_CHANGELOG.md**
   - **Evidence**: Historical changelog
   - **Action**: Move to `/docs/` or archive

4. **DESIGN_SYSTEM_MIGRATION.md**
   - **Evidence**: Migration doc (may be historical)
   - **Action**: Review → Move to `/docs/` or archive

5. **LOGO_SEO_GUIDE.md**
   - **Evidence**: Check if content is in other SEO docs
   - **Action**: Review → Consolidate or archive

6. **MOBILE_OPTIMIZATION_SUMMARY.md**
   - **Evidence**: Check if content is in `/docs/MOBILE_REVIEW_ParkProHome.md`
   - **Action**: Review → Consolidate or archive

7. **PARKPRO_FEATURE_AUDIT_REPORT.md**
   - **Evidence**: Audit report
   - **Action**: Move to `/AUDITS/` or `/docs/`

8. **REFACTORING_CHANGELOG.md**
   - **Evidence**: Historical changelog
   - **Action**: Move to `/docs/` or archive

9. **REFACTORING_SUMMARY.md**
   - **Evidence**: Historical summary
   - **Action**: Move to `/docs/` or archive

10. **SEO_DOMINATION_STRATEGY.md**
    - **Evidence**: Check if content is in other SEO docs
    - **Action**: Review → Consolidate or archive

11. **SEO_IMPLEMENTATION_SUMMARY.md**
    - **Evidence**: Check if content is in other SEO docs
    - **Action**: Review → Consolidate or archive

12. **SEO_OPTIMIZATION_GUIDE.md**
    - **Evidence**: Check if content is in other SEO docs
    - **Action**: Review → Consolidate or archive

13. **DEPLOYMENT_GUIDE.md**
    - **Evidence**: May be duplicate of info in README
    - **Action**: Review → Consolidate or move to `/docs/`

### AUDITS Folder
- **Status**: Keep folder, but review contents
- **Action**: Ensure all audit docs are in `/AUDITS/` folder

---

## Code Files

### Potential Duplicates

1. **`src/design/tokens.js` vs `src/design-system/tokens.js`**
   - **Evidence**: Need to check which is used
   - **Action**: Check imports → Keep one, quarantine other

2. **`src/components/ui/Button.jsx` vs `src/design/components/Button.jsx`**
   - **Evidence**: Need to check which is used
   - **Action**: Check imports → Keep one, quarantine other

3. **`src/components/ui/Card.jsx` vs `src/design/components/Card.jsx`**
   - **Evidence**: Need to check which is used
   - **Action**: Check imports → Keep one, quarantine other

---

## Scripts

### `/scripts/` Folder
1. **accessibility-check.js**
   - **Evidence**: Check if called by package.json or CI
   - **Action**: Verify usage

2. **audit-routes.js**
   - **Evidence**: Check if called by package.json or CI
   - **Action**: Verify usage

3. **verify-centralized-copy.js**
   - **Evidence**: Check if called by package.json or CI
   - **Action**: Verify usage

4. **audit-output/` folder**
   - **Evidence**: Generated output files
   - **Action**: Check if needed or can be gitignored

---

## Deployment Scripts

1. **deploy.sh**
   - **Status**: Keep (likely used)
   - **Action**: Verify it's the active deployment script

2. **deploy-to-existing-s3.sh**
   - **Evidence**: Check if this is still used
   - **Action**: Verify if duplicate or alternative

---

## Next Steps

1. Run import/reference searches for each candidate
2. Check package.json scripts
3. Check CI/CD configs (`.github/workflows/`)
4. Create evidence for each candidate
5. Move candidates to quarantine
6. Test after each batch
