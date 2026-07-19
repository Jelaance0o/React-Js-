import React , {useState}from 'react'

const TwDatabind = () => {

    const [title, setTitle] = useState("")
    
    const [allusers, setallusers] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(title);
        setallusers([...allusers,title])
        setTitle('')
        console.log(allusers);        
    }


  return (
    <div>
        <form className='text-2xl flex gap-4' onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type="border p-4" placeholder='Enter Name' 
            value={title}
            required
            onChange={(e)=>
                {
                    setTitle(e.target.value)
                
            }} />
            <button className='p-4 border'>submit</button>
        </form>
        {allusers.map((elem)=>{
            return <h1>{elem}</h1>
        })}
    </div>
  )
}

export default TwDatabind
