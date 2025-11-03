import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'ParkPro',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteName = 'ParkPro';
  const siteUrl = 'https://parkproit.com';
  const defaultImage = `${siteUrl}/logo.png`;
  const twitterHandle = '@parkproit';

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - #1 Disney Planning Software for Travel Agents`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

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
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebSite',
          "name": fullTitle,
          "description": description,
          "url": fullUrl,
          "image": fullImage,
          "author": {
            "@type": "Organization",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": siteName,
            "url": siteUrl,
            "logo": {
              "@type": "ImageObject",
              "url": defaultImage
            }
          },
          ...(type === 'article' && {
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "section": section,
            "keywords": tags.join(', ')
          })
        })}
      </script>

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

// Predefined SEO configurations for common pages
export const SEOConfigs = {
  home: {
    title: 'ParkPro - #1 Disney Planning Software for Travel Agents',
    description: 'ParkPro is the #1 Disney planning software for travel agents. Create automated Disney World & Disneyland itineraries in 5 minutes. Save 10+ hours per client, close 3x more bookings with ParkPro travel agent tools.',
    keywords: 'Disney planning software, travel agent software, Disney itinerary generator, automated Disney itineraries, Disney World planning software, Disneyland planning tools, travel agent Disney tools, Disney vacation planning software, best Disney planning software, travel agent productivity tools, Disney planning automation, travel agent business tools, vacation planning software, Disney itinerary software, travel agent software comparison, Disney planning alternatives, travel booking software, client management for travel agents, travel agent tools 2024, Disney planning software reviews, automated vacation planning, travel agent workflow tools',
    url: '/'
  },
  pricing: {
    title: 'Pricing - ParkPro Disney Planning Software',
    description: 'Affordable pricing plans for travel agents. Start with our Solo plan at $97/month or choose Professional for $197/month. Save 10+ hours per client and increase bookings by 3x.',
    keywords: 'ParkPro pricing, Disney planning software cost, travel agent software pricing, Disney itinerary software price, travel agent tools pricing, Disney planning software plans, travel agent software cost, Disney planning software subscription, travel agent software pricing plans, Disney itinerary generator pricing',
    url: '/pricing'
  },
  features: {
    title: 'Features - ParkPro Disney Planning Software',
    description: 'Discover powerful features designed for travel agents: automated itinerary generation, client management, team collaboration, white-label branding, and more.',
    keywords: 'ParkPro features, Disney planning software features, travel agent software features, Disney itinerary generator features, automated Disney planning features, travel agent tools features, Disney planning software capabilities, travel agent software functionality, Disney itinerary software features, travel agent workflow features',
    url: '/features'
  },
  solutions: {
    title: 'Solutions - ParkPro for Travel Professionals',
    description: 'Tailored solutions for solo agents, travel agencies, and enterprise organizations. Scale your Disney planning business with our comprehensive platform.',
    keywords: 'travel agent solutions, Disney planning solutions, travel agency software, solo travel agent tools, travel agency management, enterprise travel software, Disney planning for agencies, travel agent business solutions, Disney planning for solo agents, travel agency Disney tools',
    url: '/solutions'
  },
  'solo-agents': {
    title: 'Solo Travel Agents - ParkPro Disney Planning Software',
    description: 'Perfect for solo travel agents who want to scale their Disney business. Save 10+ hours per client, serve 3x more clients, and grow your business with automation.',
    keywords: 'solo travel agent, independent travel agent, solo agent Disney planning, travel agent business growth, solo travel agent tools, independent travel agent software, solo agent Disney tools, travel agent automation, solo travel agent productivity, independent travel agent Disney planning',
    url: '/solutions/solo-agents'
  },
  agencies: {
    title: 'Travel Agencies - ParkPro Team Management',
    description: 'Ideal for multi-agent agencies. Standardize your Disney planning process, improve team collaboration, and ensure consistent quality across all agents.',
    keywords: 'travel agency software, travel agency management, multi-agent travel agency, travel agency Disney planning, travel agency team collaboration, travel agency productivity, travel agency automation, travel agency Disney tools, travel agency team management, travel agency workflow',
    url: '/solutions/agencies'
  },
  enterprise: {
    title: 'Enterprise - ParkPro Custom Solutions',
    description: 'Comprehensive solution for large organizations with custom integrations, dedicated support, advanced security, and enterprise-grade infrastructure.',
    keywords: 'enterprise travel software, large travel organization, enterprise Disney planning, travel enterprise solutions, enterprise travel agent software, corporate travel planning, enterprise travel management, large travel agency software, enterprise travel automation, corporate travel agent tools',
    url: '/solutions/enterprise'
  },
  demo: {
    title: 'Demo - See ParkPro in Action',
    description: 'Watch how travel agents create professional Disney itineraries in under 5 minutes. See the automation, customization, and client experience in action.',
    keywords: 'ParkPro demo, Disney planning software demo, travel agent software demo, Disney itinerary generator demo, automated Disney planning demo, travel agent tools demo, Disney planning software video, travel agent software demonstration, Disney itinerary software demo, travel agent workflow demo',
    url: '/demo'
  },
  'request-access': {
    title: 'Request Access - Join ParkPro Early Access',
    description: 'Join the exclusive early access program for travel agents. Get priority access, special pricing, and direct support from our team.',
    keywords: 'ParkPro early access, Disney planning software early access, travel agent early access, Disney itinerary generator early access, travel agent software early access, Disney planning software beta, travel agent tools early access, Disney planning software preview, travel agent software early access, Disney itinerary software early access',
    url: '/request-access'
  }
};

export default SEO;
