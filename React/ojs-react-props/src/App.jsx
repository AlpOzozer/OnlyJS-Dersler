import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from "./User";

function App() {
  const user1 = {
    firstName: "Holly",
    lastName: "Sims",
    email: "holly.sims@example.com",
    birthDay: "7/7/1949",
    address: "5857 Harrison Ct",
    phone: "(529) 417-1654",
  };
  const user2 = {
    firstName: "Clinton",
    lastName: "Franlin",
    email: "clinton.franklin@example.com",
    birthDay: "12/6/1963",
    address: "273 Valley View Ln",
    phone: "(584) 739-6815",
  }

  return (
    <>
    <h1>React Props</h1>
    <User 
    firstName={user1.firstName}
    lastName={user1.lastName} 
    email={user1.email} 
    birthDay={user1.birthDay}
    address={user1.address}
    phone={user1.phone}
     />
    <User 
    firstName={user2.firstName}
    lastName={user2.lastName}
    email={user2.email}
    birthDay={user2.birthDay}
    address={user2.address}
    phone={user2.phone}
    />
    </>
  )
}

export default App
