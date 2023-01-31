import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarCtrl: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ctrl Dev</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
};

export default NavbarCtrl;

