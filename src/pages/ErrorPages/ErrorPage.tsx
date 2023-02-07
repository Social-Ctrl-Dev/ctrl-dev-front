import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

//CSS y Bootstrap
import './ErrorPage.css';
import { Container } from 'react-bootstrap';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Container className="error-page">
      <div className="prefix-space"></div>
      <h1 className="error-title">Oops!</h1>
      <p className="error-text">Sorry, an unexpected error has occurred.</p>
      <p className="error-text">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="return-btn">
          <span>Return Ctrl+dev</span>
        </button>
      </Link>
    </Container>
  );
}
