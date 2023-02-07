import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
const UserProfile = () => {
  const [infoUsuario, setInfoUsuario] = useState({});

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem('infoUsuario'));
    setInfoUsuario(storedInfo);

    console.log("testerino")
    console.log(infoUsuario.link_portfolio)
  }, []);

  return (
    <div>
      {Object.keys(infoUsuario).length > 0 && (
        <div>
          <Image src={infoUsuario.avatar} roundedCircle />
          <h2>User ID: {infoUsuario.id}</h2>
          <h2>User Name: {infoUsuario.name}</h2>
          <h2>User Email: {infoUsuario.email}</h2>
          <h2>Link de github: {infoUsuario.link_portfolio}</h2>
        </div>
      )}
    </div>
  );
};

export default UserProfile;