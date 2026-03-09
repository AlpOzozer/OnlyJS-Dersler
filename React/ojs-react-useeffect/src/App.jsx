import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  const multipliedCount = count * 10;

  useEffect(() => {
    console.log(multipliedCount);

    return () => {
      console.log("Temizlik yapıldı.")
    }
  }, [multipliedCount]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventistener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <h1>React - useEffect</h1>
      <div>
        <h2>Sayaç: {count}</h2>
        <div>
          <button onClick={() => setCount(count - 1)}>Azalt</button>
          <button onClick={() => setCount(count + 1)}>Arttır</button>
        </div>
        <input />
      </div>
      <div>Pencere boyutu: {windowWidth}</div>
    </>
  )
}

export default App;
