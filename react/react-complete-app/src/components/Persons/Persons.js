import React from "react";
import Person from "../Person";
import ErrorBoundary from "../ErrorBoundary";

const Persons = props =>
  props.persons.map((person, idx) => {
    return (
      <ErrorBoundary key={idx}>
        <Person
          key={idx}
          uid={idx}
          name={person.name}
          age={person.age}
          changed={event => {
            props.changed(event, person.id);
          }}
          click={() => {
            props.clicked(idx);
          }}
        />
      </ErrorBoundary>
    );
  });

export default Persons;
