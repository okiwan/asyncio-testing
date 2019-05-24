import React from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
  let btnClass = "";

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <p className={classes["App-intro"]}>Hi! I'm a React app.</p>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Names
      </button>
    </div>
  );
};

export default Cockpit;
