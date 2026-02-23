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
  openGraph: {
    title: "Premium Skin & Hair Treatments Hyderabad | Epithelia Clinic",
    description: "Advanced skin, hair, laser, and aesthetic treatments in Nanakramguda at Epithelia. Expert skin specialist provides anti-aging, PRP, and rejuvenation treatments.",
    url: "https://www.epitheliaclinic.com/treatments-skin-hair",
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

export default function TreatmentsLayout({ children }) {
  return <>{children}</>;
}
