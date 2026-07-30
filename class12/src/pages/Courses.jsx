import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <div className="live">
            <p>SALE IS LIVE!!</p>
            <p>SALE IS LIVE!!</p>
            <p>SALE IS LIVE!!</p>
            <p>SALE IS LIVE!!</p>
            <p>SALE IS LIVE!!</p>
            <p>SALE IS LIVE!!</p>
            <p>SALE IS LIVE!!</p>
            <p>SALE IS LIVE!!</p>
        </div>
     <h1>Courses</h1>
     
     <Outlet />
    </div>
  )
}

export default Courses
