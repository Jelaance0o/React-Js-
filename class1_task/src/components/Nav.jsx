import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className='w-full h-25 text-4xl flex  items-center justify-between'>
        <div>
          <h1>Horizon Courts</h1>
          </div>

        <div className='text-xl flex justify-between gap-14 text-black'>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Coches</a>
          <a href="#">Events</a>
          <a href="#">Contacts</a>
        </div>

        <div>
          <button className='bg-blue-950 rounded-4xl text-white text-xl p-4 pt-2 pb-2'>Book Now </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
