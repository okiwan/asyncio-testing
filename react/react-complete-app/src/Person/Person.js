import React, { useState } from "react";
import "./Person.css";
import Radium from 'radium';

const Person = props => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  }
  /*
    "children" is a reserved attribute that grants access
    to any nodes inside the tag defined by the component.
  */
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm a {props.name} and I am{" "}
        <button id={props.uid} onClick={props.doubleAge}>
          {props.age}
        </button>{" "}
        years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
