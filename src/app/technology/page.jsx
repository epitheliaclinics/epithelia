'use client';

import ConsultationForm from '../../components/ConsultationForm';
import { consultationConfigs } from '../../data/consultationConfigs';
import TechnologyHero from './TechnologyHero';
import TechnologyMachine from './TechnologyMachine';

export default function TechnologyPage() {
  return (
    <div className='min-h-screen relative bg-primary flex flex-col'>
      <TechnologyHero />
      <TechnologyMachine />
      <ConsultationForm {...consultationConfigs.technology} />
    </div>
  );
}
