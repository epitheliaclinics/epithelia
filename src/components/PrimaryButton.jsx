'use client';

import { ArrowRight } from 'lucide-react';

export default function PrimaryButton({
  children,
  onClick = () => {},
  className = '',
  arrowClassName = '',
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`group relative flex items-center transition-all duration-300 ${className}`}
    >
      <span className='relative'>
        <span>{children}</span>
        <span className='absolute left-0 -bottom-1 h-[1px] w-0 bg-current group-hover:w-full transition-all duration-300' />
      </span>
      <ArrowRight
        className={`ml-2 size-6 transition-all duration-300 ${arrowClassName}`}
      />
    </button>
  );
}
