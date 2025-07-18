'use client';

import SolutionCard from './components/SolutionCard';
import TreatmentHero from './components/TreatmentHero';
import ConsultationForm from '../../components/ConsultationForm';
import { consultationConfigs } from '../../data/consultationConfigs';

export default function TreatmentPage() {
  return (
    <div className='min-h-screen relative bg-primary flex flex-col gap-y-20'>
      <TreatmentHero
        backgroundImage='/assets/images/treatments_hero.png'
        titleTop='PREMIUM SKIN & HAIR'
        titleBottom='CARE TREATMENTS'
        mobilePosition='bottom-left'
        description={`Experience visible results with\ncustomised care and\nstate-of-the-art technology`}
        buttonText='CONSULT US'
      />
      <SolutionCard />
      <ConsultationForm {...consultationConfigs.treatment} />
    </div>
  );
}
