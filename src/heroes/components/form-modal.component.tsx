import { FormEvent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import {
  startSavingHero, RootState, onClearActiveHero, startUpdatingHero,
} from '../../store';
import { Hero } from '../../interfaces';
import { useAppDispatch, useAppSelector, useForm } from '../../hooks';

import './form-modal.css';

const initialForm: Hero = {
  heroName: '',
  realName: '',
  studio: '',
  gender: '',
  image: null,
  nationality: '',
  powers: '',
};

export function FormModal() {
  const dispatch = useAppDispatch();
  const {
    activeHero,
    showProfile,
    formSubmitted,
  } = useAppSelector((state: RootState) => state.heroes);
  const [show, setShow] = useState<boolean>(false);

  const { formData, setFormData, setInputChange, clearData } = useForm<Hero>(initialForm);
  const { heroName, realName, studio, gender, nationality, powers } = formData;

  useEffect(() => {
    if (activeHero && !showProfile) {
      setFormData({ ...activeHero });
      setShow(true);
    }
  }, [activeHero, setFormData, showProfile]);

  useEffect(() => {
    if (formSubmitted) {
      clearData();
      setShow(false);
    }
  }, [formSubmitted]);

  const closeModal = () => {
    (activeHero) && dispatch(onClearActiveHero());
    clearData();
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeHero === null) {
      dispatch(startSavingHero(formData));
    } else {
      dispatch(startUpdatingHero(formData));
    }
  };

  return (
    <>
      <div className="add-button-container">
        <button
          data-testid="add-button"
          type="button"
          className="add-button"
          onClick={openModal}
        >
          <span className="bi bi-plus" />
        </button>
      </div>

      <Modal data-testid="modal" centered show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title data-testid="modal-title" className="text-dark">
            { (!activeHero) ? 'Create Hero' : 'Update Hero' }
          </Modal.Title>
        </Modal.Header>
        <form data-testid="form" onSubmit={handleSubmit} encType="multipart/form-data">
          <Modal.Body className="text-dark">
            <div className="text-dark mb-3">
              <label
                htmlFor="heroName"
                className="form-label"
              >
                Hero Name
              </label>
              <input
                id="heroName"
                name="heroName"
                data-testid="heroName"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={heroName}
              />
            </div>
            <div className="text-dark mb-3">
              <label
                htmlFor="realName"
                className="form-label"
              >
                Real Name
              </label>
              <input
                id="realName"
                name="realName"
                data-testid="realName"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={realName}
              />
            </div>
            <div className="text-dark mb-3">
              <label
                htmlFor="studio"
                className="form-label"
              >
                Studio
              </label>
              <input
                id="studio"
                name="studio"
                data-testid="studio"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={studio}
              />
            </div>
            <div className="text-dark mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input
                id="gender"
                name="gender"
                data-testid="gender"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={gender}
              />
            </div>
            <div className="text-dark mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                id="image"
                name="image"
                data-testid="image"
                type="file"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
              />
            </div>
            <div className="text-dark mb-3">
              <label htmlFor="nationality" className="form-label">
                Nationality
              </label>
              <input
                id="nationality"
                name="nationality"
                data-testid="nationality"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={nationality}
              />
            </div>
            <div className="text-dark mb-3">
              <label htmlFor="powers" className="form-label">
                Powers
              </label>
              <input
                id="powers"
                name="powers"
                data-testid="powers"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={powers}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button data-testid="close-btn" variant="primary" onClick={closeModal}>
              <span className="bi bi-x-lg" />
            </Button>
            <Button data-testid="submit-btn" type="submit" variant="success">
              <span className="bi bi-save" />
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
