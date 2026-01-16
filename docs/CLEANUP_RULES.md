# ParkProHome - Cleanup Rules & Quarantine Strategy

## Quarantine Strategy

### Quarantine Folder
- **Location**: `/__graveyard__/` (top-level)
- **Purpose**: Store files that are suspected to be unused but not yet deleted
- **Restoration**: Files can be easily restored by moving them back
- **Naming**: Use descriptive subfolders:
  - `/__graveyard__/components-unused/`
  - `/__graveyard__/pages-unused/`
  - `/__graveyard__/scripts-unused/`
  - `/__graveyard__/docs-archived/`

### Quarantine Process
1. **Move** (don't delete) suspected unused files to `/__graveyard__/`
2. **Document** in `__graveyard__/README.md` what was moved and why
3. **Test** that app still works
4. **Wait** for a grace period (e.g., 1-2 weeks)
5. **Delete** only after confirming no issues

## What Qualifies as Unused?

### Safe to Quarantine/Remove (High Confidence)
- ✅ Files with **zero imports** anywhere in codebase
- ✅ Files **not referenced** in:
  - `package.json` scripts
  - `vite.config.js`
  - `index.html`
  - Route definitions
  - Build pipeline
  - CI/CD configs
- ✅ **Duplicate configs** (keep one, quarantine others)
- ✅ **Old scripts** not called by package.json or CI
- ✅ **Outdated docs** (move to `__graveyard__/docs-archived/`)

### Quarantine First (Medium Confidence)
- ⚠️ Files with **unclear usage** (need manual review)
- ⚠️ Files **only imported** in test files (may be test utilities)
- ⚠️ Files in **experimental/experiments** folders
- ⚠️ **Legacy components** that might be used conditionally

### Keep (Needed)
- ❌ Files **imported** in entry points or routes
- ❌ Files **referenced** in build config
- ❌ Files **used** in package.json scripts
- ❌ Files **referenced** in deployment scripts
- ❌ **Environment configs** (even if minimal)
- ❌ **Public assets** referenced in HTML/manifests

## Special Caution Lists

### NEVER Delete Without Extreme Care
- 🔴 **Entry points**: `src/main.jsx`, `index.html`
- 🔴 **Route definitions**: `src/App.jsx`
- 🔴 **Build configs**: `vite.config.js`, `package.json`
- 🔴 **Deployment scripts**: `deploy.sh`, `deploy-to-existing-s3.sh`
- 🔴 **Environment files**: `env.example`
- 🔴 **Public assets**: `/public/` folder contents

### Migration-Specific Rules
- N/A for ParkProHome (no migrations)

## Evidence Requirements

For each candidate removal, document:
1. **Where you searched**: List all search locations
2. **What you found**: Show grep/search results
3. **Confidence level**: High/Medium/Low
4. **Risk assessment**: What could break if wrong?

## Example Evidence Format

```markdown
### Candidate: `src/components/OldComponent.jsx`

**Evidence**:
- Searched: `grep -r "OldComponent" src/`
- Results: No matches found
- Checked: `src/App.jsx` - not imported
- Checked: Route definitions - not used
- Confidence: **High**
- Risk: **Low** - no references found

**Action**: Move to `__graveyard__/components-unused/`
```

## Restoration Process

If something breaks after quarantine:
1. Identify the missing file
2. Check `__graveyard__/README.md` for location
3. Move file back to original location
4. Update `__graveyard__/README.md` to mark as restored
5. Document why it was needed
