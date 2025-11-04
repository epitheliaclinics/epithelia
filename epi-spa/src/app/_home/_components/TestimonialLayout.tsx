'use client';

import Image from 'next/image';
import { JSX, useState, useRef, useEffect } from 'react';
import { testimonialsData } from '../../../data/testimonialsData';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

interface Testimonial {
  id: number;
  name: string;
  image: string;
  quote: string;
  treatment?: string;
}

export default function TestimonialsSection(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const draggableRef = useRef<Draggable[] | null>(null);

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    draggableRef.current = Draggable.create(carouselRef.current, {
      type: 'x',
      bounds: { minX: 0, maxX: 0 },
      onPress: function (e) {
        stopAutoPlay();
        startX = e.clientX || e.touches[0].clientX;
        isDragging = true;
      },
      onDrag: function (e) {
        if (!isDragging) return;
        currentX = e.clientX || e.touches[0].clientX;
      },
      onRelease: function () {
        if (!isDragging) return;

        const deltaX = currentX - startX;
        const minSwipeDistance = 50;

        if (Math.abs(deltaX) > minSwipeDistance) {
          if (deltaX > 0) {
            setActiveIndex((prevIndex) =>
              prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
            );
          } else {
            setActiveIndex((prevIndex) =>
              prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            );
          }
        }

        isDragging = false;
        setTimeout(startAutoPlay, 2000);
      },
    });
    startAutoPlay();

    return () => {
      stopAutoPlay();
      if (draggableRef.current) {
        draggableRef.current.forEach((draggable) => draggable.kill());
      }
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, [activeIndex]);

  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };

  // const handleDotClick = (index: number) => {
  //   stopAutoPlay();
  //   setActiveIndex(index);
  //   setTimeout(startAutoPlay, 2000);
  // };

  return (
    <section className='w-full'>
      {/* Desktop Grid Layout */}
      <div className='hidden md:grid md:grid-cols-3 gap-8 lg:gap-12'>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Mobile Carousel Layout */}
      <div
        className='md:hidden'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={carouselRef} className='cursor-grab active:cursor-grabbing'>
          <TestimonialCard testimonial={testimonialsData[activeIndex]} />
        </div>

        {/* <div className='flex justify-center mt-8 space-x-2'>
          {testimonialsData.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-secondary' : 'bg-tertiary/30'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div> */}
        {/* Progress indicator*/}
        <div className='flex justify-center mt-4'>
          <div className='w-16 h-1 bg-tertiary/20 rounded-full overflow-hidden'>
            <div
              className='h-full bg-secondary transition-all duration-300 ease-linear'
              style={{
                width: `${
                  ((activeIndex + 1) / testimonialsData.length) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps): JSX.Element {
  return (
    <div className='flex flex-col items-center text-center duration-300 gap-y-6'>
      {/* Profile Image */}
      <div className='mr-auto relative w-full aspect-square md:w-52 md:h-52 rounded-md overflow-hidden'>
        <Image
          src={testimonial.image}
          alt={`${testimonial.name} - Epithelia Clinic testimonial`}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 208px, 128px'
        />
      </div>
      <blockquote className='text-justify tracking-tight font-figtree font-light lg:text-lg text-tertiary flex-grow'>
        {`"${testimonial.quote}"`}
      </blockquote>
    </div>
  );
}
