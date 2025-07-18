'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useNavAppearance } from '../context/NavAppearanceContext';
import PrimaryLink from './PrimaryLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLight } = useNavAppearance();

  const logoSrc = `/assets/images/${isLight ? 'treatment-logo' : 'logo'}.png`;
  const menuSrc = `/assets/icons/${
    isLight ? 'treatments_hamburger' : 'hamburger'
  }.svg`;

  return (
    <header className='fixed top-0 left-0 w-full z-50 px-8 md:px-14 bg-transparent py-8 transition-all duration-100'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <Image
            src={logoSrc}
            alt='Epithelia Logo'
            width={40}
            height={40}
            className='object-contain lg:flex hidden'
          />
          <Image
            src={logoSrc}
            alt='Epithelia Logo'
            width={20}
            height={20}
            className='object-contain flex lg:hidden'
          />
        </Link>
        <button
          className='hover:opacity-70 z-50'
          onClick={() => setIsOpen(true)}
        >
          <Image src={menuSrc} alt='Menu' width={24} height={24} />
        </button>
      </div>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

function Drawer({ isOpen, onClose }) {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/treatments', label: 'TREATMENTS' },
    { href: '/technology', label: 'TECHNOLOGY' },
    { href: '/about', label: 'ABOUT EPITHELIA' },
  ];

  return (
    <>
      <div
        className={`fixed text-secondary top-0 right-0 h-full w-full lg:w-1/3 bg-[#FAF9F3] z-50 transform transition-transform duration-300 ease-in-out px-8 py-10 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-grow justify-between items-baseline'>
          <nav className='flex flex-col gap-6 text-xl font-aboreto'>
            {links.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={`group relative w-fit transition-all duration-300 ${
                    isActive ? 'text-secondary' : 'hover:text-secondary/70'
                  }`}
                >
                  <span className='relative inline-block'>
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[1px] w-full bg-current origin-left transition-transform duration-300 ${
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className='flex justify-end'>
            <button onClick={onClose}>
              <X className='text-secondary hover:text-secondary/70' size={28} />
            </button>
          </div>
        </div>

        <div className='grid grid-cols-[auto_1fr] gap-y-3 gap-x-4 lg:gap-x-16 text-base font-figtree text-secondary/80 font-light pt-10'>
          <span className='font-aboreto text-secondary'>CONTACT</span>
          <a href='tel:+919391111888' className='text-tertiary'>
            (+91) 93911 11888
          </a>
          <span className='font-aboreto text-secondary'>LOCATION</span>
          <PrimaryLink
            href='https://www.google.com/maps/place/Epithelia+clinic/@17.4158474,78.3541203,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb959cd02abceb:0xa016f3d40e85b2ff!8m2!3d17.4158474!4d78.3541203!16s%2Fg%2F11lz5mc512?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D'
            className='text-tertiary'
            target='_blank'
            rel='noopener noreferrer'
            showChevron={false}
            undrelineAnimate={false}
          >
            ADP Blvd, Financial District
            <br />
            Nanakramguda, Hyderabad
          </PrimaryLink>
          <span className='font-aboreto text-secondary'>TIMINGS</span>
          <span className='text-tertiary'>
            Monday - Saturday
            <br />
            08:00 - 21:00
          </span>
        </div>
      </div>

      {isOpen && (
        <div className='fixed inset-0 bg-black/30 z-40' onClick={onClose} />
      )}
    </>
  );
}
