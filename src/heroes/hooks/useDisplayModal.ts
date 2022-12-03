import { useState } from 'react';
import { useAppDispatch } from './redux-hooks';
import { setActiveHero, clearActiveHero } from '../store';
import { Hero } from '../../interfaces';

export function useDisplayModal(initialForm: Hero) {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
    dispatch(clearActiveHero());
  };

  const handleOnClick = () => {
    setShow(true);
    dispatch(setActiveHero({ activeHero: initialForm }));
  };

  return {
    show,
    handleClose,
    handleOnClick,
  };
}
