import React from 'react';


const Navbar = (props) => {
  return (
    <div className="navbar">
      <p><strong>Clicky Game</strong></p>
      <p>Click an image to begin!</p>
      <p>Score: {props.score} | Top Score: {props.topScore}</p>
    </div>
  )
}

export default Navbar;
