import React from 'react'
import Card from './components/Card'

const App = () => {

    const arr = ['Anshu','Dimpee','Som','Gober','Som','Gober','Som','Gober']
  return (
    <div className='p-3 h-screen text-black'>
      {arr.map(function(elem){
        return <Card user = {elem}/>
      })}
    </div>
  )
}

export default App
