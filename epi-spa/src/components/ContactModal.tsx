'use client';

import { JSX, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import ContactForm, { ContactFormData } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps): JSX.Element | null {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleFormSuccess = (): void => {
    onClose();
  };

  const handleFormSubmit = async (data: ContactFormData): Promise<void> => {
    // Custom submission logic if needed
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
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
        <div className='hidden md:block w-1/2 relative'>
          <Image
            src='/assets/images/contact_hero.png'
            alt='Contact consultation'
            fill
            className='object-cover'
          />
        </div>

        <div className='w-full md:w-1/2 p-8 sm:p-4'>
          <button
            onClick={onClose}
            className='flex justify-end w-full text-tertiary hover:text-secondary transition-colors duration-200'
            aria-label='Close modal'
          >
            <X size={32} />
          </button>
          <ContactForm
            onSubmit={handleFormSubmit}
            onSuccess={handleFormSuccess}
            className='md:px-6'
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
