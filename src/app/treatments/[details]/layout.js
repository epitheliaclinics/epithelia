// Dynamic Metadata for Treatment Detail Pages
export async function generateMetadata({ params }) {
  // Treatment-specific SEO data
  const treatments = {
    'preventive-and-maintenance-care': {
      title: "Preventive and Maintenance Care | Epithelia Clinic Hyderabad",
      description: "Expert preventive skin care and maintenance treatments in Nanakramguda, Hyderabad. Keep your skin healthy with Dr. Naresh Kumar's personalized care plans.",
      keywords: ["preventive skin care hyderabad", "skin maintenance nanakramguda", "preventive dermatology"]
    },
    'laser-hair-reduction': {
      title: "Laser Hair Reduction Treatment Hyderabad | Epithelia Clinic",
      description: "Advanced laser hair reduction in Nanakramguda, Hyderabad. Safe, effective permanent hair reduction by expert dermatologist Dr. Naresh Kumar.",
      keywords: ["laser hair reduction hyderabad", "permanent hair removal nanakramguda", "laser hair treatment"]
    },
    'anti-ageing': {
      title: "Anti-Aging Treatments Hyderabad | Epithelia Clinic",
      description: "Advanced anti-aging treatments in Nanakramguda, Hyderabad. Botox, fillers, skin tightening by expert dermatologist Dr. Naresh Kumar.",
      keywords: ["anti-aging clinic hyderabad", "botox treatment nanakramguda", "skin tightening hyderabad"]
    },
    'laser-and-light-therapy': {
      title: "Laser and Light Therapy Hyderabad | Epithelia Clinic",
      description: "Advanced laser and light therapy in Nanakramguda, Hyderabad. Treat acne, pigmentation, scars with cutting-edge technology.",
      keywords: ["laser therapy hyderabad", "light therapy skin treatment", "acne laser nanakramguda"]
    },
    'skin-rejuvenation': {
      title: "Skin Rejuvenation Treatments Hyderabad | Epithelia Clinic",
      description: "Professional skin rejuvenation in Nanakramguda, Hyderabad. Restore youthful glow with chemical peels, microdermabrasion & more.",
      keywords: ["skin rejuvenation hyderabad", "facial rejuvenation nanakramguda", "skin resurfacing"]
    },
    'hair-rejuvenation': {
      title: "Hair Rejuvenation Treatments Hyderabad | Epithelia Clinic",
      description: "Advanced hair rejuvenation in Nanakramguda, Hyderabad. PRP, Regenera Activa & more by expert trichologist Dr. Naresh Kumar.",
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

export default function TreatmentDetailLayout({ children }) {
  return <>{children}</>;
}
