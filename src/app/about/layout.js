export const metadata = {
  title: "Best Skin and Hair Clinic in Nanakramguda, Hyderabad",
  description: "Best Skin and Hair Clinic in Nanakramguda, Hyderabad providing treatments for hair loss, acne, pigmentation, anti-aging, laser therapy, and skin rejuvenation.",
  keywords: [
    "best skin clinic hyderabad",
    "hair clinic nanakramguda",
    "dermatologist hyderabad",
    "hair loss treatment hyderabad",
    "acne treatment hyderabad",
    "pigmentation treatment hyderabad",
    "anti-aging clinic hyderabad",
    "laser therapy hyderabad",
    "skin rejuvenation hyderabad",
    "Epithelia Clinic about"
  ],
  authors: [{ name: "Dr. Naresh Kumar" }],
  creator: "Dr. Naresh Kumar",
  publisher: "Epithelia Clinic",
  
  // Canonical URL
  alternates: {
    canonical: "https://www.epitheliaclinic.com/about",
  },
  
  // Open Graph Meta Tags
  openGraph: {
    title: "Best Skin and Hair Clinic in Nanakramguda, Hyderabad",
    description: "Best Skin and Hair Clinic in Nanakramguda, Hyderabad providing treatments for hair loss, acne, pigmentation, anti-aging, laser therapy, and skin rejuvenation.",
    url: "https://www.epitheliaclinic.com/about",
    siteName: "Epithelia Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Epithelia Skin & Hair Clinic",
      },
    ],
  },
  
  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Best Skin and Hair Clinic in Nanakramguda, Hyderabad",
    description: "Best Skin and Hair Clinic in Nanakramguda, Hyderabad providing treatments for hair loss, acne, pigmentation, anti-aging, laser therapy, and skin rejuvenation.",
    images: ["/og-about.jpg"],
  },
  
  // Robots Meta Tags
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Epithelia Skin & Hair Clinic",
  "url": "https://www.epitheliaclinic.com/about",
  "description": "Best Skin and Hair Clinic in Nanakramguda, Hyderabad providing treatments for hair loss, acne, pigmentation, anti-aging, laser therapy, and skin rejuvenation.",
  "mainEntity": {
    "@type": "MedicalBusiness",
    "name": "Epithelia Skin & Hair Clinic",
    "image": "https://www.epitheliaclinic.com/clinic-logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Nanakramguda",
      "addressRegion": "Hyderabad",
      "addressCountry": "IN",
      "postalCode": "500032"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4239",
      "longitude": "78.3915"
    },
    "url": "https://www.epitheliaclinic.com",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "$$",
    "founder": {
      "@type": "Person",
      "name": "Dr. Naresh Kumar",
      "jobTitle": "Dermatologist",
      "description": "Expert dermatologist specializing in skin, hair, laser and wellness treatments"
    },
    "medicalSpecialty": [
      "Dermatology",
      "Hair Restoration",
      "Laser Treatment",
      "Anti-Aging",
      "Skin Rejuvenation"
    ],
    "openingHours": [
      "Mo-Sa 10:00-20:00",
      "Su 10:00-14:00"
    ],
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourprofile",
      "https://www.linkedin.com/company/yourclinic"
    ]
  }
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
