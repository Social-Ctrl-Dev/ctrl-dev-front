import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

//Import de estilos e imágenes
import logo from '../../img/LogoCDEV2.png';
import './NavbarCtrl.css';

//Servicios
import { UserServices } from '../../services';

//Componente
const NavbarCtrl: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState('home');
  const [scrolled, setScrolled] = React.useState(false);

  //Función para detectar el scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Función para actualizar el link activo
  const onUpdateActiveLink = (link: string) => {
    setActiveLink(link);
  };

  //Render
  return (
    <>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="CtrlDevLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'register' ? 'active navbar-link' : 'navbar-link'}
                onClick={UserServices.callRegisterUrl}
              >
                Sign Up
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/account"
                className={activeLink === 'cuenta' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('cuenta')}
              >
                Mi cuenta
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <Link to="/login">
                <button className="vvd">
                  <span>Login</span>
                </button>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default NavbarCtrl;
