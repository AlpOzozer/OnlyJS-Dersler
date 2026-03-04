import { useState } from "react";
import { ColorSelector } from "./ColorSelector";

const initialCount = 0;
const initialColor = "#ff0000";
const initialCounter = {
  value: initialCount,
  color: initialColor,
}

function App() {
  const [counter, setCounter] = useState(initialCounter);
  const { value, color } = counter;

  function decreaseCount() {
    if (value > 0) {
      setCounter((oldCounter) => ({ ...oldCounter, value: oldCounter.value - 1 }));
    }
  }

  function increaseCount() {
    setCounter((oldCounter) => ({
      ...oldCounter,
      value: oldCounter.value + 1,
    }));
  }


  function handleReset() {
    setCounter(initialCounter);
  }

  
  
  return (
    <>
      <h1>React Hooks</h1>
      <button onClick={decreaseCount}>Azalt</button>
      <span style={{ color: color }}>{value}</span>
      <button onClick={increaseCount}>Arttır</button>
      <div>
        <button onClick={handleReset}>Sıfırla</button>
      </div>
      <div>
        <ColorSelector setCounter={setCounter} colorIdentifier={"red"} />
        <ColorSelector setCounter={setCounter} colorIdentifier={"green"} />
        <ColorSelector setCounter={setCounter} colorIdentifier={"blue"} />
      </div>
    </>
  )
}

export default App;
