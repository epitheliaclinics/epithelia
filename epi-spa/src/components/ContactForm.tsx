'use client';

import { JSX, useState, useEffect, useRef } from 'react';
import PrimaryButton from './PrimaryButton';
import { useUTMParams } from '../hooks/useUTMParams';
import {
  validatePhoneNumber,
  formatPhoneAsYouType,
} from '../utils/phoneValidation';
import { useFormSubmission } from '../hooks/useFormSubmission';

export interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  interest: string;
  notes?: string;
}

interface ContactFormProps {
  readonly onSubmit?: (data: ContactFormData) => Promise<void>;
  readonly onSuccess?: () => void;
  readonly onError?: (error: string) => void;
  readonly submitButtonText?: string;
  readonly showTitle?: boolean;
  readonly className?: string;
  readonly isHomePage?: boolean;
}

interface SuccessMessageProps {
  readonly isHomePage?: boolean;
  readonly containerHeight: string;
}

const SuccessMessage = ({
  isHomePage,
  containerHeight,
}: SuccessMessageProps): JSX.Element => (
  <div
    className='flex flex-col items-center justify-center text-center animate-fade-in gap-y-4 md:gap-y-8'
    style={{ minHeight: containerHeight }}
  >
    <h2 className='font-aboreto text-2xl sm:text-4xl text-secondary'>
      THANK YOU!
    </h2>
    <div
      className={`space-y-3 font-figtree font-light ${
        isHomePage
          ? 'max-w-md text-secondary'
          : 'max-w-lg text-tertiary lg:text-lg'
      }`}
    >
      <p>
        Your request has been received.
        <br />
        Our team will get in touch with you shortly to schedule your
        consultation.
      </p>
      <p>
        In the meantime, feel free to explore our treatments and success
        stories. Your journey to healthy skin and hair starts here!
      </p>
    </div>
  </div>
);

const useFormManagement = (isHomePage: boolean) => {
  const [mobile, setMobile] = useState<string>('');
  const [mobileError, setMobileError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [containerHeight, setContainerHeight] = useState<string>('auto');
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (containerRef.current && !showSuccessMessage) {
      const height = containerRef.current.scrollHeight;
      setContainerHeight(`${height}px`);
    }
  }, [showSuccessMessage, isHomePage]);

  const resetForm = (): void => {
    setMobile('');
    setMobileError('');
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const showSuccessAndReset = (): void => {
    if (containerRef.current) {
      const currentHeight = containerRef.current.scrollHeight;
      setContainerHeight(`${currentHeight}px`);
    }

    setShowSuccessMessage(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowSuccessMessage(false);
      resetForm();
    }, 4000);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneAsYouType(inputValue);
    setMobile(formattedValue);

    if (mobileError) {
      setMobileError('');
    }
  };

  const validateMobile = (): boolean => {
    const validation = validatePhoneNumber(mobile);
    setMobileError(validation.message);
    return validation.isValid;
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    mobile,
    mobileError,
    loading,
    showSuccessMessage,
    containerHeight,
    formRef,
    containerRef,
    setLoading,
    resetForm,
    showSuccessAndReset,
    handleMobileChange,
    validateMobile,
  };
};

const useFormStyling = (isHomePage: boolean, className: string) => {
  const containerClasses = isHomePage
    ? `${className} backdrop-blur-sm bg-primary/20 border border-primary/30 shadow-xl`
    : `${className} bg-primary`;

  const inputClasses = isHomePage
    ? 'w-full bg-primary/30 backdrop-blur-sm p-2.5 rounded-md text-xs text-secondary placeholder:text-secondary/70 focus:outline-none focus:ring-1 focus:ring-primary/50 border border-primary/20'
    : 'w-full bg-tertiary/20 p-3 rounded-md text-sm text-tertiary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary/20';

  const inputErrorClasses = isHomePage
    ? 'w-full bg-primary/30 backdrop-blur-sm p-2.5 rounded-md text-xs text-secondary placeholder:text-secondary/70 focus:outline-none focus:ring-1 focus:ring-red-400 border border-red-400'
    : 'w-full bg-tertiary/20 p-3 rounded-md text-sm text-tertiary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-red-400 border border-red-400';

  const selectClasses = isHomePage
    ? 'home-options w-full appearance-none pr-8 px-3 py-2.5 bg-primary/30 backdrop-blur-sm rounded-md text-xs text-secondary focus:outline-none focus:ring-1 focus:ring-primary/50 border border-primary/20'
    : 'w-full appearance-none pr-10 px-4 py-3 bg-tertiary/20 rounded-md text-sm text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary/20';

  const textareaClasses = isHomePage
    ? 'w-full bg-primary/30 backdrop-blur-sm p-2.5 rounded-md text-xs text-secondary placeholder:text-secondary/70 focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none border border-primary/20'
    : 'w-full bg-tertiary/20 p-3 rounded-md text-sm text-tertiary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-none';

  return {
    containerClasses,
    inputClasses,
    inputErrorClasses,
    selectClasses,
    textareaClasses,
  };
};

