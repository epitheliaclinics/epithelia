/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { technologyData } from '../../data/technologyData.js';
import PrimaryLink from '../../components/PrimaryLink';
import Image from 'next/image.js';

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyParallax() {
  const containerRef = useRef(null);
  const prevTitleRef = useRef(null);
  const currentTitleRef = useRef(null);
  const nextTitleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('down');

  const getPrevTitle = () => {
    return activeIndex > 0 ? technologyData[activeIndex - 1].title : '';
  };

  const getNextTitle = () => {
    return activeIndex < technologyData.length - 1
      ? technologyData[activeIndex + 1].title
      : '';
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (
      !prevTitleRef.current ||
      !currentTitleRef.current ||
      !nextTitleRef.current
    )
      return;

    gsap.killTweensOf([
      prevTitleRef.current,
      currentTitleRef.current,
      nextTitleRef.current,
    ]);
    prevTitleRef.current.style.transform = 'none';
    currentTitleRef.current.style.transform = 'none';
    nextTitleRef.current.style.transform = 'none';
    gsap.set(prevTitleRef.current, { scale: 1, overwrite: 'all' });
    gsap.set(currentTitleRef.current, {
      scale: isMobile ? 1 : 1.2,
      overwrite: 'all',
    });
    gsap.set(nextTitleRef.current, { scale: 1, overwrite: 'all' });

    if (isMobile) {
      gsap.set(prevTitleRef.current, { y: 0 });
      gsap.set(currentTitleRef.current, { y: 0 });
      gsap.set(nextTitleRef.current, { y: 0 });
    } else {
      gsap.set(prevTitleRef.current, { y: getPrevTitle() ? -5 : -100 });
      gsap.set(currentTitleRef.current, { y: 0 });
      gsap.set(nextTitleRef.current, { y: getNextTitle() ? 5 : 100 });
    }
  }, [activeIndex, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'power3.out' },
    });

    const isScrollingUp = scrollDirection.current === 'up';
    const yOffsetPrev = -5;
    const yOffsetNext = 5;

    if (isScrollingUp && activeIndex > 0) {
      tl.to(prevTitleRef.current, { y: 0, scale: 1.2 })
        .to(currentTitleRef.current, { y: yOffsetNext, scale: 1 }, 0)
        .to(
          nextTitleRef.current,
          { y: getNextTitle() ? yOffsetNext + 5 : 100, scale: 1 },
          0
        )
        .set(currentTitleRef.current, { scale: 1 }, '+=0.1');
    } else if (!isScrollingUp && activeIndex < technologyData.length - 1) {
      tl.to(nextTitleRef.current, { y: 0, scale: 1.2 })
        .to(currentTitleRef.current, { y: yOffsetPrev, scale: 1 }, 0)
        .to(
          prevTitleRef.current,
          { y: getPrevTitle() ? yOffsetPrev - 5 : -100, scale: 1 },
          0
        )
        .set(currentTitleRef.current, { scale: 1 }, '+=0.1');
    }

    return () => {
      if (tl) tl.kill();
    };
  }, [activeIndex, isMobile, scrollDirection]);

  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const ctx = gsap.context(() => {
      const totalItems = technologyData.length;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;
          const currentScrollY = window.scrollY;

          scrollDirection.current =
            currentScrollY > lastScrollY.current ? 'down' : 'up';
          lastScrollY.current = currentScrollY;

          let newIndex;
          const threshold = 1 / totalItems;

          if (progress < threshold) {
            newIndex = 0;
          } else if (progress >= threshold && progress < threshold * 2) {
            newIndex = 1;
          } else if (progress >= threshold * 2 && progress < threshold * 3) {
            newIndex = 2;
          } else {
            newIndex = Math.min(
              Math.floor(progress / threshold),
              totalItems - 1
            );
          }

          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
        },
        refreshPriority: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, activeIndex]);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const section = containerRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      const relativePosition = scrollPosition - sectionTop;
      const sectionProgress =
        relativePosition / (sectionHeight - viewportHeight);

      const totalItems = technologyData.length;
      const threshold = 1 / totalItems;
      let newIndex;

      if (sectionProgress < 0) {
        newIndex = 0;
      } else if (sectionProgress < threshold) {
        newIndex = 0;
      } else if (
        sectionProgress >= threshold &&
        sectionProgress < threshold * 2
      ) {
        newIndex = 1;
      } else if (
        sectionProgress >= threshold * 2 &&
        sectionProgress < threshold * 3
      ) {
        newIndex = 2;
      } else {
        newIndex = Math.min(
          Math.floor(sectionProgress / threshold),
          totalItems - 1
        );
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, activeIndex]);

  return (
    <div
      ref={containerRef}
      className='relative transition-opacity duration-500 mt-10 md:mt-0'
      style={{ height: `${technologyData.length * 100}vh` }}
    >
      <div className='sticky top-16 md:top-0 h-[calc(100vh-4rem)] md:h-screen w-full overflow-hidden'>
        <div className='relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-0 px-0 py-0 md:px-0 md:py-12 md:pl-12'>
          <div className='flex-1 flex flex-col justify-between items-stretch h-full space-y-4 md:space-y-0 mb-8 md:mb-0'>
            <div className='flex flex-col gap-y-0 justify-center items-center'>
              <div className='flex flex-col items-center text-center min-h-20 md:min-h-32'>
                <div
                  ref={prevTitleRef}
                  className='block text-xs md:text-base text-secondary/30 will-change-transform'
                >
                  {getPrevTitle()}
                </div>
                <h2
                  ref={currentTitleRef}
                  className='text-xl md:text-4xl font-aboreto text-secondary text-center md:text-left will-change-transform'
                >
                  {technologyData[activeIndex].title}
                </h2>
                <div
                  ref={nextTitleRef}
                  className='block text-xs md:text-base text-secondary/30 will-change-transform'
                >
                  {getNextTitle()}
                </div>
              </div>

              <ul className='text-sm md:text-xl text-center font-light font-figtree text-tertiary flex flex-col px-6 md:px-0 gap-y-3 md:gap-y-6 max-w-md mx-auto md:mx-0'>
                {technologyData[activeIndex].description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col justify-center items-center text-tertiary font-figtree font-light text-sm md:text-base'>
              <p>For more information, visit :</p>
              <PrimaryLink
                href={technologyData[activeIndex].hyperLink}
                showChevron={false}
              >
                {technologyData[activeIndex].hyperLink}
              </PrimaryLink>
            </div>
          </div>
          <div className='flex-1 relative w-full h-[400px] md:h-screen'>
            {technologyData.map((item, i) => (
              <Image
                key={i}
                src={isMobile ? item.mobileImage : item.image}
                alt={item.title}
                fill
                priority={i === 0}
                quality={100}
                className={`object-cover object-center absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
                  i === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
