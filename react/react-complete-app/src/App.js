import React, { Component } from "react";
import logo from "./logo.svg";
import classes from "./App.module.css";
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
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 29 },
      { id: 2, name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  doubleAge = event => {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.persons[event.target.id].age *= 2;
    this.setState(newState);
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
    // Example of inline styles
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                key={idx}
                uid={idx}
                name={person.name}
                age={person.age}
                doubleAge={this.doubleAge}
                changed={event => {
                  this.switchNameHandler(event, person.id);
                }}
                click={() => {
                  this.deletePersonHandler(idx);
                }}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
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
        <p className={classes["App-intro"]}>Hi! I'm a React app.</p>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Names
        </button>
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
