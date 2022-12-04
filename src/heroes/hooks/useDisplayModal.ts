import { useState } from 'react';

export function useDisplayModal() {
  const [show, setShow] = useState<boolean>(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  return {
    show,
    closeModal,
    openModal,
  };
}
