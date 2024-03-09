import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("eaaa amre click marse");
  };

  const addFive = (num) => {
    alert(num + 5);
  };

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React Core Concepts 2</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={() => addFive(5)}>add five</button>

      <Counter handleAdd2={handleAdd} cnt={count} />
      <Team />
      <Users />
    </>
  );
}

export default App;
