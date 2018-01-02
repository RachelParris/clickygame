import React from 'react';

// This is actually a class Component
class Character extends React.Component {

  render () {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

export default Character;

/*
<img
alt={this.props.character.name}
src={this.props.character.image}
onClick={this.props.increaseScore} />
*/
