'use client';

import Image from 'next/image';

export default function CareInstructions({ preContent, postContent }) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
      <div className='text-secondary flex justify-center items-center px-8 py-14 text-center'>
        <div className='flex flex-col items-center gap-10'>
          <div className='flex flex-col items-center gap-y-10'>
            <h2 className='text-2xl md:text-4xl font-aboreto'>
              PRE-TREATMENT
              <br />
              CARE
            </h2>
            <p className='max-w-md text-sm md:text-lg font-light font-figtree text-secondary'>
              {preContent.description}
            </p>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            {preContent.items.map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center text-xs font-figtree text-secondary font-light'
              >
                <div className='w-12 h-12 relative mb-2'>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className='object-contain'
                  />
                </div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-secondary text-white flex justify-center items-center px-8 py-14 text-center'>
        <div className='flex flex-col items-center gap-10'>
          <div className='flex flex-col items-center gap-y-10'>
            <h2 className='text-2xl md:text-4xl font-aboreto mb-2'>
              POST-TREATMENT
              <br />
              CARE
            </h2>
            <p className='max-w-md text-sm md:text-lg font-light font-figtree'>
              {postContent.description}
            </p>
          </div>

          <div className='grid grid-cols-2 gap-x-6 gap-y-8 place-items-center'>
            {postContent.items.map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center text-xs font-figtree text-primary font-light'
              >
                <div className='w-12 h-12 relative mb-2'>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className='object-contain'
                  />
                </div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
