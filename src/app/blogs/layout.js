export const metadata = {
  title: 'Hair & Wellness Advice, Aesthetic Insights | Epithelia Clinic',
  description: 'Expert hair care, wellness advice, aesthetic treatments, and skin health insights from Epithelia Clinic Hyderabad. Trusted tips backed by dermatology experts.',
  keywords: [
    'hair care tips',
    'wellness advice',
    'aesthetic treatments',
    'skin health',
    'dermatology blog',
    'Epithelia Clinic',
    'Hyderabad dermatologist',
    'skin care tips',
    'hair loss treatment',
    'anti-aging solutions'
  ],
  authors: [{ name: 'Epithelia Clinic' }],
  creator: 'Epithelia Clinic',
  publisher: 'Epithelia Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.epitheliaclinic.com'),
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    title: 'Hair & Wellness Advice, Aesthetic Insights | Epithelia Clinic',
    description: 'Expert hair care, wellness advice, aesthetic treatments, and skin health insights from Epithelia Clinic Hyderabad.',
    url: '/blogs',
    siteName: 'Epithelia Clinic',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Epithelia Clinic Blog',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair & Wellness Advice, Aesthetic Insights | Epithelia Clinic',
    description: 'Expert hair care, wellness advice, aesthetic treatments, and skin health insights from Epithelia Clinic Hyderabad.',
    images: ['/assets/images/og-image.png'],
    creator: '@epitheliaclinic',
  },
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
