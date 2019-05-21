import React, { Component } from 'react';
import './App.css';

// Components
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'

class App extends Component {
  state = {
    text: "",
    textLength: 0
  }

  updateLength = (text) => {
    this.setState({ text: text, textLength: text.length })
  }

  updateText = (index) => {
    let result = this.state.text.split('')
    result.splice(index, 1)
    let newText = result.join('')
    this.setState({ text: newText, textLength: newText.length })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li className="done">Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li className="done">Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li className="done">Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li className="done">Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li className="done">Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li className="done">When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" placeholder="Please input something here" onChange={(e) => { this.updateLength(e.target.value) }} />
        <p>
          The text you have input is {this.state.textLength} characters long.
        </p>
        <ValidationComponent textLength={this.state.textLength}></ValidationComponent>

        { this.state.text.split('').map((letter, idx) => {
          return(
          <CharComponent key={idx} position={idx} content={letter} clicked={(e) => { this.updateText(e.target.attributes.position.nodeValue) }}></CharComponent>
        )})}
        
      </div>
    );
  }
}

export default App;
