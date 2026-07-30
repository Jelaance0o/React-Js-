import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const params =  useParams()
  return (
    <div className="flex">
      <h1 className="justify-center text-center text-6xl underline font-bold">
    {params.courseID} Course Detail Page    
      </h1>
    </div>
  );
}

export default Details