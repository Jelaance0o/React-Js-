import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-amber-500 mb-3'>
      <h1> {props.user}</h1>
    </div>
  )
}

export default Card
