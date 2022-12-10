import { FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useForm } from '../../hooks';
import './login.css';

type Login = {
  email: string;
  password: string;
};

const initialForm: Login = {
  email: '',
  password: '',
};

export function LoginPage() {
  const { formData, setInputChange } = useForm<Login>(initialForm);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-page">
      <Card bg="light" text="dark" border="light">
        <Card.Body>
          <form onSubmit={ onSubmit }>
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
                value={formData.email}
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
                value={formData.password}
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
