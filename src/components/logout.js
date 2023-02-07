import React from 'react';

const Logout = () => {
  
  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('infoUsuario');
    window.location.href = "/";
  };

  return (
    <button onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;