import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import { useModal } from '../../../context/ModalContext';
import FaqAccordion from './FaqAccordion';

const BlogSlugMain = ({ blogData }) => {
  const { openModal } = useModal();
  
  return (
    <div className='max-w-6xl mx-auto p-6 flex flex-col gap-y-10 text-left mb-20'>
      <h1 className='text-2xl md:text-4xl text-secondary font-aboreto text-center whitespace-pre-line'>
        {blogData.title}
      </h1>
      
      <div className='text-left text-tertiary font-figtree font-light text-lg md:text-xl flex flex-col gap-y-6'>
        {blogData.subtitle.map((subtitle, index) => (
          <p key={index}>
            {subtitle}
            <br />
          </p>
        ))}
      </div>
      
      <div className='space-y-6 text-tertiary'>
        {blogData.sections.map((section, index) => (
          <div key={index} className='flex flex-col gap-y-8 font-figtree'>
            <h2 className='text-lg md:text-xl'>{section.heading}</h2>
            
            {/* Only render description if it exists and is not empty */}
            {section.description && section.description.trim() !== '' && (
              <p className='text-lg md:text-xl font-light'>
                {section.description}
              </p>
            )}
            
            {/* Render FAQ Accordion if faqs array exists */}
            {section.faqs && section.faqs.length > 0 && (
              <FaqAccordion faqs={section.faqs} />
            )}
            
            {/* Render bullets if they exist */}
            {section.bullets && section.bullets.length > 0 && (
              <div className='flex flex-col'>
                {section?.bulletsTitle && (
                  <p className='text-lg md:text-xl font-light mb-3'>
                    {section?.bulletsTitle}
                  </p>
                )}
                <ul className='list-disc list-outside pl-8 text-lg md:text-xl font-light space-y-2'>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='text-lg md:text-xl font-figtree font-light flex flex-col gap-y-6 text-tertiary'>
        {blogData.conclusion?.map((el, idx) => {
          return <p key={idx}>{el}</p>;
        })}
      </div>
      
      <PrimaryButton
        onClick={openModal}
        className='font-aboreto text-secondary text-lg md:text-xl'
        arrowClassName='text-secondary !size-4 transition-transform duration-300 group-hover:translate-x-1'
      >
        RESERVE MY CONSULTATION
      </PrimaryButton>
    </div>
  );
};

export default BlogSlugMain;
