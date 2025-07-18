import { useEffect, useRef } from 'react';
import { useNavAppearance } from '../../../context/NavAppearanceContext';

export default function BlogMainHero() {
  const blogRef = useRef(null);
  const { setIsLight } = useNavAppearance();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLight(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const section = blogRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [setIsLight]);

  return (
    <section
      ref={blogRef}
      className='h-[95vh] md:min-h-screen bg-secondary text-primary gap-y-8 px-10 md:px-0 flex flex-col justify-center items-center'
    >
      <h1 className='text-2xl md:text-5xl font-aboreto'>BLOGS</h1>
      <div className='max-w-md text-center flex flex-col gap-y-4 text-sm md:text-xl font-light font-figtree'>
        Discover expert-led guidance on skin, hair, and wellness, from clinical
        truths to aesthetic rituals, tailored for Indian skin and designed to
        empower your journey.
      </div>
    </section>
  );
}
