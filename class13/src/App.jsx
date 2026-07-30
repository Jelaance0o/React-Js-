import React from 'react'
import { useState } from 'react'
import Nav from './Nav';

const App = () => {

  const [Theme, setTheme] = useState("White");

  const changeTheme = (newTheme) => {
    setTheme(newTheme)

  };

  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Nav changeTheme={changeTheme} />
    </div>
  )
}

export default App
