import { FormEvent, useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from '../hooks';
import { onClearActiveUser, RootState, startSavingUser, startUpdatingUser } from '../../store';
import { User } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks';

const initialForm: User = {
  firstName: '',
  lastName: '',
  email: '',
  image: '',
  role: '',
};

export function FormModal() {
  const dispatch = useAppDispatch();
  const { activeUser, showProfile } = useAppSelector((state: RootState) => state.users);
  const [show, setShow] = useState<boolean>(false);

  const { formData, options, setFormData, setInputChange, clearData } = useForm<User>(initialForm);
  const { firstName, lastName, email, image, role } = formData;

  useEffect(() => {
    if (activeUser && !showProfile) {
      setFormData({ ...activeUser });
      setShow(true);
    }
  }, [activeUser, setFormData, showProfile]);

  const closeModal = () => {
    (activeUser) && dispatch(onClearActiveUser());
    clearData();
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeUser === null) {
      dispatch(startSavingUser(formData));
    } else {
      dispatch(startUpdatingUser(formData));
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
            { (!activeUser) ? 'Create User' : 'Update User' }
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body className="text-dark">
            <div className="text-dark mb-3">
              <label
                htmlFor="firstName"
                className="form-label"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                data-testid="firstName"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={firstName}
              />
            </div>
            <div className="text-dark mb-3">
              <label
                htmlFor="lastName"
                className="form-label"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                data-testid="lastName"
                type="text"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={lastName}
              />
            </div>
            <div className="text-dark mb-3">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                data-testid="email"
                type="email"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={email}
              />
            </div>
            <div className="text-dark mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
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
              <label htmlFor="image" className="form-label">
                Role
              </label>

              <select
                id="role"
                className="form-select"
                name="role"
                data-testid="role"
                aria-label="Select role"
                onChange={setInputChange}
                value={role}
              >
                {
                  options.map(option => (
                    <option key={ option.value } value={ option.value }>
                      { option.text }
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="text-dark mb-3">
              <label htmlFor="image" className="form-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                data-testid="password"
                type="password"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
              />
            </div>
            {
              (!activeUser) && (
                <div className="text-dark mb-3">
                  <label htmlFor="image" className="form-label">
                    Password Confirmation
                  </label>
                  <input
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    data-testid="passwordConfirmation"
                    type="password"
                    className="form-control"
                    autoComplete="off"
                    onChange={setInputChange}
                  />
                </div>
              )
            }
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
