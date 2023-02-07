import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import './Login.css';
import { useNavigate } from 'react-router-dom';

//Services
import { UserServices } from '../../services';

export default function Login() {
  const [infoUser, setInfoUser] = React.useState(localStorage.getItem('infoUser'));
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  if (infoUser) {
    window.location.assign('/account');
    return (
      <Container className="container-login">
        <p>Redireccionando...</p>
      </Container>
    );
  } else {
    return (
      <Container className="container-login">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu información con nadie.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordarme" />
          </Form.Group>
          <Form.Group className="buttons-container justify-content-between">
            <Button
              variant="dark"
              onClick={() => {
                const loginsuccess =
                  (UserServices.loginWithEmail(values.email, values.password) as unknown) ||
                  'error';
                if (loginsuccess === 'ok') {
                  navigate('/account');
                }
              }}
            >
              Login
            </Button>
            <Button variant="secondary" onClick={UserServices.callRegisterUrl}>
              Iniciar con Github
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
