

import TreatmentHero from '../treatments/components/TreatmentHero';
import AboutBody from './components/AboutBody';


export const metadata = {
  title: 'About Us - Epithelia',
  description: 'Learn about Epithelia skin care solutions',
  keywords: ['about', 'skin care', 'dermatology'],
};

export default function AboutPage() {
  return (
    <div className='min-h-screen relative bg-primary flex flex-col'>
      <TreatmentHero
        backgroundImage='/assets/images/about_hero.png'
        titleTop='PERSONALISED.'
        titleBottom='PRECISE.'
        thirdTitle='PROVEN.'
        containerClassName='!pb-2 md:!pb-4'
        mobilePosition='bottom-left'
      />
      <AboutBody />
    </div>
  );
}
