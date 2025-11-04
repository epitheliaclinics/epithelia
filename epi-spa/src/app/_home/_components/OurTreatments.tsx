'use client';

import Image from 'next/image';
import { ourTreatmentsData as treatmentData } from '../../../data/ourTreatmentsData';
import { JSX } from 'react';
import { joinWithCommas } from '../../../utils/joinString';
import PrimaryButton from '../../../components/PrimaryButton';
import { useModal } from '../../../context/ModalContext';

export default function OurTreaments(): JSX.Element {
  const { openModal } = useModal();

  return (
    <section className='py-16 px-4 md:px-10 bg-primary'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-aboreto text-2xl lg:text-4xl text-secondary mb-12 uppercase tracking-wider'>
          Our Treatments
        </h1>
        <div className='flex flex-col'>
          {treatmentData.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
        <PrimaryButton
          onClick={openModal}
          arrowClassName='size-6 text-secondary transition-transform duration-300 group-hover:translate-x-1'
          className='mt-20 group relative mx-auto font-aboreto text-secondary text-xl md:text-2xl font-medium transition-all duration-300 flex items-center w-full justify-start gap-2'
        >
          RESERVE MY CONSULTATION
        </PrimaryButton>
      </div>
    </section>
  );
}

function TreatmentCard({ treatment }): JSX.Element {
  return (
    <article className='bg-primary border-b border-tertiary py-6'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        <div className='lg:col-span-10 flex flex-col justify-center gap-y-3 lg:justify-end font-figtree font-light leading-relaxed flex-grow lg:text-lg text-tertiary'>
          <div className='flex items-center gap-3 lg:items-start lg:gap-1 text-lg lg:text-xl'>
            <span>{treatment.number}.</span>
            <h2 className=' uppercase tracking-wide'>{treatment.title}</h2>
          </div>
          <p>{treatment.description}</p>
          <p>
            Services include: <br />
            {joinWithCommas(treatment?.subtitle)}
          </p>
        </div>
        {/* Image */}
        <div className='lg:col-span-2 flex justify-start lg:justify-end'>
          <div className='relative w-full lg:max-w-[160px] aspect-square overflow-hidden'>
            <Image
              src={treatment.image}
              alt={`${treatment.title} treatment`}
              fill
              sizes='(max-width: 768px) 200px, 220px'
              className='object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>
      </div>
    </article>
  );
}
