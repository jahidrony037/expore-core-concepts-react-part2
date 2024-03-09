import { useState } from "react";

const Counter = ({ handleAdd2, cnt }) => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1 + cnt;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const style = {
    border: "1px solid red",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={style}>
      <h2>Count : {count} || {cnt}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
      <button onClick={() => handleAdd2()}>Add Another</button>
    </div>
  );
};

export default Counter;
