import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
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
