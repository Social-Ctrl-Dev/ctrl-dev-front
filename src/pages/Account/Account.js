import { Container, Image } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './Account.css';

const Account = () => {
  const [infoUser, setInfoUser] = useState(localStorage.getItem('infoUser'));

  useEffect(() => {
    const storedInfo = localStorage.getItem('infoUser');
    setInfoUser(storedInfo);

    console.log('testerino');
    console.log(infoUser);
  }, []);

  return (
    <Container className="container-account">
      <div>Hola</div>
      <div>{infoUser}</div>
    </Container>
  );
};

export default Account;
