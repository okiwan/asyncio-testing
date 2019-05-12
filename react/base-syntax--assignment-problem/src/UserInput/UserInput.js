import React from "react";
import "./UserInput.css";

const UserInput = props => {
  return (
    <div className="Input">
      <input
        type="text"
        onChange={props.changed}
        value={props.defaultUsername}
      />
    </div>
  );
};

export default UserInput;
