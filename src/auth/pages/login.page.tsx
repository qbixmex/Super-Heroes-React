import { FormEvent, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import { Login } from '../../interfaces';
import './login.css';

const loginFormFields: Login = {
  email: 'stan-lee@marvel.com',
  password: 'secret-password',
};

export function LoginPage() {
  const { errorMessage, startLogin } = useAuthStore();
  const { email, password, setInputChange } = useForm<Login>(loginFormFields);

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire({
        title: 'Oops',
        text: errorMessage.substring(7),
        icon: 'error',
      });
    }
  }, [errorMessage]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startLogin({ email, password });
  };

  return (
    <div className="login-page">
      <Card bg="light" text="dark" border="light">
        <Card.Body>
          <form id="login-form" onSubmit={ onSubmit }>
            <div className="text-dark mb-3">
              <label htmlFor="email" className="form-label">Email</label>
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
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                name="password"
                data-testid="password"
                type="password"
                className="form-control"
                autoComplete="off"
                onChange={setInputChange}
                value={password}
              />
            </div>
            <div className="d-flex justify-content-end">
              <Button type="submit" variant="secondary">Login</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
