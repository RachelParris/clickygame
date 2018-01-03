import React from 'react'
// import Character from './character';

class Game extends React.Component {
  render() {
    let crew = this.props.characters;
    crew = crew.map((item, index) => {
      return (
        <div className="card" key={index}>
          <img
          src={item.image}
          alt={item.name}
          id="checkItem"
          clicked="false"
          onClick={this.props.handleClick} />
        </div>
      )
    })
    return (
      <div className="game">{crew}</div>
    )
  }
}

export default Game;
