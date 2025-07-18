'use client';

import { useModal } from '../../context/ModalContext';
import PrimaryButton from '../../components/PrimaryButton';

export default function TechnologyHero() {
  const { openModal } = useModal();
  return (
    <section className='relative h-[95vh] md:h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-right md:bg-center'
        style={{ backgroundImage: `url('/assets/images/technology_hero.png')` }}
      />
      <div className='text-primary relative z-10 h-full flex items-end md:items-start justify-start pl-8 md:pl-14 pb-8 md:pb-0 md:pt-40'>
        <div className='text-left max-w-lg'>
          <h1 className='font-aboreto text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight'>
            <span className='block text-left whitespace-nowrap'>
              Clinically Proven.
            </span>
            <span className='block text-left font-normal'>
              Patient-Centric.
            </span>
          </h1>
          <p className='font-figtree text-lg sm:text-xl md:text-2xl font-light mb-8 text-left'>
            Our treatments are powered by advanced, FDA-approved aesthetic
            technology, designed for Indian skin and hair, and backed by
            clinical precision.
          </p>
          <PrimaryButton
            onClick={openModal}
            className='font-aboreto md:absolute md:bottom-6 md:right-10 text-secondary text-xl md:text-2xl font-medium'
            arrowClassName='text-secondary transition-transform duration-300 group-hover:translate-x-1'
          >
            CONSULT US
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
