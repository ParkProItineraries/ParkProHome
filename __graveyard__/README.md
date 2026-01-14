# ParkProHome - Quarantine Folder

**Purpose**: This folder contains files that are suspected to be unused but have not been deleted yet. Files are moved here for safety before final deletion.

## Structure

- `/docs-archived/` - Historical or redundant documentation files
- `/scripts-unused/` - Scripts that are not referenced anywhere in the codebase

## Restoration Process

If something breaks after quarantine:

1. **Identify the missing file** - Check error messages or git diff
2. **Find the file** - Check this README for location
3. **Restore the file** - Move it back to its original location
4. **Update this README** - Mark the file as restored
5. **Document why it was needed** - Add a note about why it's required

## Files Moved

### Documentation Files

| File | Original Location | Moved Date | Reason | Status |
|------|------------------|------------|--------|--------|
| DESIGN_SYSTEM_MIGRATION.md | root | 2025-01-27 | Historical migration documentation | Archived |
| REFACTORING_SUMMARY.md | root | 2025-01-27 | Historical refactoring summary | Archived |
| REFACTORING_CHANGELOG.md | root | 2025-01-27 | Historical refactoring changelog | Archived |
| COPY_CENTRALIZATION_CHANGELOG.md | root | 2025-01-27 | Historical changelog | Archived |
| COMPREHENSIVE_ENHANCEMENT_OPPORTUNITIES.md | root | 2025-01-27 | Historical analysis document | Archived |
| SEO_DOMINATION_STRATEGY.md | root | 2025-01-27 | Historical SEO strategy | Archived |
| SEO_IMPLEMENTATION_SUMMARY.md | root | 2025-01-27 | Historical SEO summary | Archived |
| SEO_OPTIMIZATION_GUIDE.md | root | 2025-01-27 | Historical SEO guide | Archived |
| BRAND_SEO_STRATEGY.md | root | 2025-01-27 | Historical SEO strategy | Archived |
| LOGO_SEO_GUIDE.md | root | 2025-01-27 | Historical SEO guide | Archived |
| MOBILE_OPTIMIZATION_SUMMARY.md | root | 2025-01-27 | Historical summary (redundant with docs/MOBILE_REVIEW_ParkProHome.md) | Archived |

### Scripts

| File | Original Location | Moved Date | Reason | Status |
|------|------------------|------------|--------|--------|
| accessibility-check.js | scripts/ | 2025-01-27 | Not referenced in package.json, CI/CD, or deployment scripts | Quarantined |
| audit-routes.js | scripts/ | 2025-01-27 | Not referenced in package.json, CI/CD, or deployment scripts | Quarantined |
| verify-centralized-copy.js | scripts/ | 2025-01-27 | Not referenced in package.json, CI/CD, or deployment scripts | Quarantined |

## Deletion Policy

Files in quarantine will be reviewed after a grace period (recommended: 1-2 weeks). Only after confirming no issues should files be permanently deleted.

## Notes

- All moves are reversible
- Original file contents are preserved exactly
- No files are modified during quarantine
- All moves are documented in `docs/CLEANUP_REPORT.md`
