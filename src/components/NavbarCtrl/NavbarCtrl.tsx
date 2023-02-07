import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

//Import de estilos e imágenes
import logo from '../../img/LogoCDEV2.png';
import './NavbarCtrl.css';

//Servicios
import { UserServices } from '../../services';
import { info } from 'console';

//Componente
const NavbarCtrl: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState('home');
  const [scrolled, setScrolled] = React.useState(false);
  const [access_token, setAccessToken] = React.useState<string | null>(null);
  const [redirect, setRedirect] = React.useState(false);
  const [infoUser, setInfoUser] = React.useState(localStorage.getItem('infoUser'));

  const navigate = useNavigate();

  //Función para loguear con el token y redireccionar a la cuenta
  const loginWithToken = async (): Promise<void> => {
    if (redirect) {
      setRedirect(false);
      const user_data = await UserServices.loginWithToken(access_token as string);
      localStorage.setItem('infoUser', user_data);
      navigate('/mural');
    }
  };

  //Hook para obtener el token de la url y guardarlo en el localstorage
  React.useEffect(() => {
    const values = queryString.parse(window.location.hash);
    setAccessToken(values.access_token as string);
    localStorage.setItem('access_token', values.access_token as string);

    if (values.access_token) {
      setRedirect(true);
    }
  }, []);

  //Hook para loguear con el token y redireccionar a la cuenta (si se está registrando)
  React.useEffect(() => {
    loginWithToken();
  }, [redirect]);

  //Hook para detectar el scroll
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
  if (infoUser === null) {
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
  } else {
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
                  as={Link}
                  to="/mural"
                  className={activeLink === 'mural' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('mural')}
                >
                  Mural
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
                <button className="vvd" onClick={UserServices.userLogout}>
                  <span>Logout</span>
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Outlet />
        </div>
      </>
    );
  }
};

export default NavbarCtrl;
