const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Anh Tailor",
  "image": "https://anhtailor.vn/images/logo-anh-tailor.jpg",
  "description": "Professional tailor shop in Ham Tien, Mui Ne. High-quality custom suit, vest, and shirt tailoring services at reasonable prices.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "357/1 Nguyen Dinh Chieu",
    "addressLocality": "Ham Tien",
    "addressRegion": "Mui Ne",
    "postalCode": "800000",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.9381",
    "longitude": "108.2778"
  },
  "telephone": "+84345197864",
  "url": "https://anhtailor.vn/",
  "sameAs": [
    "https://www.facebook.com/anhtailorvn/"
  ],
  "priceRange": "$40 - $380",
  "openingHours": "Mo-Su 08:00-20:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "30",
    "bestRating": "5",
    "worstRating": "1"
  },
  "inLanguage": ["vi", "en", "de", "fr", "es"],
  "potentialAction": {
    "@type": "ReadAction",
    "target": [
      "https://anhtailor.vn/?lang=vi",
      "https://anhtailor.vn/?lang=en",
      "https://anhtailor.vn/?lang=de",
      "https://anhtailor.vn/?lang=fr",
      "https://anhtailor.vn/?lang=es"
    ]
  }
};

export default defineNuxtConfig({
  ssr: true,
  css: ["~/style.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        {
          name: "keywords",
          content:
            "tailor mui ne, custom suit mui ne, tailor ham tien, custom suit vietnam, bespoke suit, tailor shop vietnam, may veston mui ne, may ao vest ham tien, tailor phan thiet"
        },
        { name: "author", content: "Anh Tailor" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#3c2414" },
        { name: "msapplication-TileColor", content: "#3c2414" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://anhtailor.vn/images/background.jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Anh Tailor - Professional tailor shop in Ham Tien, Mui Ne"
        },
        { property: "og:site_name", content: "Anh Tailor" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://anhtailor.vn/images/background.jpeg"
        },
        {
          name: "twitter:image:alt",
          content: "Anh Tailor - Professional tailor shop in Ham Tien, Mui Ne"
        },
        {
          name: "google-site-verification",
          content: "QRcJoaZ-4mPyMz7jEHGefqjtKqaii0EfFcr0MWsOT2w"
        }
      ],
      link: [
        { rel: "icon", type: "image/jpeg", href: "/images/logo-anh-tailor.jpg" },
        { rel: "apple-touch-icon", href: "/images/logo-anh-tailor.jpg" },
        { rel: "preconnect", href: "https://cdnjs.cloudflare.com" },
        { rel: "preconnect", href: "https://unpkg.com" },
        { rel: "dns-prefetch", href: "https://images.unsplash.com" },
        {
          rel: "preload",
          as: "image",
          href: "/images/logo-anh-tailor.jpg",
          fetchpriority: "high"
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/background.jpeg",
          fetchpriority: "high"
        },
        { rel: "preload", as: "image", href: "/images/story.jpg" },
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        }
      ],
      script: [
        {
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0",
          async: true,
          defer: true,
          crossorigin: "anonymous"
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd)
        }
      ]
    }
  },
  nitro: {
    publicAssets: [
      {
        baseURL: "/images",
        dir: "images"
      },
      {
        baseURL: "/",
        dir: "public"
      }
    ]
  }
});
