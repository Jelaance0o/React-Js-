import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UseEffect1 from './components/UseEffect1'

const App = () => {
  
  const [allPokemon, setAllPokemon] = useState([])

  const getData = async ()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    console.log(response.data.results)
    setAllPokemon(response.data.results)
  }

  useEffect(()=>{
    getData()
  },[])

  return <div>
    {allPokemon.map((elem,idx)=>{
      return <h1 key={idx}>{elem.name}</h1>
    })}
  </div>;
}

export default App
