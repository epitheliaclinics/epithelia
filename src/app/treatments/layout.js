export const metadata = {
  title: "Premium Skin & Hair Treatments Hyderabad | Epithelia Clinic",
  description: "Advanced skin, hair, laser, and aesthetic treatments in Nanakramguda at Epithelia. Expert skin specialist provides anti-aging, PRP, and rejuvenation treatments.",
  keywords: [
    "skin treatments hyderabad",
    "hair treatments hyderabad", 
    "laser treatment nanakramguda",
    "PRP treatment hyderabad",
    "anti-aging clinic hyderabad",
    "skin rejuvenation hyderabad",
    "aesthetic treatments hyderabad",
    "dermatologist hyderabad"
  ],
  
  //Canonical URL
  alternates: {
    canonical: "https://www.epitheliaclinic.com/treatments",
  },
  
  openGraph: {
    title: "Premium Skin & Hair Treatments Hyderabad | Epithelia Clinic",
    description: "Advanced skin, hair, laser, and aesthetic treatments in Nanakramguda at Epithelia. Expert skin specialist provides anti-aging, PRP, and rejuvenation treatments.",
    url: "https://www.epitheliaclinic.com/treatments",
    siteName: "Epithelia Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-treatments.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Skin & Hair Treatments at Epithelia Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Skin & Hair Treatments Hyderabad | Epithelia Clinic",
    description: "Advanced skin, hair, laser, and aesthetic treatments in Nanakramguda at Epithelia. Expert skin specialist provides anti-aging, PRP, and rejuvenation treatments.",
    images: ["/og-treatments.jpg"],
  },
};

// Schema.org Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Premium Skin & Hair Treatments | Epithelia Clinic",
  "url": "https://www.epitheliaclinic.com/treatments",
  "description": "Advanced skin, hair, laser, and aesthetic treatments in Nanakramguda at Epithelia. Expert skin specialist provides anti-aging, PRP, and rejuvenation treatments.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Epithelia Skin & Hair Clinic",
    "image": "https://www.epitheliaclinic.com/clinic-logo.jpg",
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
    "telephone": "+91-93911 11888",
    "priceRange": "$$",
    "founder": {
      "@type": "Person",
      "name": "Dr. Naresh Kumar",
      "jobTitle": "Dermatologist"
    },
    "medicalSpecialty": [
      "Dermatology",
      "Cosmetic Dermatology",
      "Laser Dermatology",
      "Trichology",
      "Skin Rejuvenation"
    ],
    "openingHours": [
      "Mo-Sa 10:00-20:00",
      "Su 10:00-14:00"
    ],
    "sameAs": [
      "https://www.instagram.com/epitheliaclinic",
      "https://www.facebook.com/epitheliaclinic"
    ]
  },
  "hasPart": [
    {
      "@type": "MedicalProcedure",
      "name": "Laser Hair Reduction",
      "description": "Advanced laser hair removal treatment"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Anti-Aging Treatments",
      "description": "Botox, fillers, and skin rejuvenation"
    },
    {
      "@type": "MedicalProcedure",
      "name": "PRP Hair Treatment",
      "description": "Platelet-Rich Plasma therapy for hair restoration"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Skin Rejuvenation",
      "description": "Chemical peels, microdermabrasion, and glow treatments"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Laser & Light Therapy",
      "description": "Advanced technology for pigmentation, acne, and scars"
    }
  ],
  "reviewedBy": {
    "@type": "Physician",
    "name": "Dr. Naresh Kumar",
    "jobTitle": "Dermatologist"
  }
};

export default function TreatmentsLayout({ children }) {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
