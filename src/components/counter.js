import React from "react";

const counter = (props) => {
  return (
    <div>
      <button>{props.name} </button>
      <span>1</span>
      <button>{props.name1} </button>
    </div>
  );
};

export default counter;
