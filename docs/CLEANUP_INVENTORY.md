# ParkPro Monorepo - Cleanup Inventory

**Generated**: 2025-01-27  
**Purpose**: Baseline inventory for surgical cleanup across all ParkPro repositories

## Repository Overview

### 1. ParkProHome
- **Type**: Marketing/Landing Page (React + Vite)
- **Purpose**: Public-facing SEO-optimized website
- **Entry**: `src/main.jsx` → `App.jsx`
- **Deploy**: S3 + CloudFront
- **Docs**: `/docs/REPO_MAP.md`

### 2. ParkProUI
- **Type**: Agent Dashboard (React + Vite)
- **Purpose**: Main SaaS application for travel agents
- **Entry**: `src/main.jsx` → `App.jsx`
- **Deploy**: S3 + CloudFront (`app.parkproit.com`)
- **Docs**: `/docs/REPO_MAP.md`
- **Note**: Has `__graveyard/` folder (quarantined files)

### 3. ParkProBackend
- **Type**: Backend API (Node.js + Express)
- **Purpose**: REST API server, database, business logic
- **Entry**: `server.js` → `createServer.js`
- **Deploy**: AWS (CloudFormation)
- **Database**: PostgreSQL (AWS Aurora)
- **Migrations**: `/migrations/` (12 SQL files)
- **Docs**: `/docs/REPO_MAP.md` (already exists)

### 4. ParkProClients
- **Type**: Client Portal (React + Vite)
- **Purpose**: Client-facing portal for viewing itineraries
- **Entry**: `src/main.jsx` → `App.jsx`
- **Deploy**: S3 + CloudFront (`disney.parkproit.com`)
- **Docs**: `/docs/REPO_MAP.md`

### 5. ParkProAdmin
- **Type**: Admin Dashboard (React + Vite)
- **Purpose**: Internal admin dashboard
- **Entry**: `src/main.jsx` → `App.jsx`
- **Deploy**: S3 + CloudFront (IP-restricted)
- **Docs**: `/docs/REPO_MAP.md`

## Common Patterns

### Build Systems
- **Frontend**: Vite 6.x
- **Backend**: Node.js >=18.0.0
- **Package Manager**: npm

### Deployment
- **Frontend**: AWS S3 + CloudFront
- **Backend**: AWS CloudFormation
- **Secrets**: AWS SSM Parameter Store

### Testing
- **Frontend**: Vitest (ParkProHome), Jest (ParkProUI, ParkProClients, ParkProAdmin)
- **Backend**: Jest
- **E2E**: Cypress (ParkProUI)

## Key Areas for Cleanup

### 1. Documentation
- Multiple markdown files in root directories
- Some outdated READMEs
- Need consolidation

### 2. Scripts
- Various scripts in `/scripts/` folders
- Need to verify which are actually used

### 3. Migrations (ParkProBackend)
- 12 SQL migration files
- Need to verify which have been applied
- Need migration management strategy

### 4. Quarantine (ParkProUI)
- `__graveyard/` folder already exists
- Good pattern to follow for other repos

### 5. Test Files
- Various test configurations
- Need to verify test coverage and usage

## Next Steps

1. ✅ Phase 0: Baseline inventory (COMPLETE)
2. ⏭️ Phase 1: Golden Path test plan + baseline verification
3. ⏭️ Phase 2: Quarantine strategy
4. ⏭️ Phase 3: Dead code detection
5. ⏭️ Phase 4: Reorganization
6. ⏭️ Phase 5: Migrations audit
7. ⏭️ Phase 6: Documentation cleanup
8. ⏭️ Phase 7: Validation
9. ⏭️ Phase 8: Cleanup reports
