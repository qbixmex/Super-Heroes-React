import { useState } from 'react';

export function useDisplayModal() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleOnClick = () => setShow(true);

  return {
    show,
    handleClose,
    handleOnClick,
  };
}
