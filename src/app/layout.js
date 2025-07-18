import './globals.css';
import { Aboreto, Figtree } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ModalProvider } from '../context/ModalContext';
import { NavAppearanceProvider } from '../context/NavAppearanceContext';
import { ToastProvider } from '../components/ToastProvider';
import LayoutWrapper from '../wrapper/LayoutWrapper';

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
      </head>
      <body
        className={`${aboreto.variable} ${figtree.variable} antialiased bg-primary`}
      >
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
