import { useState } from 'react'
import { ReactLogo } from './components/logo/React/React';
import { ViteLogo } from './components/logo/Vite/Vite';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ViteLogo />
        <ReactLogo />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
