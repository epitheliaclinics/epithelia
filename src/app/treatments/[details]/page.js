'use client';

import { useParams } from 'next/navigation';
import solutionData, { careData } from '../../../data/treatmentsData';
import TreatmentDetails from '../components/TreatmentDetails';
import CareInstructions from '../components/CareInstructions';
import FaqAccordion from '../../../components/FaqAccordion';
import ConsultationForm from '../../../components/ConsultationForm';
import { faqData } from '../../../data/faqData';
import { consultationConfigs } from '../../../data/consultationConfigs';

export default function SolutionPage() {
  const { details } = useParams();
  const data = solutionData[details];
  const careContent = careData[details];
  const faqContent = faqData[details];

  if (!data || !careContent || !faqContent) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Not Found
      </div>
    );
  }

  return (
    <>
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
