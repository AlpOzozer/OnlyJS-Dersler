function HelloText() {
  return <h1>Hello World</h1>
}

function TestText() {
  return (
    <p>Bu bir deneme yazısıdır</p>
  )
}

function List() {
  return (
     <ul>
      <li>ilk eleman</li>
      <li>ikinci eleman</li>
      <li>üçüncü eleman</li>
     </ul>
  )
}

function App() {
  function handleButtonClick() {
    console.log("Butona tıklandı");
  }

  const num = 5;

  return (
   <>
     <HelloText />
     <TestText />
     <List />
     <List />
     <button className="btn-primary" onClick={handleButtonClick}>Bana tıkla {num} </button>
     <label htmlFor="first_name">asdasdas</label>
     <input readOnly name="fkddfg" value="deneme"></input>
   </>
  )
}

export default App;
