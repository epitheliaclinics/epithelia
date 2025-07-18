import PrimaryLink from '../../../components/PrimaryLink';
import { blogList } from '../../../data/blogList';
import Image from 'next/image';
import React from 'react';

export default function BlogCard() {
  return (
    <section className='px-8 md:px-4 py-12 md:py-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {blogList.map((item, index) => (
          <div
            key={index}
            className='space-y-4 md:flex md:flex-col md:justify-between md:min-h-[500px]'
          >
            <div className='aspect-square relative w-full overflow-hidden rounded-sm'>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>

            {/* Content section as flex-grow block */}
            <div className='text-secondary flex flex-col justify-between flex-grow space-y-2'>
              <div className='space-y-2'>
                <h3 className='text-lg md:text-xl font-semibold leading-snug font-aboreto'>
                  {item.title}
                </h3>
                <p className='text-base text-tertiary font-figtree font-light leading-relaxed'>
                  {item.excerpt}
                </p>
              </div>

              <div className='pt-2'>
                <PrimaryLink
                  href={item.link}
                  className='text-lg text-secondary font-aboreto'
                  arrowClassName='group-hover:translate-x-1 transition-transform'
                >
                  READ MORE
                </PrimaryLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
