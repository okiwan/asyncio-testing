import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person";

class App extends Component {
  // Only available on components created as
  // an extension from Components (that is, only
  // with stated-defined components). For function-defined
  // components, we will use hooks.
  //
  // In case state changes, it will force the component
  // to be re-rendered. The same should be said from "props".
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  };

  doubleAge = event => {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.persons[event.target.id].age *= 2;
    this.setState(newState);
  };

  switchNameHandler = newName => {
    // console.log("Switch was clicked!");
    // DO NOT DO THIS: this.state.persons[0].name = "Maximillian";
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.persons[0].name = newName;
    this.setState(newState);
  };
  render() {
    // Remember always to wrap the JSX of a component
    // inside one root HTML enlement that englobes
    // the rest. This makes sense since we are developing
    // fully contained independent elements. Also it is
    // quite useful when we have to manipulate the components,
    // for instance, when we have to apply CSS.
    //
    // Being said so, the two main restrictions when writing
    // JSX: 1) all HTML elements must be enclosed one root element
    // (tipically a DIV); 2) we cannot use attribute name "class"
    // as parte of an HTML tag to specify the class, but instead
    // we need to use "className". This is a limitation due to
    // the fact the JavaScript has "class" as a reserved word.
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Hi! I'm a React app.</p>
        <button onClick={this.switchNameHandler.bind(this, "Maximilian")}>
          Switch Name
        </button>
        <Person
          id="0"
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          doubleAge={this.doubleAge}
        />
        <Person
          id="1"
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("Max")}
          doubleAge={this.doubleAge}
        >
          My Hobbies: Racing
        </Person>
        <Person
          id="2"
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          doubleAge={this.doubleAge}
        />
      </div>
    );

    /*
    This is what the code above would look like once React
    translates it into plain JavaScript.
    
    return React.createElement(
     "div",
     { className: "App" },
     React.createElement("h1", null, "This is a test!")
    );
    */
  }
}

export default App;
