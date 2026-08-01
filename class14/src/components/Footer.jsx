import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {
  const data = useContext(UserDataContext)
  return (
    <div className='m-20 w-full h-15 bg-amber-950'>
      <h1 >{data}</h1>
    </div>
  )
}

export default Footer
