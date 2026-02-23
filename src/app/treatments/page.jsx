// SEO Metadata (This works even with client components)
export const metadata = {
  // Basic Meta Tags
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
  authors: [{ name: "Dr. Naresh Kumar" }],
  creator: "Dr. Naresh Kumar",
  publisher: "Epithelia Clinic",
  
  // Canonical URL
  alternates: {
    canonical: "https://www.epitheliaclinic.com/treatments",
  },
  
  // Open Graph Meta Tags
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
  
  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Premium Skin & Hair Treatments Hyderabad | Epithelia Clinic",
    description: "Advanced skin, hair, laser, and aesthetic treatments in Nanakramguda at Epithelia. Expert skin specialist provides anti-aging, PRP, and rejuvenation treatments.",
    images: ["/og-treatments.jpg"],
  },
  
  // Robots Meta Tags
  robots: {
    index: true,
    follow: true,
  },
};

'use client';

import SolutionCard from './components/SolutionCard';
import TreatmentHero from './components/TreatmentHero';
import ConsultationForm from '../../components/ConsultationForm';
import { consultationConfigs } from '../../data/consultationConfigs';

// Schema.org Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Premium Skin & Hair Treatments | Epithelia Clinic",
  "url": "https://www.epitheliaclinic.com/treatments",
  "description": "Advanced skin, hair, laser, and aesthetic treatments in Nanakramguda at Epithelia.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Epithelia Skin & Hair Clinic",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nanakramguda",
      "addressRegion": "Hyderabad",
      "addressCountry": "IN"
    },
    "telephone": "+91-93911 11888",
    "priceRange": "$$"
  }
};

export default function TreatmentPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className='min-h-screen relative bg-primary flex flex-col gap-y-20'>
        <TreatmentHero
          backgroundImage='/assets/images/treatments_hero.png'
          titleTop='PREMIUM SKIN & HAIR'
          titleBottom='Aesthetics Treatments in Hyderabad'
          mobilePosition='bottom-left'
          description={'Experience visible results with\ncustomised care and\nstate-of-the-art technology'}
          buttonText='CONSULT US'
        />
        <SolutionCard />
        <ConsultationForm {...consultationConfigs.treatment} />
      </div>
    </>
  );
}






// 'use client';

// import SolutionCard from './components/SolutionCard';
// import TreatmentHero from './components/TreatmentHero';
// import ConsultationForm from '../../components/ConsultationForm';
// import { consultationConfigs } from '../../data/consultationConfigs';

// export default function TreatmentPage() {
//   return (
//     <div className='min-h-screen relative bg-primary flex flex-col gap-y-20'>
//       <TreatmentHero
//         backgroundImage='/assets/images/treatments_hero.png'
//         titleTop='PREMIUM SKIN & HAIR'
//         titleBottom='Aesthetics Treatments in Hyderabad'
//         mobilePosition='bottom-left'
//         description={`Experience visible results with\ncustomised care and\nstate-of-the-art technology`}
//         buttonText='CONSULT US'
//       />
//       <SolutionCard />
//       <ConsultationForm {...consultationConfigs.treatment} />
//     </div>
//   );
// }
