import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  schemaType,
  author = "ParkPro",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}) => {
  const siteName = "ParkPro";
  const siteUrl = "https://parkproit.com";
  const defaultImage = `${siteUrl}/logo.png`;
  const twitterHandle = "@parkproit";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} - #1 Disney Planning Software for Travel Agents`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : defaultImage;

  // Determine JSON-LD @type: schemaType has highest priority, then fallback to Article if type === 'article', otherwise WebPage
  const jsonLdType = schemaType || (type === "article" ? "Article" : "WebPage");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": jsonLdType,
          name: fullTitle,
          description: description,
          url: fullUrl,
          image: fullImage,
          author: {
            "@type": "Organization",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
            logo: {
              "@type": "ImageObject",
              url: defaultImage,
            },
          },
          ...(type === "article" && {
            datePublished: publishedTime,
            dateModified: modifiedTime,
            section: section,
            keywords: tags.join(", "),
          }),
        })}
      </script>

      {/* Favicon - Comprehensive browser support */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEO;