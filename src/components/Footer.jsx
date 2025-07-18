'use client';

import Image from 'next/image';
import Link from 'next/link';
import PrimaryLink from './PrimaryLink';

export default function Footer() {
  return (
    <footer className='bg-secondary text-primary text-sm font-figtree px-6 md:px-8 py-12'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-10'>
        <div className='flex-1 flex flex-col gap-8'>
          <div className='flex flex-col justify-between md:flex-row gap-10'>
            <div>
              <p className='text-2xl font-light mb-6 font-figtree'>
                Hyderabad’s destination for advanced <br />
                skin, hair and anti-ageing solutions
              </p>
              <ul className='flex flex-col gap-y-2 font-aboreto text-xl uppercase'>
                <li>
                  <Link href='/treatments'>TREATMENTS</Link>
                </li>
                <li>
                  <Link href='/technology'>TECHNOLOGY</Link>
                </li>
                <li>
                  <Link href='/about'>ABOUT EPITHELIA</Link>
                </li>
              </ul>
            </div>
            <div className='flex justify-between items-end'>
              <div className='lg:text-right justify-end text-sm font-figtree font-light flex flex-col gap-y-2'>
                <a href='tel:+919391111888'>(+91) 93911 11888</a>
                <p>Mon–Fri | 08:00–21:00</p>
                <PrimaryLink
                  href='https://www.google.com/maps/place/Epithelia+clinic/@17.4158474,78.3541203,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb959cd02abceb:0xa016f3d40e85b2ff!8m2!3d17.4158474!4d78.3541203!16s%2Fg%2F11lz5mc512?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                  rel='noopener noreferrer'
                  showChevron={false}
                  undrelineAnimate={false}
                >
                  ADP Blvd, Financial District <br />
                  Nanakramguda, Hyderabad
                </PrimaryLink>
              </div>
              <div className='w-24 lg:hidden lg:self-end'>
                <Image
                  src='/assets/images/logo-white.png'
                  alt='Epithelia Logo'
                  width={96}
                  height={60}
                  className='w-full h-auto object-contain'
                />
              </div>
            </div>
          </div>
          <div className='border-t border-white/30' />
          <div className='flex flex-wrap lg:justify-start text-sm font-figtree font-light justify-between lg:gap-x-6 gap-y-2'>
            <Link href='/privacy'>Privacy Policy</Link>
            <PrimaryLink
              href='https://www.instagram.com/epitheliaclinic?igsh=aW90emJ1dnN6emt0'
              target='_blank'
              rel='noopener noreferrer'
              showChevron={false}
              undrelineAnimate={false}
            >
              Instagram
            </PrimaryLink>
            <PrimaryLink
              href='https://wa.me/+919391111888'
              target='_blank'
              rel='noopener noreferrer'
              showChevron={false}
              undrelineAnimate={false}
            >
              WhatsApp
            </PrimaryLink>
            <Link href='/blogs'>Blogs</Link>
          </div>
        </div>
        <div className='w-24 hidden lg:flex self-end'>
          <Image
            src='/assets/images/logo-white.png'
            alt='Epithelia Logo'
            width={96}
            height={60}
            className='w-full h-auto object-contain'
          />
        </div>
      </div>
    </footer>
  );
}
