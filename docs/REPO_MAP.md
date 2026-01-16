# ParkProHome - Repository Map

## Purpose
Public-facing marketing/landing page for ParkPro. SEO-optimized website that drives signups and conversions for the travel agent software platform.

## Framework & Runtime
- **Framework**: React 19.1.0 with Vite 6.3.5
- **Runtime**: Node.js (ES modules)
- **Package Manager**: npm
- **Type**: ES Modules (import/export)
- **Styling**: styled-components, Tailwind CSS 4.1.12

## Entry Points
- **HTML Entry**: `index.html` → loads `/src/main.jsx`
- **React Entry**: `src/main.jsx` → renders `App.jsx`
- **App Router**: `src/App.jsx` → defines all routes with React Router

## Key Scripts (package.json)
- `npm run dev` - Development server (Vite)
- `npm run build` - Production build (`vite build`)
- `npm run preview` - Preview production build
- `npm run lint` - ESLint
- `npm test` - Vitest tests
- `npm run test:ui` - Vitest UI
- `npm run test:run` - Run tests once

## How to Run Locally
```bash
cd ParkProHome
npm install
npm run dev
# Runs on http://localhost:5173 (Vite default)
```

## How to Test
```bash
npm test                    # Vitest unit tests
npm run test:ui             # Vitest UI
npm run test:run            # Run tests once
```

## How It Deploys
- **Deployment Script**: `deploy.sh` or `deploy-to-existing-s3.sh`
- **Target**: AWS S3 + CloudFront
- **Build Output**: `dist/` directory (Vite build)
- **Configuration**: Fetches config from backend API (`/api/config`) - no env vars needed!

## Key Folders & Roles
- `/src/` - Source code
  - `pages/` - Page components (Home, Pricing, Features, About, etc.)
  - `components/` - Reusable components (Navbar, Footer, CTAButton, etc.)
  - `styles/` - Global styles, theme, mixins
  - `design/` - Design system components
  - `content/` - Content/strings management
  - `config/` - Configuration (pricing, environment)
  - `routes/` - Route redirects
  - `utils/` - Utility functions (analytics)
  - `assets/` - Images, logos, SVGs
- `/public/` - Static assets (favicons, manifests)
- `/docs/` - Documentation

## Environment Variables
- **NONE REQUIRED!** 🎉
- Configuration fetched from backend API (`/api/config`)
- Optional: `VITE_GA4_MEASUREMENT_ID` (Google Analytics - silences warnings)

## Routes (from App.jsx)
### Public Pages
- `/` - Home
- `/pricing` - Pricing
- `/features` - Features
- `/solutions` - Solutions
- `/solo-agents` - Solo Agents
- `/agencies` - Agencies
- `/enterprise` - Enterprise
- `/about` - About
- `/demo` - Demo
- `/request-access` - Request Access (with payment)
- `/signup` - Signup
- `/faq` - FAQ
- `/contact` - Contact
- `/comparison` - Comparison

### SEO Pages
- `/disney-planning-software` - Disney Planning Software
- `/travel-agent-software` - Travel Agent Software
- `/travel-agent-itinerary-software` - Travel Agent Itinerary Software
- `/disney-travel-agent-software` - Disney Travel Agent Software
- `/travel-agent-workflow-software` - Travel Agent Workflow Software
- `/travel-agency-software` - Travel Agency Software

### Business Pages
- `/terms-of-service` - Terms of Service
- `/privacy-policy` - Privacy Policy

### Error Pages
- `/*` - 404 Not Found

## Dependencies
- React 19.1.0
- React Router DOM 7.8.1
- styled-components 6.1.19
- Framer Motion 12.23.12
- Lucide React (icons)
- React Helmet Async (SEO)
- Stripe React (payment)
- Vitest (testing)

## Special Notes
- **Zero Environment Variables**: All config comes from backend API
- **SEO Optimized**: Comprehensive meta tags, structured data, Open Graph
- **Lazy Loading**: Components lazy-loaded for performance
- **Analytics**: Google Analytics integration
- **Accessibility**: Accessibility provider included
- **Error Boundaries**: Error boundary components
- **Redirects**: Redirect map for legacy URLs
