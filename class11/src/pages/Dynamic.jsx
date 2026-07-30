import React from 'react'
import { useParams } from 'react-router-dom';

const Dynamic = () => {
    const params =useParams()
    console.log(params.id)

  return (
    <div className="flex">
      <h1 className="justify-center text-center text-6xl underline font-bold">
        {params.id} Course Page
      </h1>
    </div>
  );
}

export default Dynamic
