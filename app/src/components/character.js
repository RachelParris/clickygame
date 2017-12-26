import React from 'react';

// Presentational Component
const Character = (props) => {
  return (
    <div className="card">
      <h3 className="card-title">{props.character.name}</h3>
      <img alt={props.character.name} src={props.character.image} />
      <p className="card-text">{props.character.rank}</p>
    </div>
  );
}

export default Character;
