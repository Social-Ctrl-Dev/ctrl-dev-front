import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
const UserHeader = () => {
  const [infoUsuario, setInfoUsuario] = useState({});

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem('infoUsuario'));
    if (storedInfo) {
      setInfoUsuario(storedInfo);
    }
  }, []);

  return infoUsuario.name ? (<div>

    <Image src={infoUsuario.avatar} roundedCircle />
    <Link to={`/${infoUsuario.name}`}>Go to {infoUsuario.name}'s Profile</Link>
    </div>
  ) : (
    <h1>Not logged in</h1>
  );
};

export default UserHeader;