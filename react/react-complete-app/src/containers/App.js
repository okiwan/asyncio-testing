import React, { Component } from "react";
import logo from "../assets/logo.svg";
import classes from "./App.module.css";
import Persons from "../components/Persons";
import Cockpit from "../components/Cockpit";

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
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 29 },
      { id: 2, name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  switchNameHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = personIndex => {
    // Another way to do what we are doing below: const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.switchNameHandler}
          />
        </div>
      );
    }

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
      <div className={classes.App}>
        <header className={classes["App-header"]}>
          <img src={logo} className={classes["App-logo"]} alt="logo" />
          <h1 className={classes["App-title"]}>Welcome to React</h1>
        </header>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
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
