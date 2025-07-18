'use client';

import ScrollImages from '../../../components/ScrollImages';
import Image from 'next/image';
import PrimaryButton from '../../../components/PrimaryButton';
import { useModal } from '../../../context/ModalContext';
import { useEffect, useRef, useState } from 'react';
import { useNavAppearance } from '../../../context/NavAppearanceContext';

export default function TreatmentDetails({ data }) {
  const { openModal } = useModal();
  const heroRef = useRef(null);
  const { setIsLight } = useNavAppearance();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLight(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const section = heroRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [setIsLight]);

  return (
    <div className='text-primary'>
      <section
        ref={heroRef}
        className='h-[95vh] md:min-h-screen bg-secondary text-primary px-6 py-10 mb-20 md:mb-0 pb-16 md:pb-32 md:px-14 flex flex-col justify-between items-center'
      >
        <h1 className='text-2xl md:text-4xl font-aboreto self-start pt-24'>
          {data.title}
        </h1>
        <div className='max-w-xl ml-auto flex flex-col gap-y-4 self-end text-justify text-sm md:text-lg font-light font-figtree'>
          {data.description.map((p, i) => (
            <p key={i} className={i === 0 ? 'indent-12' : ''}>
              {p}
            </p>
          ))}
          <div className='flex justify-end pt-10'>
            <PrimaryButton
              onClick={openModal}
              className='text-sm md:text-lg !text-primary font-aboreto flex items-center'
              arrowClassName='ml-2 !size-4 !text-primary transition-transform duration-300 group-hover:translate-x-1'
            >
              BOOK A CONSULTATION
            </PrimaryButton>
          </div>
        </div>
      </section>
      <section className='min-h-screen flex flex-col md:flex-row items-center justify-center gap-y-14 md:gap-10 pl-0 md:pl-12 pb-10'>
        <div className='md:flex-1 text-center'>
          <h2 className='text-2xl md:text-4xl text-secondary font-aboreto mb-4'>
            {data.whoTitle}
          </h2>
          <ul className='text-sm md:text-lg font-light font-figtree text-tertiary flex flex-col gap-y-3 px-3 md:px-0'>
            {data.who.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='flex-1 relative w-full h-dvh mx-auto'>
          <Image
            src={data.image}
            alt={data.title}
            fill
            className='object-cover'
          />
        </div>
      </section>
      <section className='min-h-screen -mt-32 md:mt-0 flex items-center justify-center flex-col text-center px-6 md:px-20'>
        <h2 className='text-2xl md:text-4xl text-secondary font-aboreto mb-4'>
          {data.benefitsTitle}
        </h2>
        <p className='max-w-xl mx-auto text-sm md:text-lg font-light font-figtree text-tertiary mb-12'>
          {data.benefitsText}
        </p>
        <div className='grid grid-cols-2 w-full max-w-md mx-auto gap-8 text-sm text-tertiary font-figtree'>
          {data.benefits.map((benefit, i) => (
            <div
              key={i}
              className='flex flex-col items-center justify-start text-center'
            >
              <div className='flex flex-col items-center justify-start h-full'>
                <div className='size-12 md:size-16 relative mb-2'>
                  <Image
                    src={benefit.icon}
                    alt={benefit.text}
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='pt-2'>{benefit.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='h-screen text-center px-6 md:px-20'>
        <div className='flex flex-col md:flex-row items-stretch justify-between h-full'>
          <div className='flex-1 flex flex-col justify-center'>
            <h2 className='text-2xl text-secondary md:text-4xl font-aboreto mb-4'>
              {data.technologyTitle}
            </h2>
            <p className='max-w-xl mx-auto text-sm md:text-lg font-light font-figtree text-tertiary mb-8'>
              {data.technologyText}
            </p>
            <div className='text-sm md:text-lg font-light font-figtree text-tertiary flex flex-col gap-y-6 mb-10 px-4 md:px-0'>
              {data.technologyList.map((tech) => (
                <div key={tech.id}>
                  <p className='text-base md:text-xl'>{tech.title}</p>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 h-full'>
            <ScrollImages
              img1={data.technologyImages[0]}
              img2={data.technologyImages[1]}
              isRotate={data.isRotate}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
