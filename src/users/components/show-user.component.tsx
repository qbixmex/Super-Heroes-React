import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { onSetShowUserProfile, onClearActiveUser } from '../../store';

export function ShowUser() {
  const dispatch = useAppDispatch();
  const { activeUser, showProfile } = useAppSelector((state) => state.users);
  const [show, setShow] = useState<boolean>(false);

  const closeModal = () => {
    setShow(false);
    dispatch(onClearActiveUser());
    dispatch(onSetShowUserProfile());
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
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{ activeUser?.firstName ?? '' }</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{ activeUser?.lastName ?? '' }</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{ activeUser?.email ?? '' }</td>
            </tr>
            <tr>
              <th className="align-middle">Image</th>
              <td>
                {
                  (activeUser?.image)
                    ? `${activeUser?.image.substring(0, 35)} ...`
                    : ''
                }
              </td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{ activeUser?.role ?? '' }</td>
            </tr>
          </tbody>
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
