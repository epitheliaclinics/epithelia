'use client';

import { useModal } from '../../../context/ModalContext';
import PrimaryButton from '../../../components/PrimaryButton';

export default function TreatmentHero({
  backgroundImage,
  titleTop = '',
  titleBottom = '',
  description = '',
  buttonText = '',
  thirdTitle = '',
  containerClassName = '',
  mobilePosition = 'default',
  bgImageClassName = '',
}) {
  const getPositionClasses = () => {
    if (mobilePosition === 'bottom-left') {
      return {
        container:
          'items-end justify-start md:items-end md:justify-end pl-8 pb-8 md:pr-8 md:pb-8 md:pl-0 md:pr-10 md:pb-16',
        textAlign: 'text-left md:text-right',
        textContainer: 'text-left md:text-right',
      };
    }

    return {
      container: 'items-end justify-end pr-8 md:pr-10 pb-8 md:pb-16',
      textAlign: 'text-center md:text-right',
      textContainer: 'text-right',
    };
  };

  const positionClasses = getPositionClasses();
  const { openModal } = useModal();

  return (
    <section className='relative h-[95vh] md:h-screen'>
      <div
        className={`absolute inset-0 bg-cover bg-left md:bg-center ${bgImageClassName}`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div
        className={`text-primary relative z-10 h-full flex ${positionClasses.container} ${containerClassName}`}
      >
        <div className={`${positionClasses.textContainer} max-w-lg`}>
          <h1 className='font-aboreto text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight'>
            <span
              className={`block ${positionClasses.textAlign} whitespace-nowrap md:-ml-6`}
            >
              {titleTop}
            </span>
            <span className={`block ${positionClasses.textAlign} font-normal`}>
              {titleBottom}
            </span>
            {thirdTitle !== '' && (
              <span
                className={`block ${positionClasses.textAlign} font-normal`}
              >
                {thirdTitle}
              </span>
            )}
          </h1>

          <p
            className={`font-figtree text-lg sm:text-xl md:text-2xl font-light mb-8 ${positionClasses.textAlign} whitespace-pre-line`}
          >
            {description}
          </p>

          {buttonText !== '' && (
            <PrimaryButton
              onClick={openModal}
              className={`font-aboreto ${
                mobilePosition === 'bottom-left' ? '' : 'mx-auto'
              } md:absolute md:bottom-6 md:right-10 text-secondary text-xl md:text-2xl font-medium`}
              arrowClassName='text-secondary transition-transform duration-300 group-hover:translate-x-1'
            >
              {buttonText}
            </PrimaryButton>
          )}
        </div>
      </div>
    </section>
  );
}
