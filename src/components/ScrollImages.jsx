'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollImages({ img1, img2, isRotate = false }) {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(img1Ref.current, {
        y: 200,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(img2Ref.current, {
        y: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className='relative w-full h-1/2 md:h-[700px] overflow-visible flex items-center justify-center'
    >
      <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:size-[700px] z-10 top-0 left-1/2 -translate-x-1/2'>
        <Image
          ref={img1Ref}
          src={img1}
          alt='Tech Base Image'
          fill
          className='object-contain z-10'
        />

        <div
          ref={img2Ref}
          className='absolute -bottom-72 left-1/2 -translate-x-1/2 z-20'
          style={{ rotate: isRotate ? '-20deg' : '0deg' }}
        >
          <Image
            src={img2}
            alt='Overlay Bubble'
            width={isMobile ? 100 : 200}
            height={isMobile ? 100 : 200}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
}
