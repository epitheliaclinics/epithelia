'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PrimaryLink({
  href,
  children,
  className = '',
  arrowClassName = '',
  showChevron = true,
  undrelineAnimate = true,
  ...props
}) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center transition-all duration-300 ${className}`}
      {...props}
    >
      <span className='relative inline-block'>
        <span className='relative z-10'>{children}</span>
        {undrelineAnimate && (
          <span
            className='absolute left-0 bottom-0 h-[1px] w-full bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0'
            aria-hidden='true'
          />
        )}
      </span>
      {showChevron && (
        <ArrowRight
          className={`ml-2 size-4 transition-all duration-300 ${arrowClassName}`}
        />
      )}
    </Link>
  );
}
