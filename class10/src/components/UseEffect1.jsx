import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

  const [title, setTitle] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    console.log('useEffect is running...');
  },[counter])

  return (
    <div className='p-9'>
        <input value={title} type="text" onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <h1>{counter}</h1>
        <button onClick={()=>{
          setCounter( counter+1 )
        }}>Click</button>
    </div>
  )
}

export default UseEffect1
