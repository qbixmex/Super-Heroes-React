import { FormEvent, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

type Props = { title: string };

export function CreateHero({ title }: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Submit Data
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
