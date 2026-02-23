'use client';

import { useParams } from 'next/navigation';
import solutionData, { careData } from '../../../data/treatmentsData';
import TreatmentHero from '../components/TreatmentHero';
import TreatmentDetails from '../components/TreatmentDetails';
import CareInstructions from '../components/CareInstructions';
import FaqAccordion from '../../../components/FaqAccordion';
import ConsultationForm from '../../../components/ConsultationForm';
import { faqData } from '../../../data/faqData';
import { consultationConfigs } from '../../../data/consultationConfigs';

// SEO-Optimized H1 Titles for Each Treatment
const treatmentH1Titles = {
  'preventive-and-maintenance-care': {
    titleTop: 'PREVENTIVE & MAINTENANCE',
    titleBottom: 'CARE IN HYDERABAD',
    thirdTitle: ''
  },
  'laser-hair-reduction': {
    titleTop: 'LASER HAIR',
    titleBottom: 'REDUCTION IN HYDERABAD',
    thirdTitle: ''
  },
  'anti-ageing': {
    titleTop: 'ANTI-AGING',
    titleBottom: 'TREATMENTS IN HYDERABAD',
    thirdTitle: ''
  },
  'laser-and-light-therapy': {
    titleTop: 'LASER & LIGHT',
    titleBottom: 'THERAPY IN HYDERABAD',
    thirdTitle: ''
  },
  'skin-rejuvenation': {
    titleTop: 'SKIN REJUVENATION',
    titleBottom: 'TREATMENTS IN HYDERABAD',
    thirdTitle: ''
  },
  'hair-rejuvenation': {
    titleTop: 'HAIR REJUVENATION',
    titleBottom: 'TREATMENTS IN HYDERABAD',
    thirdTitle: ''
  }
};

export default function SolutionPage() {
  const { details } = useParams();
  const data = solutionData[details];
  const careContent = careData[details];
  const faqContent = faqData[details];
  
  //   SEO-optimized H1 title
  const h1Title = treatmentH1Titles[details] || {
    titleTop: data?.title?.toUpperCase() || 'TREATMENT',
    titleBottom: 'IN HYDERABAD',
    thirdTitle: ''
  };

  if (!data || !careContent || !faqContent) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Not Found
      </div>
    );
  }

  return (
    <>
      {/* Treatment Hero with SEO H1 */}
      <TreatmentHero
        backgroundImage='/assets/images/treatments_hero.png'
        titleTop={h1Title.titleTop}
        titleBottom={h1Title.titleBottom}
        thirdTitle={h1Title.thirdTitle}
        description={data.description}
        buttonText='CONSULT US'
        mobilePosition='bottom-left'
      />
      
      {/* Existing Content */}
      <TreatmentDetails data={data} />
      <div className='mt-40 md:mt-10'>
        <CareInstructions
          preContent={careContent.preContent}
          postContent={careContent.postContent}
        />
      </div>
      <FaqAccordion faqData={faqContent} />
      <ConsultationForm {...consultationConfigs.treatmentDetails} />
    </>
  );
}
