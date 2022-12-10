import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../hooks';
import { onSetShowHeroProfile, onClearActiveHero } from '../../store';

export function ShowHero() {
  const dispatch = useAppDispatch();
  const { activeHero, showProfile } = useAppSelector((state) => state.heroes);
  const [show, setShow] = useState<boolean>(false);

  const closeModal = () => {
    setShow(false);
    dispatch(onClearActiveHero());
    dispatch(onSetShowHeroProfile());
  };

  const openModal = () => {
    setShow(true);
  };

  useEffect(() => {
    (showProfile) && openModal();
  }, [showProfile]);

  return (
    <Modal size="lg" show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle" className="text-dark">
          Hero Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Hero Name</th>
              <td>{ activeHero?.heroName ?? '' }</td>
            </tr>
            <tr>
              <th>Real Name</th>
              <td>{ activeHero?.realName ?? '' }</td>
            </tr>
            <tr>
              <th>Studio</th>
              <td>{ activeHero?.studio ?? '' }</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{ activeHero?.gender ?? '' }</td>
            </tr>
            <tr>
              <th className="align-middle">Image</th>
              <td>
                {
                  (activeHero?.image)
                    ? `${activeHero?.image.substring(0, 35)} ...`
                    : ''
                }
              </td>
            </tr>
            <tr>
              <th>Nationality</th>
              <td>{ activeHero?.nationality ?? '' }</td>
            </tr>
            <tr>
              <th className="align-middle">Powers</th>
              <td>{ activeHero?.powers ?? '' }</td>
            </tr>
          </thead>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={closeModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
