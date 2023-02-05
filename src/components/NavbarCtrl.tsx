import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../static/styles/navbar.css';

const NavbarCtrl: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={``} alt="CtrlDevLogo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#registro">Registro</Nav.Link>
            <Nav.Link href="#cuenta">Mi cuenta</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="github-icon">
              <a href="#">
                <img alt="Github repository" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCtrl;
