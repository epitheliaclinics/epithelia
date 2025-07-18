'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import PrimaryLink from '../../../components/PrimaryLink';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionCard() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const offset = 2;
    cardsRef.current.forEach((card, i) => {
      const initialY = i * 90;
      const initialRotate = i * -1;
      const targetY = i * (card.offsetHeight + offset);
      const initialX = i * -2;

      gsap.fromTo(
        card,
        {
          x: `${initialX}px`,
          y: `${initialY}px`,
          rotateZ: initialRotate,
          scale: 0.98,
        },
        {
          x: 0,
          y: `${targetY}px`,
          rotateZ: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );
    });
  }, [isMobile]);

  const cardData = [
    {
      id: 'hair',
      number: '1',
      title: 'HAIR REJUVENATION',
      subtitle: ['Regenera Activa', 'Arthrex PRP', 'Alma Hybrid'],
      description:
        'Restore thinning hair and stimulate natural regrowth with advanced, clinically-proven hair rejuvenation treatment in Hyderabad.',
      image: '/assets/images/solution_1.png',
      navigate: '/treatments/hair-rejuvenation',
    },
    {
      id: 'skin',
      number: '2',
      title: 'SKIN REJUVENATION',
      subtitle: ['Dermal Infusion', 'Revlite SI Laser', 'Alma Hybrid'],
      description:
        'Revive dull, tired skin with customised skin rejuvenation treatments that target pigmentation, texture, and tone powered by advanced dermatology in Hyderabad.',
      image: '/assets/images/solution_2.png',
      navigate: '/treatments/skin-rejuvenation',
    },
    {
      id: 'laser',
      number: '3',
      title: 'LASER & LIGHT THERAPY',
      subtitle: ['Revlite SI Laser', 'Alma Hybrid', 'Alma Soprano', 'Titanium'],
      description:
        'Achieve clear, even-toned skin with advanced laser and light therapies that treat acne scars, pigmentation, and signs of ageing performed by skin expert in Hyderabad.',
      image: '/assets/images/solution_3.png',
      navigate: '/treatments/laser-and-light-therapy',
    },
    {
      id: 'anti-ageing',
      number: '4',
      title: 'ANTI AGEING',
      subtitle: [
        'Anthrex PRP',
        'Alma Hybrid',
        'Regenera Activa',
        'Dermal Infusion',
      ],
      description:
        'Restore youthful firmness and radiance with non-invasive anti-ageing treatments designed to smooth wrinkles, lift skin, and boost collagen by trusted dermatologist in Hyderabad.',
      image: '/assets/images/solution_4.png',
      navigate: '/treatments/anti-ageing',
    },
    {
      id: 'laser-hair-reduction',
      number: '5',
      title: 'LASER HAIR REDUCTION',
      subtitle: ['Alma Soprano', 'Titanium'],
      description:
        'Experience long-lasting smoothness with painless, advanced laser hair reduction, safe for all skin types and performed using cutting-edge technology in Hyderabad.',
      image: '/assets/images/solution_5.png',
      navigate: '/treatments/laser-hair-reduction',
    },
    {
      id: 'preventive',
      number: '6',
      title: 'PREVENTIVE & MAINTENANCE CARE',
      subtitle: ['Dermal Infusion', 'Alma Hybrid', 'Anthrex PRP'],
      description:
        'Maintain healthy, radiant skin and hair with personalised preventive care plans, designed to protect, nourish.',
      image: '/assets/images/solution_6.png',
      navigate: '/treatments/preventive-and-maintenance-care',
    },
  ];

  return (
    <div ref={containerRef} className='relative px-4 md:px-10'>
      <div className='min-h-[100vh] flex flex-col items-center justify-start gap-y-4'>
        <h1 className='font-aboreto self-start px-4 text-2xl lg:text-4xl text-secondary'>
          OUR FLAGSHIP SOLUTIONS
        </h1>
        <div
          className='hidden md:block relative w-full px-4'
          style={{
            height: `${cardData.length * 280}px`,
          }}
        >
          {cardData.map((card, i, arr) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className='px-2 absolute left-0 right-0 h-[280px] bg-primary border-b border-tertiary py-10 flex justify-between items-start gap-6'
              style={{
                top: 0,
                zIndex: `${arr.length - i}`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className='flex items-end gap-x-4 w-full lg:w-[30rem] text-secondary h-full'>
                <span className='text-sm lg:text-2xl font-aboreto'>
                  {card.number}
                </span>
                <div className='flex items-end justify-between h-full font-aboreto'>
                  <div className='text-base lg:text-2xl uppercase'>
                    {card.title}
                  </div>
                </div>
              </div>

              <div className='w-full lg:w-[160px] text-xs lg:text-base leading-5 font-light font-figtree text-tertiary'>
                {card.subtitle.map((sub, idx) => (
                  <div key={idx}>{sub}</div>
                ))}
              </div>

              <div className='flex flex-col justify-between w-full lg:w-[250px] h-full'>
                <div className='text-xs lg:text-base leading-5 font-figtree text-secondary'>
                  {card.description}
                </div>
                <PrimaryLink
                  href={card.navigate}
                  className='text-secondary font-aboreto text-sm lg:text-lg font-medium w-fit'
                  arrowClassName='text-secondary transition-transform duration-300 group-hover:translate-x-1'
                >
                  VIEW DETAILS
                </PrimaryLink>
              </div>

              <div className='overflow-hidden max-h-[220px] w-full lg:max-w-[220px]'>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={220}
                  height={220}
                  className='object-cover'
                />
              </div>
            </div>
          ))}
        </div>

        <div className='md:hidden w-full flex flex-col gap-8'>
          {cardData.map((card, i) => (
            <div
              key={i}
              className='bg-primary border-b border-tertiary py-6 px-4 flex flex-col gap-4'
            >
              <div className='flex items-center gap-x-2'>
                <span className='text-sm font-aboreto text-secondary'>
                  {card.number}
                </span>
                <h3 className='text-lg font-aboreto text-secondary uppercase'>
                  {card.title}
                </h3>
              </div>

              <p className='text-sm leading-5 font-figtree text-secondary'>
                {card.description}
              </p>

              <div className='text-sm leading-5 font-light font-figtree text-tertiary'>
                {card.subtitle.join(', ')}
              </div>

              <div className='flex justify-end pt-2'>
                <PrimaryLink
                  href={card.navigate}
                  className='text-secondary font-aboreto text-sm font-medium'
                  arrowClassName='text-secondary transition-transform duration-300 group-hover:translate-x-1'
                >
                  VIEW DETAILS
                </PrimaryLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
