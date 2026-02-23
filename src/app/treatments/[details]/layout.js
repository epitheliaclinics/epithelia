// Dynamic Metadata for Treatment Detail Pages
export async function generateMetadata({ params }) {
  // Treatment-specific SEO data
  const treatments = {
    'preventive-and-maintenance-care': {
      title: "reventive & Maintenance Care – Skin & Hair, Wellness",
      description: "Preventive & Maintenance Care Skin & Hair, Wellness: Delay ageing signs, reduce sensitivity, dullness, hair fall, and maintain long-term skin & hair health.",
      keywords: ["preventive skin care hyderabad", "skin maintenance nanakramguda", "preventive dermatology"]
    },
    'laser-hair-reduction': {
      title: "Laser Hair Removal in Hyderabad - Epithelia Clinic",
      description: "Advanced laser hair removal in Hyderabad at Epithelia Clinic with expert dermatologists, advanced technology, safe treatment, and long-lasting results book now.",
      keywords: ["laser hair reduction hyderabad", "permanent hair removal nanakramguda", "laser hair treatment"]
    },
    'anti-ageing': {
      title: "Anti-Aging Treatment in Hyderabad - Epithelia Clinic",
      description: "Anti-aging treatment in Hyderabad by expert dermatologists offering Botox, fillers, laser skin rejuvenation and advanced solutions for youthful, glowing skin.",
      keywords: ["anti-aging clinic hyderabad", "botox treatment nanakramguda", "skin tightening hyderabad"]
    },
    'laser-and-light-therapy': {
      title: "Laser & Light Therapy in Hyderabad– Epithelia Clinic",
      description: "Laser & Light Therapy in Hyderabad helps reduce pigmentation, acne scars, fine lines, redness, dull skin, large pores, and boosts collagen for radiant skin",
      keywords: ["laser therapy hyderabad", "light therapy skin treatment", "acne laser nanakramguda"]
    },
    'skin-rejuvenation': {
      title: "Skin Rejuvenation Treatments in Hyderabad | Epithelia Clinic",
      description: "Best Skin Rejuvenation Treatments in Hyderabad suit all skin types to improve uneven tone, dullness, fine lines, pigmentation, sun damage, pores, firmness glow.",
      keywords: ["skin rejuvenation hyderabad", "facial rejuvenation nanakramguda", "skin resurfacing"]
    },
    'hair-rejuvenation': {
      title: "Hair Rejuvenation Treatments in Hyderabad - Epithelia Clinic",
      description: "Restore hair health with advanced hair rejuvenation treatments in Hyderabad. PRP, Regenera Activa & Alma Hybrid treatments reduce hair fall and boost regrowth.",
      keywords: ["hair rejuvenation hyderabad", "PRP hair treatment nanakramguda", "hair restoration"]
    }
  };

  const treatment = treatments[params.details] || {
    title: "Advanced Treatment | Epithelia Clinic Hyderabad",
    description: "Expert skin and hair treatments in Nanakramguda, Hyderabad by Dr. Naresh Kumar",
    keywords: ["skin treatment hyderabad", "hair treatment nanakramguda"]
  };

  return {
    title: treatment.title,
    description: treatment.description,
    keywords: treatment.keywords,
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url: `https://www.epitheliaclinic.com/treatments/${params.details}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.title,
      description: treatment.description,
    },
  };
}

// Schema.org Structured Data Generator
function getSchemaJSON(params) {
  const treatments = {
    'preventive-and-maintenance-care': {
      name: "Preventive and Maintenance Care",
      description: "Expert preventive skin care and maintenance treatments",
      medicalSpecialty: "Preventive Dermatology"
    },
    'laser-hair-reduction': {
      name: "Laser Hair Reduction",
      description: "Advanced laser hair reduction treatment",
      medicalSpecialty: "Laser Dermatology"
    },
    'anti-ageing': {
      name: "Anti-Aging Treatments",
      description: "Advanced anti-aging treatments including Botox and fillers",
      medicalSpecialty: "Cosmetic Dermatology"
    },
    'laser-and-light-therapy': {
      name: "Laser and Light Therapy",
      description: "Advanced laser and light therapy treatments",
      medicalSpecialty: "Laser Dermatology"
    },
    'skin-rejuvenation': {
      name: "Skin Rejuvenation",
      description: "Professional skin rejuvenation treatments",
      medicalSpecialty: "Aesthetic Dermatology"
    },
    'hair-rejuvenation': {
      name: "Hair Rejuvenation",
      description: "Advanced hair rejuvenation treatments including PRP",
      medicalSpecialty: "Trichology"
    }
  };

  const treatment = treatments[params.details] || {
    name: "Advanced Treatment",
    description: "Expert skin and hair treatments",
    medicalSpecialty: "Dermatology"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": treatment.name,
    "url": `https://www.epitheliaclinic.com/treatments/${params.details}`,
    "description": treatment.description,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Epithelia Skin & Hair Clinic",
      "image": "https://www.epitheliaclinic.com/clinic-logo.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st floor, my scape corner, survey no: 88A, ADP Blvd, Financial District,",
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
        "Trichology"
      ],
      "openingHours": [
        "Mo-Sa 10:00-20:00",
        "Su 10:00-14:00"
      ],
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourprofile"
      ]
    },
    "medicalAudience": {
      "@type": "MedicalAudience",
      "healthCondition": ["Skin Conditions", "Hair Loss", "Aging Skin", "Acne"]
    },
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Naresh Kumar",
      "jobTitle": "Dermatologist"
    }
  };

  return JSON.stringify(schema);
}

export default function TreatmentDetailLayout({ children, params }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getSchemaJSON(params) }}
      />
      {children}
    </>
  );
}
