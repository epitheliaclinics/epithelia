import HomeMainLayout from "./_home/HomeMainLayout";

// SEO Metadata
export const metadata = {
  // Basic Meta Tags
  title: "Epithelia Skin & Hair Clinic Hyderabad - Dr. Naresh Kumar",
  description: "Epithelia Skin & Hair Clinic in Nanakramguda, Hyderabad providing advanced skin, hair, laser & wellness treatments by expert dermatologist Dr. Naresh Kumar.",
  keywords: ["skin clinic hyderabad", "hair clinic hyderabad", "dermatologist hyderabad", "laser treatment hyderabad", "nanakramguda skin clinic", "best dermatologist hyderabad"],
  authors: [{ name: "Dr. Naresh Kumar" }],
  creator: "Dr. Naresh Kumar",
  publisher: "Epithelia Clinic",
  
  // Open Graph Meta Tags
  openGraph: {
    title: "Epithelia Skin & Hair Clinic Hyderabad - Dr. Naresh Kumar",
    description: "Epithelia Skin & Hair Clinic in Nanakramguda, Hyderabad providing advanced skin, hair, laser & wellness treatments by expert dermatologist Dr. Naresh Kumar.",
    url: "https://www.epitheliaclinic.com/",
    siteName: "Epithelia Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Epithelia Skin & Hair Clinic",
      },
    ],
  },
  
  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Epithelia Skin & Hair Clinic Hyderabad - Dr. Naresh Kumar",
    description: "Epithelia Skin & Hair Clinic in Nanakramguda, Hyderabad providing advanced skin, hair, laser & wellness treatments by expert dermatologist Dr. Naresh Kumar.",
    images: ["/og-image.jpg"],
  },
  
  // Robots Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Schema.org Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Epithelia Skin & Hair Clinic",
  "image": "https://www.epitheliaclinic.com/clinic-image.jpg",
  "description": "Epithelia Skin & Hair Clinic in Nanakramguda, Hyderabad providing advanced skin, hair, laser & wellness treatments by expert dermatologist Dr. Naresh Kumar.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st floor, my scape corner, survey no: 88A, ADP Blvd, Financial District",
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
  "url": "https://www.epitheliaclinic.com/",
  "telephone": "+91-93911 11888",
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Dr. Naresh Kumar"
  },
  "medicalSpecialty": ["Dermatology", "Skin Care", "Hair Treatment", "Laser Treatment"],
  "openingHours": [
    "Mo-Sa 10:00-20:00",
    "Su 10:00-14:00"
  ],
  "sameAs": [
    "https://www.instagram.com/epitheliaclinic",
    "https://www.facebook.com/epitheliaclinic",
  ]
};

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Your Existing Home Layout */}
      <HomeMainLayout />
    </>
  );
}
