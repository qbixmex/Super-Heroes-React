import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { onClearActiveHero } from '../store';

export function ShowHero() {
  const dispatch = useAppDispatch();
  const { activeHero } = useAppSelector((state) => state.heroes);
  const [show, setShow] = useState<boolean>(false);

  const closeModal = () => {
    setShow(false);
    dispatch(onClearActiveHero());
  };

  const openModal = () => {
    setShow(true);
  };

  useEffect(() => {
    (activeHero) && openModal();
    return () => setShow(false);
  }, [activeHero]);

  return (
    <Modal centered show={show} onHide={closeModal}>
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
