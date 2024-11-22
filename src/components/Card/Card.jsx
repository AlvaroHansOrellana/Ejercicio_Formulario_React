import React from 'react';

const Card = ({ name, email, photoUrl, age }) => {
  return (
    <div>
      <img src={photoUrl} alt={name}/>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Edad: {age}</p>
    </div>
  );
};

export default Card;

