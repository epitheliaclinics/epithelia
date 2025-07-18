'use client';

import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { useToast } from './ToastProvider';

export default function ConsultationForm({
  title = 'START YOUR JOURNEY TO RADIANT CONFIDENCE',
  description = `Whether you know exactly what you need or are just exploring, we’re here to help you make the right choice.`,
  cta = 'RESERVE MY CONSULTATION',
  sub_title = 'Skin',
  notes = false,
  notes_title = 'Notes',
}) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    ...(notes ? { notes: '' } : { interest: '' }),
    company_website: '',
  });
  const [loading, setLoading] = useState(false);

  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const safeValue =
      name === 'mobile' ? value.replace(/[^\d\s()+-]/g, '') : value;

    setFormData((prev) => ({
      ...prev,
      [name]: safeValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        showToast('Consultation request sent!', 'success');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          ...(notes ? { notes: '' } : { interest: '' }),
          company_website: '',
        });
      } else {
        showToast('Failed to send message.', 'error');
      }
    } catch (err) {
      showToast('Something went wrong!', 'error');
      console.error('Submit Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='py-16 px-4 text-center'>
      <h2 className='text-2xl md:text-3xl font-aboreto uppercase text-secondary mb-4'>
        {title}
      </h2>
      <div className='text-base font-figtree md:text-lg text-tertiary font-light max-w-2xl mx-auto mb-10'>
        <p>{sub_title}</p>
        <p>{description}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-2xl mx-auto flex flex-col gap-y-6 font-figtree'
      >
        <input
          type='text'
          name='company_website'
          value={formData.company_website}
          onChange={handleChange}
          autoComplete='off'
          style={{ display: 'none' }}
          tabIndex='-1'
        />

        <input
          type='text'
          name='name'
          placeholder='Name*'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full px-4 py-3 bg-tertiary/20 rounded-md text-tertiary placeholder:text-tertiary focus:outline-none'
        />

        <div className='flex flex-col md:flex-row gap-4'>
          <input
            type='tel'
            name='mobile'
            placeholder='Mobile Number*'
            value={formData.mobile}
            onChange={handleChange}
            required
            inputMode='tel'
            pattern='[\d\s()+-]*'
            title='Please enter a valid phone number'
            className='flex-1 px-4 py-3 bg-tertiary/20 rounded-md text-tertiary placeholder:text-tertiary focus:outline-none'
          />
          <input
            type='email'
            name='email'
            placeholder='Email Address*'
            value={formData.email}
            onChange={handleChange}
            required
            className='flex-1 px-4 py-3 bg-tertiary/20 rounded-md text-tertiary placeholder:text-tertiary focus:outline-none'
          />
        </div>

        {notes ? (
          <input
            type='text'
            name='notes'
            placeholder={notes_title}
            value={formData.notes}
            onChange={handleChange}
            className='flex-1 px-4 py-3 bg-tertiary/20 rounded-md text-tertiary placeholder:text-tertiary focus:outline-none'
          />
        ) : (
          <div className='relative'>
            <select
              name='interest'
              value={formData.interest}
              onChange={handleChange}
              className='w-full appearance-none pr-10 px-4 py-3 bg-tertiary/20 rounded-md text-tertiary focus:outline-none'
            >
              <option value='' disabled hidden>
                Area of interest
              </option>
              <option value='Hair Rejuvenation'>Hair Rejuvenation</option>
              <option value='Skin Rejuvenation'>Skin Rejuvenation</option>
              <option value='Laser & Light Therapy'>
                Laser & Light Therapy
              </option>
              <option value='Anti-ageing'>Anti-ageing</option>
              <option value='Laser Hair Reduction'>Laser Hair Reduction</option>
              <option value='Preventive & Maintenance Care'>
                Preventive & Maintenance Care
              </option>
            </select>
            <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-tertiary'>
              ↓
            </div>
          </div>
        )}

        <PrimaryButton
          type='submit'
          disabled={loading}
          className='mt-4 w-fit mx-auto text-secondary text-lg md:text-2xl font-aboreto uppercase tracking-wide hover:text-secondary/70 opacity-100 disabled:opacity-50 disabled:cursor-not-allowed'
          arrowClassName='text-secondary transition-transform size-3 md:size-4 duration-300 group-hover:translate-x-1'
        >
          {cta}
        </PrimaryButton>
      </form>
    </section>
  );
}
