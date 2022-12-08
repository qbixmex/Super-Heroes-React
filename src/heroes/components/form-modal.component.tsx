import { FormEvent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

import { useAppDispatch, useAppSelector, useForm } from '../hooks';
import {
  startSavingHero, RootState, onClearActiveHero, startUpdatingHero,
} from '../store';
import { Hero } from '../../interfaces';

const initialForm: Hero = {
  heroName: '',
  realName: '',
  studio: '',
  gender: '',
  image: '',
  nationality: '',
  powers: '',
};

export function FormModal() {
  const dispatch = useAppDispatch();
  const { activeHero, showProfile } = useAppSelector((state: RootState) => state.heroes);
  const [show, setShow] = useState<boolean>(false);

  const { formData, setFormData, setInputChange, clearData } = useForm<Hero>(initialForm);
  const { heroName, realName, studio, gender, image, nationality, powers } = formData;

  useEffect(() => {
    if (activeHero && !showProfile) {
      setFormData({ ...activeHero });
      setShow(true);
    }
  }, [activeHero, setFormData, showProfile]);

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
    clearData();
    setShow(false);
  };

  return (
    <>
      <button
        id="add-button"
        type="button"
        className="add-button"
        onClick={openModal}
      >
        <span className="bi bi-plus" />
      </button>
      <Modal centered show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title id="modalTitle" className="text-dark">
            { (!activeHero) ? 'Create Hero' : 'Update Hero' }
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
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
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={image}
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
            <Button variant="primary" onClick={closeModal}>
              <span className="bi bi-x-lg" />
            </Button>
            <Button type="submit" variant="success">
              <span className="bi bi-save" />
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
