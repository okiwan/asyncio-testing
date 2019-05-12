import React, { useState } from "react";
import "./Person.css";

const Person = props => {
  /*
    "children" is a reserved attribute that grants access
    to any nodes inside the tag defined by the component.
  */
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and I am{" "}
        <button id={props.id} onClick={props.doubleAge}>
          {props.age}
        </button>{" "}
        years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.updateName} value={props.name} />
    </div>
  );
};

export default Person;
