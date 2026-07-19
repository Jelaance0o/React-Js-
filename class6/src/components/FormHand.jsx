import React from 'react'

const FormHand = () => {

  const submitHandler= (e)=>{
    e.preventDefault()
      console.log("form submitted");
          
  }

  return (
    <div className='p-20'>
      <form className='flex gap-3' onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Name' className='border p-2'/>
        <button className='border p-1 rounded-xl'>Submit</button>
      </form>
    </div>
  ) 
}

export default FormHand
