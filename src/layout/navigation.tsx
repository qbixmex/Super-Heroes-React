import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useAuthStore } from '../hooks/useAuthStore';

export function Navigation() {
  const { startLogout, user } = useAuthStore();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <div className="navbar-brand">Heroes Base</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/heroes">Heroes</Link>
            <Link className="nav-link" to="/users">Users</Link>
          </Nav>
          <Nav>
            <Navbar.Text className="me-3">
              { user?.name }
            </Navbar.Text>
            <Button variant="outline-light" onClick={ startLogout }>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
