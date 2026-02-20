'use client';
import HomeHero from './HomeHero';
import Image from 'next/image';
import TreatmentAccordion from './TreatmentAccordion';
import PrimaryLink from '../../components/PrimaryLink';
import ConsultationForm from '../../components/ConsultationForm';

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

export default function HomeMainLayout() {
  return (
    <div>
      <HomeHero />
      <section className='min-h-screen flex items-center justify-center flex-col text-center gap-y-12 px-6 md:px-20'>
        <div className='h-fit'>
          <div className='w-60 h-20 relative'>
            <Image
              src='/assets/images/home_title.png'
              alt={'Epithelia'}
              fill
              className='object-contain'
            />
          </div>
        </div>
        <div className='flex flex-col justify-content gap-y-4 max-w-md mx-auto text-sm md:text-lg font-light font-figtree text-tertiary'>
          <p>
            {`At Epithelia Clinic, we believe skincare is more than just treatment. It’s a form of self-respect.`}
          </p>
          <p>
            Rooted in advanced medical science and delivered with the utmost
            care, our approach is designed to make you feel seen, supported, and
            radiant in your own skin.
          </p>
          <p>
            Our clinic offers state-of-the-art skin and hair solutions, all
            curated to match your unique biology and beauty.
          </p>
          <p>
            Here, expertise is not cold. It’s compassionate. Technology is not
            clinical. It’s personal.
          </p>
        </div>
        <PrimaryLink
          href={'/about'}
          arrowClassName='size-6 text-secondary transition-transform duration-300 group-hover:translate-x-1'
          className='group relative mx-auto font-aboreto text-secondary text-xl md:text-2xl font-medium transition-all duration-300 flex items-center gap-2'
        >
          ABOUT EPITHELIA
        </PrimaryLink>
      </section>
      <TreatmentAccordion />
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
      <ConsultationForm sub_title='' />
    </div>
  );
}
