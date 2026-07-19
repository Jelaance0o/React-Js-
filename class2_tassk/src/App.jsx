import React from 'react'
import Nav from './components/Nav'


const App = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1693853256515-4c2ec169ed50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Nav />
    </div>
  );
}

export default App
