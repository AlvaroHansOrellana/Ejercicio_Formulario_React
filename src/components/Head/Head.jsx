import React from 'react';
import { useEmail } from '../context/EmailContext';

const Head = () => {
  const { email } = useEmail();

  return (
    <header>
      <h2>Formulario de Registro</h2>
      {email && <p>Correo registrado!: {email}</p>}
    </header>
  );
};

export default Head;

