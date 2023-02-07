import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Posts } from '../../components/Posts';
import NewPost from '../../components/NewPost.js';

//CSS y Bootstrap
import { Container } from 'react-bootstrap';
import './Mural.css';

export default function ErrorPage() {
  return (
    <Container className="container-mural">
      <div className="prefix-space"></div>
      <div>
        <NewPost />
        <Posts />
      </div>
    </Container>
  );
}
