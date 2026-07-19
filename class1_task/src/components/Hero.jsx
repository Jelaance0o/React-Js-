import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="bg-[url('https://padelsouq.com/cdn/shop/articles/master-the-basics-of-padel-the-fundamentals-and-rules-padelsouq_900x.png?v=1727684182')] bg-cover bg-center h-200 p-2 rounded-3xl realtive flex items-center justify-center ">

        <div className=' w-300 flex flex-col items-center gap-4 '>

            <h1 className='text-6xl text-white text-center'>Unlesh Your Inner Champion Today.</h1>

            <h1 className='text-6xl text-white text-center'>All in One Place</h1>
            
            <p className='text-2xl text-white'>Join the ultimate</p>

            <button className='bg-blue-950 rounded-4xl text-white text-xl p-4 pt-2 pb-2'>Start Your Own Journey</button>
        </div>
        </div>
    </div>
  )
}

export default Hero
