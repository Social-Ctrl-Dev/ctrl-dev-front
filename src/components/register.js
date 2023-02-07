import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

const Register = () => {
  const [token, setToken] = useState('');
  const [infoUsuario, setInfoUsuario] = useState({});

  useEffect(() => {
    const values = queryString.parse(window.location.hash);
    setToken(values.access_token);
    localStorage.setItem('token', values.access_token);
  }, []);

  useEffect(() => {

      
    const obtenerInfoUsuario = async () => {
      try {
        const respuesta = await axios.post('https://ctrl-dev-back-test.up.railway.app/auth/login', {
                }, {
        headers: {
            Authorization: `Bearer ${token}`
            }
        });
        console.log(respuesta.data.result)
        setInfoUsuario(respuesta.data.result);
        localStorage.setItem('infoUsuario', JSON.stringify(respuesta.data.result));
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      obtenerInfoUsuario();
    }
  }, [token]);

  return (
    <div>
      {token ? (
        <div>
          <h2>Token: {token}</h2>
          <h2>Información del usuario: {JSON.stringify(infoUsuario)}</h2>
        </div>
      ) : (
        <h2>Por favor inicie sesión para obtener el token y la información del usuario</h2>
      )}
    </div>
  );
};

export default Register;