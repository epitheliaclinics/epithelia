'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ContactForm from '../../../components/ContactForm';

const images = [
  '/assets/images/home_hero.png',
  '/assets/images/home_hero_2.png',
  '/assets/images/home_hero_3.png',
];

export default function NewHomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;

      gsap.to(imageRefs.current[currentIndex], {
        opacity: 0,
        duration: 1.5,
        ease: 'power2.inOut',
      });

      gsap.to(imageRefs.current[nextIndex], {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut',
      });

      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className='relative h-[95vh] md:h-screen overflow-hidden'>
      {images.map((src, idx) => (
        <div
          key={`${src}-${idx}`}
          ref={(el) => (imageRefs.current[idx] = el)}
          className='absolute inset-0 bg-cover bg-center transition-opacity duration-1000'
          style={{
            backgroundImage: `url(${src})`,
            opacity: idx === currentIndex ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      <div className='text-primary relative z-10 h-full flex justify-end items-left md:justify-between p-6 md:flex-row flex-col  md:items-start md:pl-14 md:pt-40'>
        <div className='text-left w-full max-w-lg'>
          <h1 className='font-aboreto text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight'>
            <span className='block text-left whitespace-nowrap'>
              A SANCTUARY FOR
            </span>
            <span className='block text-left font-normal'>
              SKIN, HAIR AND SELF
            </span>
          </h1>

          <p className='font-figtree text-lg sm:text-xl md:text-2xl font-light mb-6 text-left'>
            Led by specialists.
            <br />
            Designed for transformation.
            <br />
            Rooted in care.
          </p>
        </div>
        <div className='w-full flex items-end md:h-full max-w-sm'>
          <ContactForm
            showTitle={true}
            isHomePage={true}
            submitButtonText='BOOK A CONSULTATION'
            className='p-4 md:p-6 rounded-xl'
          />
        </div>
      </div>
    </section>
  );
}