export default function ContactForm({
  onSubmit,
  onSuccess,
  onError,
  submitButtonText = 'START MY CONSULTATION',
  showTitle = true,
  className = '',
  isHomePage = false,
}: Readonly<ContactFormProps>): JSX.Element {
  const utmParams = useUTMParams();

  const {
    mobile,
    mobileError,
    loading,
    showSuccessMessage,
    containerHeight,
    formRef,
    containerRef,
    setLoading,
    showSuccessAndReset,
    handleMobileChange,
    validateMobile,
  } = useFormManagement(isHomePage);

  const {
    containerClasses,
    inputClasses,
    inputErrorClasses,
    selectClasses,
    textareaClasses,
  } = useFormStyling(isHomePage, className);

  const { handleSubmitLogic } = useFormSubmission(onSubmit, onSuccess, onError);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!validateMobile()) {
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    if (values.company_website?.trim()) {
      console.warn('Bot submission detected, ignoring.');
      return;
    }

    const contactData = {
      name: values.name,
      mobile: values.mobile,
      email: values.email,
      interest: values.interest,
      notes: values.notes || '',
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_keywords: utmParams.utm_keywords,
      form_name: 'Contact Form',
    };

    await handleSubmitLogic(contactData, showSuccessAndReset, setLoading);
  };

  const interestOptions = [
    'Hair Rejuvenation',
    'Skin Rejuvenation',
    'Laser & Light Therapy',
    'Anti-ageing',
    'Laser Hair Reduction',
    'Preventive & Maintenance Care',
  ];

  if (showSuccessMessage) {
    return (
      <div
        className={`${containerClasses} transition-all duration-300 ease-in-out`}
      >
        <SuccessMessage
          isHomePage={isHomePage}
          containerHeight={containerHeight}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${containerClasses} transition-all duration-300 ease-in-out`}
      style={{
        minHeight: containerHeight !== 'auto' ? containerHeight : undefined,
      }}
    >
      {showTitle && (
        <>
          <h2 className='font-aboreto text-center mb-2 text-xl sm:text-[28px] text-secondary'>
            LET&apos;S BEGIN WITH {isHomePage ? ' ' : <br />}
            <span className={isHomePage ? '' : 'text-2xl sm:text-4xl'}>
              YOU.
            </span>
          </h2>
          <p
            className={`max-w-xl mx-auto text-center font-figtree font-light ${
              isHomePage
                ? 'text-xs mb-4 text-secondary/80'
                : 'text-sm mb-6 md:mb-14 text-tertiary'
            }`}
          >
            Share a few details and our team will get in touch to guide you
            through personalised skin or hair care options.
          </p>
        </>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`flex flex-col font-figtree gap-4 ${
          isHomePage ? 'text-secondary' : 'text-tertiary'
        }`}
      >
        <input
          type='text'
          name='company_website'
          autoComplete='off'
          tabIndex={-1}
          style={{ display: 'none' }}
        />

        <input
          name='name'
          required
          placeholder='Name*'
          className={inputClasses}
          disabled={loading}
        />

        <div
          className={`flex ${
            isHomePage ? 'gap-2' : 'gap-4 flex-col sm:flex-row'
          }`}
        >
          <div className='flex-1 relative'>
            <input
              name='mobile'
              required
              placeholder='Mobile Number*'
              inputMode='tel'
              value={mobile}
              onChange={handleMobileChange}
              title='Please enter a valid Indian mobile number'
              className={mobileError ? inputErrorClasses : inputClasses}
              style={{ minWidth: 0 }}
              disabled={loading}
            />
            {mobileError && (
              <p
                className={`absolute left-0 text-xs ${
                  isHomePage ? 'text-primary' : 'text-red-500'
                }`}
                style={{ top: '100%', zIndex: 10 }}
              >
                {mobileError}
              </p>
            )}
          </div>
          <input
            name='email'
            required
            type='email'
            placeholder='Email Address*'
            className={`${inputClasses} flex-1`}
            style={{ minWidth: 0 }}
            disabled={loading}
          />
        </div>
        <div className='relative'>
          <select
            name='interest'
            required
            defaultValue=''
            className={selectClasses}
            disabled={loading}
          >
            <option value='' hidden disabled className='!text-secondary'>
              Area of interest*
            </option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div
            className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${
              isHomePage ? 'right-2 text-secondary' : 'right-3 text-tertiary'
            }`}
          >
            ↓
          </div>
        </div>
        <textarea
          name='notes'
          rows={isHomePage ? 1 : 3}
          placeholder='Notes (symptoms, concerns etc.)'
          className={textareaClasses}
          disabled={loading}
        />
        <p
          className={`${
            isHomePage
              ? 'text-xs text-secondary/70'
              : 'text-xs text-tertiary/80'
          }`}
        >
          *All details you provide will be kept confidential and used solely for
          your consultation.
        </p>
        <PrimaryButton
          type='submit'
          disabled={loading || !!mobileError}
          className={`w-fit mx-auto justify-center !text-secondary font-aboreto tracking-wide opacity-100 disabled:opacity-50 disabled:cursor-not-allowed ${
            isHomePage ? 'my-0 text-xl' : 'my-10 text-base sm:text-xl'
          }`}
          arrowClassName={`text-secondary transition-transform duration-300 group-hover:translate-x-1 ${
            isHomePage ? '!size-2' : '!size-3 md:!size-4'
          }`}
        >
          {loading ? 'SENDING...' : submitButtonText}
        </PrimaryButton>
      </form>
    </div>
  );
}
