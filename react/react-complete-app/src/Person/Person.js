import React, { useState } from "react";

const Person = props => {
  const [name, setPersonName] = useState(props.name);
  const [age, setPersonAge] = useState(props.age);

  const doubleAge = () => {
    setPersonAge(age * 2);
  };

  /*
    "children" is a reserved attribute that grants access
    to any nodes inside the tag defined by the component.
  */
  return (
    <div>
      <p>
        I'm a {name} and I am <button onClick={doubleAge}>{age}</button> years
        old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
