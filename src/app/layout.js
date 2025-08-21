import './globals.css';
import { Aboreto, Figtree } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ModalProvider } from '../context/ModalContext';
import { NavAppearanceProvider } from '../context/NavAppearanceContext';
import { ToastProvider } from '../components/ToastProvider';
import LayoutWrapper from '../wrapper/LayoutWrapper';
import Script from 'next/script';

const aboreto = Aboreto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-aboreto',
});

const figtree = Figtree({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-figtree',
});

export const metadata = {
  title: 'Epithelia',
  description: 'Skin solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/fav/favicon.ico' />
        <link rel='apple-touch-icon' href='/assets/fav/apple-touch-icon.png' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/assets/fav/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/assets/fav/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/assets/fav/andriod-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/assets/fav/andriod-chrome-512x512.png'
        />
        <link rel='manifest' href='/assets/fav/site.webmanifest' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXJB9L6B');
          `}
        </Script>
      </head>
      <body
        className={`${aboreto.variable} ${figtree.variable} antialiased bg-primary`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXJB9L6B"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <ToastProvider>
          <NavAppearanceProvider>
            <ModalProvider>
              <Navbar />
              <LayoutWrapper>{children}</LayoutWrapper>
              <Footer />
            </ModalProvider>
          </NavAppearanceProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
