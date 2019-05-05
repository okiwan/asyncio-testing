import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">Hi! I'm a React app.</p>
    //   </div>
    // );

    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "This is a test!")
    );
  }
}

export default App;
