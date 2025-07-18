'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import PrimaryButton from '../../components/PrimaryButton';
import { useRouter } from 'next/navigation';

const treatments = [
  {
    id: 0,
    title: 'Default Image',
    description: ``,
    contents: '',
    image: '/assets/images/home_treatments_0.png',
  },
  {
    id: 1,
    title: 'Hair Rejuvenation',
    description: `Rediscover fuller, healthier hair with advanced treatments for hair loss and thinning. Designed to stimulate growth, strengthen follicles, and restore scalp vitality with proven medical-grade care.`,
    contents:
      'Services include :\nDermal Infusion, Revlite SI Laser, Alma Hybrid',
    image: '/assets/images/home_treatments_1.png',
  },
  {
    id: 2,
    title: 'Skin Rejuvenation',
    description: `Reveal brighter, smoother, and more radiant skin with advanced dermatological treatments. Our personalised approach targets pigmentation, dullness, fine lines, and uneven texture, blending clinical precision with luxurious care`,
    contents:
      'Services include :\nDermal Infusion, Revlite SI Laser, Alma Hybrid',
    image: '/assets/images/home_treatments_2.png',
  },
  {
    id: 3,
    title: 'Laser & Light Therapy',
    description: `Harness the power of advanced light and laser technology to refine skin tone, reduce pigmentation, and restore clarity. These non-invasive therapies are designed to resurface, brighten, and rejuvenate with precision and minimal downtime.`,
    contents:
      'Services include :\nRevlite SI, Alma Hybrid, Alma Soprano Titanium',
    image: '/assets/images/home_treatments_3.png',
  },
  {
    id: 4,
    title: 'Anti-ageing',
    description: `Our anti-ageing protocols are designed to restore firmness, smooth fine lines, and boost collagen from within. Each treatment is rooted in regenerative science and tailored to your skin’s evolving needs.`,
    contents:
      'Services include :\nArthrex PRP, Regenera Activa, Alma Hybrid, Dermal Infusion',
    image: '/assets/images/home_treatments_4.png',
  },
  {
    id: 5,
    title: 'Laser Hair Reduction',
    description: `Smooth, effortless skin permanently. Our advanced laser hair reduction treatments use cutting-edge technology to deliver lasting results with minimal discomfort. Safe for all skin types, and designed for both precision and comfort.`,
    contents: 'Services include :\nAlma Soprano Titanium',
    image: '/assets/images/home_treatments_5.png',
  },
  {
    id: 6,
    title: 'Preventive Care',
    description: `Our wellness treatments are designed to maintain optimal skin and scalp health, improving circulation, supporting cell turnover, and keeping your skin and hair at their best, year-round.`,
    contents: 'Services include :\nDermal Infusion, Alma Hybrid, Arthrex PRP.',
    image: '/assets/images/home_treatments_6.png',
  },
];

export default function TreatmentAccordion() {
  const [activeIndex, setActiveIndex] = useState(null); // null means nothing is opened
  const [visibleImage, setVisibleImage] = useState(0); // default image
  const imageRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      gsap.to(img, {
        opacity: i === visibleImage ? 1 : 0,
        duration: 0.3,
        ease: 'power2.inOut',
        overwrite: 'auto',
      });
    });
  }, [visibleImage]);

  const toggleAccordion = (index) => {
    const isClosing = activeIndex === index;
    const newActiveIndex = isClosing ? null : index;

    setActiveIndex(newActiveIndex);
    setVisibleImage(isClosing ? 0 : index + 1); // index+1 because accordion excludes default
  };

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 min-h-screen gap-x-12 pl-6 md:pl-14'>
      <div className='text-tertiary flex flex-col justify-between pt-28 pb-16 min-h-[90vh]'>
        <h2 className='text-2xl md:text-4xl text-secondary font-aboreto mb-16'>
          OUR TREATMENTS
        </h2>
        <div className='flex-1 md:flex md:items-start overflow-y-auto pr-2 flex-col'>
          <div className='space-y-8 text-xl md:text-2xl w-full'>
            {treatments.slice(1).map((item, index) => (
              <div key={item.id} className='font-light'>
                <button
                  onClick={() => toggleAccordion(index)}
                  style={{
                    borderBottomWidth:
                      item?.id === treatments.length - 1 ? '0px' : '1px',
                  }}
                  className='w-full flex justify-between items-center text-left border-tertiary pb-3 focus:outline-none font-figtree'
                >
                  <span>
                    {index + 1}. {item.title}
                  </span>
                  {activeIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {activeIndex === index && (
                    <div className='mt-3 text-base md:text-lg font-light text-tertiary space-y-4 whitespace-pre-line'>
                      <p>{item.description}</p>
                      <p>{item.contents}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className='block md:hidden text-left mt-16'>
            <PrimaryButton
              arrowClassName='transition-transform duration-300 group-hover:translate-x-1'
              className='group relative inline-flex items-center gap-2 text-lg md:text-xl font-aboreto text-secondary'
              onClick={() => router.push('/treatments')}
            >
              EXPLORE TREATMENTS
            </PrimaryButton>
          </div>
        </div>
        <div className='hidden md:block text-left'>
          <PrimaryButton
            arrowClassName='transition-transform duration-300 group-hover:translate-x-1'
            className='group relative inline-flex items-center gap-2 text-lg md:text-xl font-aboreto text-secondary'
            onClick={() => router.push('/treatments')}
          >
            EXPLORE TREATMENTS
          </PrimaryButton>
        </div>
      </div>
      <div className='relative hidden md:block'>
        {treatments.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (imageRefs.current[idx] = el)}
            className='absolute inset-0 transition-opacity duration-1000'
            style={{
              opacity: idx === 0 ? 1 : 0,
              zIndex: idx === visibleImage ? 10 : 0,
              pointerEvents: 'none',
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className='object-cover object-center'
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
