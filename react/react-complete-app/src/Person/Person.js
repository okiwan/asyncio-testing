import React from "react";

const Person = props => {
  /*
    "children" is a reserved attribute that grants access
    to any nodes inside the tag defined by the component.
  */
  return (
    <div>
      <p>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
