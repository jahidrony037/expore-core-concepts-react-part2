import React, { useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);

  const handleStart = () => {
    setInterval(() => {
      const newCount = count + 1;
      setCount(newCount);
      console.log("add", newCount);
    }, 1000);
  };

  return (
    <div
      style={{
        border: "1px solid red",
        padding: "10px",
        borderRadius: "20px",
        marginTop: "10px",
      }}
    >
      <h2>StopWatch</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleStart}>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
};

export default Stopwatch;
