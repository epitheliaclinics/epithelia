'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import { useToast } from './ToastProvider';

export default function ContactModal({ isOpen, onClose }) {
  const [mobile, setMobile] = useState('');
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleMobileChange = (e) => {
    const filteredValue = e.target.value.replace(/[^\d\s()+-]/g, '');
    setMobile(filteredValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    if (values.company_website && values.company_website.trim() !== '') {
      console.warn('Bot submission detected, ignoring.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await res.json();
      if (result.success) {
        showToast('Consultation request sent!', 'success');
        onClose();
      } else {
        showToast('Failed to send message.', 'error');
      }
    } catch (error) {
      showToast('Something went wrong!', 'error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className='fixed inset-0 bg-black/30 backdrop-blur-md z-[9999] flex items-center justify-center px-4'
    >
      <div
        ref={modalRef}
        className='bg-primary max-w-7xl w-full md:flex rounded-xl overflow-hidden shadow-xl relative'
      >
        <div className='hidden md:block w-1/2 relative h-[70dvh]'>
          <Image
            src='/assets/images/contact_hero.png'
            alt='Contact'
            fill
            className='object-cover'
          />
        </div>

        <div className='w-full md:w-1/2 p-8 sm:p-4'>
          <button
            onClick={onClose}
            className='flex justify-end w-full text-tertiary hover:text-secondary transition'
          >
            <X size={32} />
          </button>

          <h2 className='text-xl sm:text-2xl font-aboreto text-secondary text-center mb-1'>
            LET’S BEGIN WITH <br />{' '}
            <span className='text-2xl sm:text-3xl'>YOU.</span>
          </h2>
          <p className='text-sm max-w-sm mx-auto text-center mb-6 md:mb-14 font-figtree text-tertiary font-light'>
            Share a few details and our team will get in touch to guide you
            through personalised skin or hair care options.
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col md:px-6 gap-4 font-figtree text-tertiary'
          >
            {/* 🕵️‍♂️ Honeypot Field */}
            <input
              type='text'
              name='company_website'
              autoComplete='off'
              tabIndex='-1'
              style={{ display: 'none' }}
            />

            <input
              name='name'
              required
              placeholder='Name*'
              className='bg-tertiary/20 p-3 rounded-md text-sm text-tertiary placeholder:text-tertiary focus:outline-none'
            />

            <div className='flex gap-4 flex-col sm:flex-row'>
              <input
                name='mobile'
                required
                placeholder='Mobile Number*'
                inputMode='tel'
                pattern='[\d\s()+-]*'
                value={mobile}
                onChange={handleMobileChange}
                title='Please enter a valid phone number (digits, spaces, +, -, (, ) allowed)'
                className='bg-tertiary/20 p-3 rounded-md text-sm text-tertiary placeholder:text-tertiary flex-1 focus:outline-none'
              />
              <input
                name='email'
                required
                type='email'
                placeholder='Email Address*'
                className='bg-tertiary/20 p-3 rounded-md text-sm text-tertiary placeholder:text-tertiary flex-1 focus:outline-none'
              />
            </div>

            <div className='relative'>
              <select
                name='interest'
                required
                defaultValue=''
                className='w-full appearance-none pr-10 px-4 py-3 bg-tertiary/20 rounded-md text-sm text-tertiary focus:outline-none'
              >
                <option value='' hidden disabled>
                  Area of interest
                </option>
                <option value='Hair Rejuvenation'>Hair Rejuvenation</option>
                <option value='Skin Rejuvenation'>Skin Rejuvenation</option>
                <option value='Laser & Light Therapy'>
                  Laser & Light Therapy
                </option>
                <option value='Anti-ageing'>Anti-ageing</option>
                <option value='Laser Hair Reduction'>
                  Laser Hair Reduction
                </option>
                <option value='Preventive & Maintenance Care'>
                  Preventive & Maintenance Care
                </option>
              </select>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-tertiary'>
                ↓
              </div>
            </div>

            <textarea
              name='notes'
              rows={3}
              placeholder='Notes (symptoms, concerns etc.)'
              className='bg-tertiary/20 p-3 rounded-md text-sm text-tertiary placeholder:text-tertiary focus:outline-none'
            />

            <PrimaryButton
              type='submit'
              disabled={loading}
              className='mt-10 w-fit mx-auto justify-center !text-secondary text-base sm:text-xl font-aboreto tracking-wide opacity-100 disabled:opacity-50 disabled:cursor-not-allowed'
              arrowClassName='text-secondary !size-3 md:!size-4 transition-transform duration-300 group-hover:translate-x-1'
            >
              START MY CONSULTATION
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
