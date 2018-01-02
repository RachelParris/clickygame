import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Game from './components/game';
import Footer from './components/footer';
import characters from "./characters.json";
import './styles/App.css';

// Class, Container, Stateful, Smart Component
class App extends React.Component {
  constructor (props) {
    super(props);

    // define initial state to the json array
    this.state = {
      characters,
        score: 0,
        topScore: 0
    }
  }

  increaseScore() {
    this.setState({
      score: this.state.score + 1,
    })
    this.setState(function(state) {
      if (this.state.topScore === this.state.characters.length) {
      return {  topScore: this.state.characters.length }
      } else {
        return { topScore: this.state.topScore + 1 }
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar
        score={this.state.score}
        topScore={this.state.topScore} />
        <Header />
        <div className="container">
          <Game characters={this.state.characters}
          increaseScore={this.increaseScore.bind(this)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
