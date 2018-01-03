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
  checkIfSelected(event) {
    // capture which element was clicked in the array
    let capture = document.getElementById("checkItem").getAttribute("clicked");

    // toggle attribute clicked as "true" or "false"
    if (capture === "true") {
      capture = "false"
      this.setState({score: 0})
      console.log("else: ", capture)
    } else if (capture === "false") {
      capture = "true"
      this.setState({ score: this.state.score + 1 })
      console.log("New capture value: ", capture)
    }
  }

  handleScore() {
    this.setState(function(state) {
      if (this.state.topScore === this.state.characters.length) {
      return {  topScore: this.state.characters.length }
      } else {
        return { topScore: this.state.topScore + 1 }
      }
    })
  }

  handleClick(index) {
    this.checkIfSelected(index);
    this.handleScore();
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
          handleClick={this.handleClick.bind(this)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
/*
var InputComponent = React.createClass({
    render: function() {
        var required = true;
        var disabled = false;

        return (
            <input type="text" disabled={disabled} required={required} />
        );
    }
});
--------------------
var inputProps = {
  value: 'foo',
  onChange: this.handleChange
};

if (condition) inputProps.disabled = true;
Render with spread, optionally passing other props also.

<input
    value="this is overridden by inputProps"
    {...inputProps}
    onChange={overridesInputProps}
 />
*/


/*
componentDidMount() {
  const charArr = this.state.characters;
  charArr.map(function (item, index) {
    return console.log(index)
  })

}

class Test extends React.Component {
  onClick(index) {
    func1();
    func2();
  }
  render() {
    return (
      <a href="#" onClick={this.onClick}>Test Link</a>
    )}
  }
  <a href="#" onClick={(event) => { func1(); func2();}}>Test Link</a>
*/
