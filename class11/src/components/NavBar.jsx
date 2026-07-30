import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="w-full text-center items-center bg-amber-700 flex justify-between px-10 py-6">
        <h1 className="text-4xl font-bold">NavBar</h1>
        <input type="text" placeholder='Search' className='border px-3 py-2' />
        <div className="flex gap-5 text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar
