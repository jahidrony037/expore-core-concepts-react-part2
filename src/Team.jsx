import React, { useState } from "react";

const Team = () => {
  const [count, setCount] = useState(11);
  const teamStyle = {
    border: "1px solid red",
    padding: "15px",
    margin: "15px",
    borderRadius: "15px",
  };

  const handleAdd = () => {
    setCount((preCount) => preCount + 1);
  };
  const handleReduce = () => {
    setCount((preCount) => preCount - 1);
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {count} </h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Team;
