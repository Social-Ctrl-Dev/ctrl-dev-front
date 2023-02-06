import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterC = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <h5 className="font-weight-bold">Ctrl-Dev</h5>
            <p className="text-muted">
            Una nueva red de desarrolladores.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5 className="font-weight-bold">Contáctanos</h5>
            <p className="text-muted">
              <br />
             
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5 className="font-weight-bold">Síguenos</h5>
            <a href="#">
              <i className="fab fa-facebook fa-2x mx-3"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter fa-2x mx-3"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x mx-3"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterC;