import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="Output">
      <p className="label">Selected username...</p>
      <p className="value">{props.username}</p>
    </div>
  );
};

export default UserOutput;
