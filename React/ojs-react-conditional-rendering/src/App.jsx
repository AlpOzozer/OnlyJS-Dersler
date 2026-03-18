import { ShoppingList } from "./ShoppingList";
import { UserMenu } from "./UserMenu";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Uğur");

  return (
    <>
      <h1>React - Conditional Rendering</h1>
      <UserMenu setName={setName} name={name} />
      <ShoppingList />
    </>
  )
}

export default App
