import React from 'react'
import Card from './components/Card'

const App = () => {
  const cardData = {
    username: "Anubhav",
    role: "Engineer",
    email: "rjeelance",
    profile:
      "https://i.pinimg.com/736x/10/ac/18/10ac184a53db7f674acb8e7c10a3b927.jpg",
  };
  return (
    <div>
      <Card cardData={cardData}/>
    </div>
  )
}

export default App
