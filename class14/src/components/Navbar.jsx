import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext';
const Navbar = (props) => {
  
  console.log(props);
  const  data  = useContext(UserDataContext)
  
  
  return (
    <div className="w-full h-15 bg-amber-950">
      <h1 className="text-2xl">This is Navbar {data}</h1>
    </div>
  );
}

export default Navbar
