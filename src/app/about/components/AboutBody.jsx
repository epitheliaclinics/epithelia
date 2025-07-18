import ConsultationForm from '../../../components/ConsultationForm';
import PrimaryLink from '../../../components/PrimaryLink';
import { useNavAppearance } from '../../../context/NavAppearanceContext';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { consultationConfigs } from '../../../data/consultationConfigs';

export default function AboutBody() {
  const philosophyRef = useRef(null);

  const { setIsLight } = useNavAppearance();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const isVisible = entry.isIntersecting;
        if (ratio >= 0.9) {
          setIsLight(true);
        }

        if (ratio <= 0.2 || !isVisible) {
          setIsLight(false);
        }
      },
      {
        root: null,
        threshold: [0, 0.2, 0.9, 1],
      }
    );

    const section = philosophyRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [setIsLight]);

  return (
    <div className='flex flex-col gap-y-0 md:gap-y-20'>
      <section
        ref={philosophyRef}
        className='min-h-screen bg-secondary text-primary flex items-center justify-center flex-col text-center gap-y-16 px-6 md:px-20'
      >
        <h2 className='text-2xl md:text-4xl font-aboreto'>OUR PHILOSOPHY</h2>
        <div className='flex flex-col justify-content gap-y-8 max-w-md mx-auto text-sm md:text-lg font-light font-figtree'>
          <p>
            At Epithelia, we believe that true beauty is never forced; it’s
            revealed.
          </p>
          <p>
            Our philosophy lies in subtle transformation, guided by science,
            delivered with artistry, and always in tune with the individuality
            of your skin and hair. Every treatment is an invitation to return to
            balance, where confidence feels effortless, and care is quietly
            exceptional.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col text-center gap-y-16 px-6 md:px-20'>
          <h2 className='text-2xl md:text-4xl font-aboreto'>OUR VISION</h2>
          <div className='flex flex-col justify-content gap-y-8 max-w-md mx-auto text-sm md:text-lg font-light font-figtree'>
            <p>
              To be Hyderabad’s, and India’s most trusted destination for
              elevated aesthetic care. Where science meets serenity, and every
              touchpoint reflects precision, privacy, and pure refinement.
            </p>
          </div>
        </div>
      </section>
      <section className='md:min-h-screen flex items-center justify-center flex-col text-center gap-y-16 px-10 py-20 md:py-0 md:px-20'>
        <h2 className='text-2xl md:text-4xl font-aboreto'>DR. NARESH KUMAR</h2>
        <div className='flex flex-col justify-content gap-y-8 max-w-lg mx-auto text-sm md:text-base font-light font-figtree text-tertiary'>
          <p className='font-abreto text-secondary uppercase tracking-wider -mt-14'>
            Aesthetic Dermatologist & Trichologist, MD (DVL)
            <br />
            FOUNDER, EPITHELIA SKIN AND HAIR CLINIC
          </p>
          <div className='flex flex-col gap-y-8 max-w-md'>
            <p>
              With over a decade of clinical experience, Dr. Naresh Kumar brings
              together the rigour of dermatological science and the subtlety of
              aesthetic artistry.
            </p>
            <p>
              A board-certified dermatologist and trichologist, his expertise
              lies in treating Indian skin and scalp with results that are
              visible, lasting, and always natural-looking.
            </p>
            <p>
              Trained in dermatology from B.L.D.E. University and holding an
              MBBS from J.J.M. Medical College, Dr. Naresh combines global
              advancements, such as PRP, laser therapies, and regenerative
              treatments, with a deeply personalised approach.
            </p>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
        <div className='bg-secondary px-8 md:px-20 py-16 flex flex-col justify-center items-center gap-10'>
          <div className='w-24 md:w-48'>
            <Image
              src='/assets/images/about_logo.png'
              alt='Epithelia Logo'
              width={240}
              height={240}
              className='object-contain'
            />
          </div>

          <div className='gap-y-8 flex flex-col text-center text-primary font-aboreto'>
            <div>
              <h3 className='text-xl md:text-3xl tracking-wide'>LOCATION</h3>
              <p className='mt-1 text-sm md:text-base font-figtree font-light'>
                ADP Blvd, Financial District
                <br />
                Nanakramguda, Hyderabad
              </p>
            </div>

            <div>
              <h3 className='text-xl md:text-3xl tracking-wide'>
                CONTACT NUMBER
              </h3>
              <a
                href='tel:+919391111888'
                className='mt-1 text-sm md:text-base font-figtree font-light'
              >
                (+91) 93911 11888
              </a>
            </div>

            <div>
              <h3 className='text-xl md:text-3xl tracking-wide'>
                CLINIC TIMINGS
              </h3>
              <p className='mt-1 text-sm md:text-base font-figtree font-light'>
                Monday – Friday
                <br />
                08:00 AM – 09:00 PM
              </p>
            </div>
          </div>
          <div className='pt-6'>
            <PrimaryLink
              href='https://www.google.com/maps/place/Epithelia+clinic/@17.4158474,78.3541203,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb959cd02abceb:0xa016f3d40e85b2ff!8m2!3d17.4158474!4d78.3541203!16s%2Fg%2F11lz5mc512?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D'
              className='text-primary text-lg md:text-2xl font-aboreto'
              arrowClassName='text-primary transition-transform duration-300 group-hover:translate-x-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              VIEW LOCATION ON MAPS
            </PrimaryLink>
          </div>
        </div>
        <div className='w-full h-[300px] md:h-auto'>
          <iframe
            title='Epithelia Clinic Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9153952972606!2d78.3541203!3d17.4158474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb959cd02abceb%3A0xa016f3d40e85b2ff!2sEpithelia%20clinic!5e0!3m2!1sen!2sin!4v1751817584932!5m2!1sen!2sin'
            width='100%'
            height='100%'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-full border-0'
          />
        </div>
      </section>
      <ConsultationForm {...consultationConfigs.treatment} />
    </div>
  );
}
