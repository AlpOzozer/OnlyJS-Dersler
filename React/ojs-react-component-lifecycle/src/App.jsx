import { useState } from "react";
import { useEffect } from "react";

function LifeCycleTestComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("component render edildi");
  }, []);

  useEffect(() => {
    console.log("component güncellendi");
  })

  useEffect(() => {
    return () => {
      console.log("component unmount oldu (render'dan çıktı)")
    }
  }, [])

  return (
    <>
      <div>Sayaç: {counter}</div>
      <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>
        Sayacı arttır
      </button>
    </>
    
  ) 
}

function App() {
  return (
    <>
      <h1>Component Lifecycle</h1>
      <LifeCycleTestComponent />
    </>
  )
}

export default App;
