import { FormEvent } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { Hero } from '../../interfaces';
import { useForm, useDisplayModal } from '../hooks';

type Props = { title: string };

const initialForm: Hero = {
  heroName: '',
  realName: '',
  studio: '',
};

export function CreateHero({ title }: Props) {
  const { show, handleOpen, handleClose } = useDisplayModal();
  const { formData, setInputChange, clearData } = useForm<Hero>(initialForm);
  const { heroName, realName, studio } = formData;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    clearData();
    handleClose();
  };

  return (
    <>
      <button
        id="add-button"
        type="button"
        className="add-button"
        onClick={handleOpen}
      >
        <span className="bi bi-plus" />
      </button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="modalTitle" className="text-dark">{title}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body className="text-dark">
            <div className="text-dark mb-3">
              <label
                id="heroNameLabel"
                htmlFor="heroName"
                className="form-label"
              >
                Hero Name
              </label>
              <input
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
              <label id="studioLabel" htmlFor="realName" className="form-label">
                Studio
              </label>
              <input
                name="studio"
                data-testid="studio"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={studio}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
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
