import React from 'react'
import Man from './componentes/Man'
import Women from './componentes/Women'

const App = () => {

  const user1 = {
    name:'Jelaance',
    gender:'male',
    age:12
  }
  const user2 = {
    name:'Dimpee',
    gender:'Female',
    age:19
  }

  return (
    <div className='p-20'>
      <h1>{user2.gender === 'male'?(user1.age === 19?<Man />:<Women />):<Women />}</h1>
    </div>
  )
}

export default App
