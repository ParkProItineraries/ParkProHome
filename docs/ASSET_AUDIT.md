# ParkProHome - Asset Usage Audit Report

**Generated**: 2026-01-14T20:28:06.211Z
**Purpose**: Identify which assets are used and which may be unused

## Summary

- **Total Assets**: 22
- **Used Assets**: 9
- **Candidate Unused**: 13

## Important Notes

⚠️ **This audit identifies potential unused assets but does NOT guarantee they are safe to remove.**

**Confidence Levels**:
- **High**: Asset is directly imported/required or referenced in HTML/CSS
- **Medium**: Asset appears in string literals (may be false positive)
- **Low**: No references found (may still be used dynamically or in build process)

**CANDIDATE_UNUSED** assets should be manually reviewed before removal:
- Check for dynamic imports or runtime asset loading
- Verify assets aren't referenced in build configuration
- Check if assets are used in external tools or processes
- Consider if assets are referenced via environment variables or config files

## Used Assets (9)

| Asset | Directory | References | Confidence | Reference Locations |
|-------|-----------|------------|------------|---------------------|
| `android-chrome-192x192.png` | `public` | 1 | medium | index.html:62 (string) |
| `apple-touch-icon.png` | `public` | 2 | medium | src/components/seo/SEO.jsx:137 (string); index.html:55 (string) |
| `favicon-16x16.png` | `public` | 2 | medium | src/components/seo/SEO.jsx:132 (string); index.html:52 (string) |
| `favicon-32x32.png` | `public` | 2 | medium | src/components/seo/SEO.jsx:126 (string); index.html:53 (string) |
| `favicon-48x48.png` | `public` | 1 | medium | index.html:54 (string) |
| `favicon.png` | `public` | 3 | medium | index.html:51 (string); index.html:59 (string); index.html:60 (string) |
| `favicon.svg` | `public` | 1 | medium | index.html:65 (string) |
| `logo.png` | `public` | 6 | medium | src/pages/Home.jsx:571 (string); index.html:73 (string); index.html:74 (string); index.html:75 (string); index.html:121 (string); index.html:158 (string) |
| `Park Pro White_Long.svg` | `src/assets` | 2 | high | src/components/Footer.jsx:7 (import); src/components/Navbar.jsx:7 (import) |

## Candidate Unused Assets (13)

⚠️ **These assets have no references found. Review carefully before removal.**

| Asset | Directory | Extension |
|-------|-----------|-----------|
| `Park Pro Black_Long.svg` | `src/assets` | .svg |
| `Park Pro Pin.png` | `src/assets` | .png |
| `Park Pro_Black.svg` | `src/assets` | .svg |
| `Park Pro_White.svg` | `src/assets` | .svg |
| `Park Pro-Favicon.png` | `src/assets` | .png |
| `ParkPro_White_Cleaned.svg` | `src/assets` | .svg |
| `ParkPro-Icon-Full.svg` | `src/assets` | .svg |
| `ParkPro-Icon-Transparent.svg` | `src/assets` | .svg |
| `ParkProBlack.svg` | `src/assets` | .svg |
| `ParkProLogo-Black.png` | `src/assets` | .png |
| `ParkProLogo.png` | `src/assets` | .png |
| `ParkProLogo1.png` | `src/assets` | .png |
| `ParkProWhite.svg` | `src/assets` | .svg |

## Detailed Reference Information

### public/android-chrome-192x192.png

**Status**: USED
**Confidence**: medium

**References**:

- **index.html:62** (string, medium confidence)
  ```
  <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
  ```

### public/apple-touch-icon.png

**Status**: USED
**Confidence**: medium

**References**:

- **src/components/seo/SEO.jsx:137** (string, medium confidence)
  ```
  href="/apple-touch-icon.png"
  ```

- **index.html:55** (string, medium confidence)
  ```
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  ```

### public/favicon-16x16.png

**Status**: USED
**Confidence**: medium

**References**:

- **src/components/seo/SEO.jsx:132** (string, medium confidence)
  ```
  href="/favicon-16x16.png"
  ```

- **index.html:52** (string, medium confidence)
  ```
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  ```

### public/favicon-32x32.png

**Status**: USED
**Confidence**: medium

**References**:

- **src/components/seo/SEO.jsx:126** (string, medium confidence)
  ```
  href="/favicon-32x32.png"
  ```

- **index.html:53** (string, medium confidence)
  ```
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  ```

### public/favicon-48x48.png

**Status**: USED
**Confidence**: medium

**References**:

- **index.html:54** (string, medium confidence)
  ```
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
  ```

### public/favicon.png

**Status**: USED
**Confidence**: medium

**References**:

- **index.html:51** (string, medium confidence)
  ```
  <link rel="icon" type="image/png" href="/favicon.png" />
  ```

- **index.html:59** (string, medium confidence)
  ```
  <link rel="shortcut icon" href="/favicon.png" />
  ```

- **index.html:60** (string, medium confidence)
  ```
  <link rel="icon" href="/favicon.png" />
  ```

### public/favicon.svg

**Status**: USED
**Confidence**: medium

**References**:

- **index.html:65** (string, medium confidence)
  ```
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  ```

### public/logo.png

**Status**: USED
**Confidence**: medium

**References**:

- **src/pages/Home.jsx:571** (string, medium confidence)
  ```
  logo: "https://parkproit.com/assets/logo.png",
  ```

- **index.html:73** (string, medium confidence)
  ```
  <link rel="image_src" href="https://parkproit.com/logo.png" />
  ```

- **index.html:74** (string, medium confidence)
  ```
  <meta property="og:image" content="https://parkproit.com/logo.png" />
  ```

- **index.html:75** (string, medium confidence)
  ```
  <meta property="og:image:secure_url" content="https://parkproit.com/logo.png" />
  ```

- **index.html:121** (string, medium confidence)
  ```
  "url": "https://parkproit.com/logo.png",
  ```

- **index.html:158** (string, medium confidence)
  ```
  "url": "https://parkproit.com/logo.png",
  ```

### src/assets/Park Pro White_Long.svg

**Status**: USED
**Confidence**: high

**References**:

- **src/components/Footer.jsx:7** (import, high confidence)
  ```
  import ParkProLogo from "../assets/Park Pro White_Long.svg?url";
  ```

- **src/components/Navbar.jsx:7** (import, high confidence)
  ```
  import ParkProLogo from "../assets/Park Pro White_Long.svg?url";
  ```

