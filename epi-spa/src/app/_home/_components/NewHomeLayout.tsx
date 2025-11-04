'use client';
import NewHomeHero from './NewHomeHero';
import Image from 'next/image';
import ConsultationForm from '../../../components/ConsultationForm';
import PrimaryButton from '../../../components/PrimaryButton';
import { useModal } from '../../../context/ModalContext';
import OurTreaments from './OurTreatments';
import TestimonialsSection from './TestimonialLayout';

const homeData = [
  {
    id: 1,
    icon: '/assets/icons/home_feat_1.svg',
    text: 'Zen Interiors',
  },
  {
    id: 2,
    icon: '/assets/icons/home_feat_2.svg',
    text: 'Medical Grade Sanitation',
  },
  { id: 3, icon: '/assets/icons/home_feat_3.svg', text: 'VIP Lounge' },
  { id: 4, icon: '/assets/icons/home_feat_4.svg', text: 'Shaded Parking' },
  {
    id: 5,
    icon: '/assets/icons/home_feat_5.svg',
    text: 'State-of-the-art Technology',
  },
  { id: 6, icon: '/assets/icons/home_feat_6.svg', text: 'On-site Diagnostics' },
];

export default function NewHomeLayout() {
  const { openModal } = useModal();
  return (
    <div>
      <NewHomeHero />
      <section className='min-h-screen flex items-center justify-center flex-col text-center gap-y-16 px-6 md:p-24'>
        <div className='relative text-2xl md:text-6xl text-secondary font-aboreto'>
          <h1>
            About <br /> EPITHELIA CLINIC
          </h1>
        </div>
        <div className='flex flex-col text-justify gap-y-4 max-w-lg mx-auto text-sm md:text-xl font-light font-figtree text-tertiary'>
          <p>
            {`Epithelia is a leading aesthetic and dermatology clinic in
            Hyderabad, offering advanced skin, hair, and laser treatments backed
            by global technology and medical expertise. Founded by Dr. Naresh,
            Epithelia blends science, precision, and luxury to deliver natural,
            transformative results.`}
          </p>
          <p>
            {`Our state-of-the-art clinic features world-class systems like Alma
            Hybrid, Revlite SI, Arthrex PRP, Regenera Activa, and Alma Soprano
            Titanium, each designed to address India's unique skin and scalp
            needs. From skin rejuvenation and anti-aging to hair restoration and
            laser hair reduction, Epithelia sets the benchmark for safe,
            effective, and customised aesthetic care in India.`}
          </p>
        </div>
        <PrimaryButton
          onClick={openModal}
          arrowClassName='size-6 text-secondary transition-transform duration-300 group-hover:translate-x-1'
          className='group relative mx-auto font-aboreto text-secondary text-xl md:text-2xl font-medium transition-all duration-300 flex items-center gap-2'
        >
          RESERVE MY CONSULTATION
        </PrimaryButton>
      </section>
      <OurTreaments />
      <section className='min-h-screen flex items-center justify-center flex-col text-center gap-y-16 px-6 md:px-20'>
        <h2 className='text-2xl md:text-4xl font-aboreto'>
          DESIGNED FOR COMFORT
          <br />
          EQUIPPED FOR PRECISION
        </h2>
        <div className='flex flex-col justify-content gap-y-8 max-w-md mx-auto text-sm md:text-lg font-light font-figtree text-tertiary'>
          <p>
            From the moment you step in, Epithelia offers more than just
            advanced dermatology. It is a seamless blend of comfort, privacy,
            and technology.
          </p>
          <p>
            Every corner is crafted to put you at ease, while our
            state-of-the-art setup ensures uncompromised results.
          </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 w-full max-w-md mx-auto gap-8 md:gap-16 text-sm text-tertiary font-figtree'>
          {homeData.map((el) => (
            <div
              key={el.id}
              className='flex flex-col items-center justify-start text-center'
            >
              <div className='flex flex-col items-center justify-start h-full'>
                <div className='size-12 md:size-16 relative mb-2'>
                  <Image
                    src={el.icon}
                    alt={el.text}
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='pt-2 whitespace-nowrap'>{el.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className='pl-4 min-h-screen flex items-center justify-center flex-col text-center gap-y-16 py-16 px-4 md:px-10 bg-primary'>
        <h1 className='font-aboreto text-left w-full text-2xl lg:text-4xl text-secondary mb-12 uppercase tracking-wider'>
          REAL RESULTS, REAL PEOPLE <br />
          See What Our Clients Have to Say
        </h1>
        <TestimonialsSection />
      </section>
      <ConsultationForm cta='BOOK A CONSULTATION' sub_title='' />
    </div>
  );
}
