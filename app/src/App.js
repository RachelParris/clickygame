import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Game from './components/game';
import Footer from './components/footer';
import characters from "./characters.json";
import './styles/App.css';

// Class, Container, Stateful, Smart Component
class App extends React.Component {
  constructor () {
    super();

    // define initial state to the json array
    this.state = {
      characters
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="container">
          <Game characters={this.state.characters} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
