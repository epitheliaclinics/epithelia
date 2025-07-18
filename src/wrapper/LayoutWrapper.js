'use client';

import { useModal } from '../context/ModalContext';
import ContactModal from '../components/ContactModal';

export default function LayoutWrapper({ children }) {
  const { isModalOpen, closeModal } = useModal();

  return (
    <>
      {children}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
