import React from 'react';

// Presentational Component
const Character = (props) => {
  return (
    <div className="character">
      {props.index} -- {props.character.name}
    </div>
  );
}

export default Character;
