'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function FaqAccordion({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='px-4 md:px-12 py-16 text-secondary'>
      <h2 className='text-3xl md:text-4xl font-aboreto mb-10'>
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className='space-y-6'>
        {faqData?.map((item, index) => (
          <div
            key={index}
            className='border-b border-[#c0bdb7] pb-4 font-light font-figtree'
          >
            <button
              onClick={() => toggle(index)}
              className='w-full flex justify-between items-center text-left focus:outline-none'
            >
              <span className='text-lg md:text-xl text-tertiary'>
                {item.question}
              </span>
              {openIndex === index ? (
                <Minus size={20} className='text-[#0D3B35]' />
              ) : (
                <Plus size={20} className='text-[#0D3B35]' />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[500px] mt-3' : 'max-h-0'
              }`}
            >
              <p className='text-sm md:text-base whitespace-pre-line text-[#7B7B7B] leading-relaxed pr-8'>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
