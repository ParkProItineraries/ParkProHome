# Copy Centralization Changelog

## Overview
Centralized all UI text, headings, CTAs, and microcopy into a single source of truth to improve maintainability, consistency, and enable A/B testing.

## New Files Created

### `src/content/strings.js`
- **Purpose**: Single source of truth for all marketing copy
- **Structure**: 
  - `copy.hero` - Hero section text
  - `copy.sections` - Feature section headings
  - `copy.ctas` - All call-to-action buttons
  - `copy.microcopy` - UI states (loading, error, success)
  - `copy.pages` - Page-specific copy with titles/descriptions
  - `copy.nav` - Navigation labels
  - `copy.forms` - Form validation messages
  - `copy.footer` - Footer content
  - `copy.testimonials` - Social proof section
  - `copy.trust` - Trust signals and badges

### `src/content/getCopy.js`
- **Purpose**: Future-proof helper for A/B testing
- **Usage**: `const copy = getCopy('A')` or `getCopy('B')`
- **Current**: Returns single copy object
- **Future**: Can return variants based on experiments

## Pages Updated

### ✅ Home.jsx (COMPLETE)
**Changes:**
- Removed: "The Salesforce of Travel Agent Software" ❌
- Replaced with: "Itineraries in minutes. Operations in one place." ✅
- Hero badge: Now uses `copy.hero.badge`
- Hero H1: Now uses `copy.hero.h1`
- Hero subtitle: Now uses `copy.hero.sub`
- CTA buttons: Now use `copy.ctas.start` and `copy.ctas.demo`
- Helmet title: Now uses `copy.pages.home.title`
- Helmet description: Now uses `copy.pages.home.description`

**Phrasing Improvements:**
- Old: "The Salesforce of Travel Agent Software" (jargon, competitor name-drop)
- New: "Itineraries in minutes. Operations in one place." (clear, outcome-driven)
- Old: "#1 Disney planning software... 5 minutes... 3x more bookings" (hype-heavy)
- New: "Create beautiful, accurate Disney itineraries in minutes, track clients and bookings, and give your team a shared workspace that just works." (benefit-focused, credible)

### 🔄 Pricing.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

### 🔄 Features.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

### 🔄 FAQ.jsx (IN PROGRESS)
- Has SEO component
- Ready for copy integration

### 🔄 Contact.jsx (IN PROGRESS)
- Has SEO component
- Ready for copy integration

### 🔄 Comparison.jsx (IN PROGRESS)
- Has Helmet
- Ready for copy integration

### 🔄 Demo.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

### 🔄 About.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

### 🔄 Solutions.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

### 🔄 SoloAgents.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

### 🔄 Agencies.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

### 🔄 Enterprise.jsx (IN PROGRESS)
- Added SEO component
- Ready for copy integration

## Key Phrasing Changes

### Removed Jargon:
- ❌ "Salesforce of Travel"
- ❌ "AI magic"
- ❌ "World-class CRM"
- ❌ "#1 Disney planning software" (overused)
- ❌ Vague superlatives

### Replaced With Clear Benefits:
- ✅ "Itineraries in minutes. Operations in one place."
- ✅ "Itineraries that sell the trip."
- ✅ "One workspace for your team."
- ✅ "Own your margins."
- ✅ "Save 10+ hours per client."

## Voice & Tone Guidelines (Applied)

**Confident:** State benefits directly without hedging  
**Premium:** Professional language, not flowery  
**Plain-spoken:** No jargon, clear outcomes  
**Outcomes-driven:** What you get, not what we do  

## Benefits of This Approach

1. **Maintainability**: Update copy in one file, changes everywhere
2. **Consistency**: Same message across all touchpoints
3. **A/B Testing**: Easy to test variants with `getCopy('B')`
4. **Localization**: Easy to add `strings_es.js`, `strings_fr.js`
5. **Quality Control**: All copy reviewed in one place
6. **Developer Velocity**: No hunting through JSX for text changes

## Implementation Status

- ✅ Strings module created
- ✅ getCopy helper created
- ✅ Home.jsx fully updated
- 🔄 11 pages remaining (foundation in place)
- ✅ Build passing
- ✅ Zero layout changes
- ✅ Zero pricing changes
- ✅ Zero style changes

## Next Steps

To complete copy centralization:
1. Update remaining 11 pages to import and use `copy`
2. Replace all hard-coded headings with `copy.pages.{page}.h1`
3. Replace all CTAs with `copy.ctas.{action}`
4. Replace all section titles with `copy.sections.{section}.h2`
5. Update all Helmet tags to use `copy.pages.{page}.title/description`
6. Search for any remaining "Salesforce", "AI", or jargon terms
7. Final QA pass for brand voice consistency

## Verification

### Build Status
```bash
$ npm run build
✓ built in 1.02s
```

### Import Test
```javascript
import { copy } from '../content/strings';
console.log(copy.hero.h1);
// Output: "Itineraries in minutes. Operations in one place."
```

### Jargon Removal
```bash
$ grep -r "Salesforce" src/pages/Home.jsx
# Result: 0 matches ✅
```

## Notes

- Layout unchanged ✅
- Pricing unchanged ✅
- Styles unchanged ✅
- Only copy/text modified ✅
- Build passing ✅

