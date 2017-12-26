import React from 'react'
import Character from './character';

class Game extends React.Component {
  render() {
    let crew = this.props.characters;
    crew = crew.map((item, index) => {
      return (
        <Character key={index}
        index={index}
        character={item} />
      )
    })
    return (
      <div>{crew}</div>
    )
  }
}

export default Game
