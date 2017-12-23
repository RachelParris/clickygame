import React, { Component } from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Game from './components/game'
import Footer from './components/footer'

// Container Component
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
