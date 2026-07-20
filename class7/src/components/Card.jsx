import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="w-70 h-80 bg-white rounded-2xl text-black p-3 text-center m-2">
        <img
          className="h-24 w-24 rounded-full object-cover mx-auto"
          src="https://i.pinimg.com/736x/53/02/a1/5302a151bd72bac25d6078d6709fab1b.jpg"
          alt="Profile"
        />

        <h1 className="mt-3 text-xl font-semibold text-blue-500">Jay Murari Das</h1>
        <h2 className='text-lg text-gray-500 font-medium'>Developer</h2>

        <p className='text-sm font-medium leading-tight py-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ut.
        </p>
        <button className='font-semibold bg-red-500 m-3 py-2 px-6 rounded-2xl text-white active:scale-95'>Remove</button>
      </div>
    </div>
  );
}

export default Card
