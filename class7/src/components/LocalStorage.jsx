import React from 'react'
import { useState } from 'react'

const LocalStorage = () => {
  const [userName, setUserName] = useState('')
  const [imageURL, setImageURL] = useState('');
  const [userRole, setUserRole] = useState('')
  const [userDesc, setUserDesc] = useState('');
  const [allUsers, setAllUsers] = useState([])

  const submitHandler =  (e)=>{
    e.preventDefault()
  
    setAllUsers([...allUsers, { userName, imageURL, userRole, userDesc }]);
    
    setUserName('')
    setImageURL('')
    setUserRole('')
    setUserDesc('')
  } 
  const deleteHandler = (idx)=>{
    const oldUsers = [...allUsers]
    oldUsers.splice(idx,1)
    setAllUsers(oldUsers)
    
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap gap-5 p-4"
      >
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
          type="text"
          className="border rounded-xl w-[45%] p-2"
          placeholder="Enter Name"
        />

        <input
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
          value={imageURL}
          type="text"
          className=" border rounded-xl w-[45%] p-2"
          placeholder="Image URL"
        />

        <input
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          value={userRole}
          type="text"
          className=" border rounded-xl w-[45%] p-2"
          placeholder="Enter role"
        />

        <input
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          value={userDesc}
          type="text"
          className=" border rounded-xl w-[45%] p-2"
          placeholder="Enter Description"
        />

        <button className="bg-emerald-400 py-2 px-6 rounded-2xl w-[98%] active:scale-95 cursor-pointer font-semibold">
          Create User
        </button>
      </form>

      <div className='flex gap-3 flex-wrap'>
            {allUsers.map((elem,idx)=>{
              return (
                  <div className="w-70 h-80 bg-white rounded-2xl text-black p-3 text-center m-2">
                    <img
                      className="h-24 w-24 rounded-full object-cover mx-auto"
                      src={elem.imageURL}
                      alt="Profile"
                    />

                    <h1 className="mt-3 text-xl font-semibold text-blue-500">
                      {elem.userName}
                    </h1>
                    <h2 className="text-lg text-gray-500 font-medium">
                      {elem.userRole}
                    </h2>

                    <p className="text-sm font-medium leading-tight py-2">
                      {elem.userDesc}
                    </p>
                    <button 
                    onClick={(idx)=>{
                      deleteHandler(idx)
                    }}
                    className="font-semibold bg-red-500 m-3 py-2 px-6 rounded-2xl text-white active:scale-95">
                      Remove
                    </button>
                  </div>
              );
            })}
              </div>
    </div>
  );
}

export default LocalStorage
