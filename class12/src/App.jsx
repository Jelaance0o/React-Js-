import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Koder from './pages/Koder'
import Kodex from './pages/Kodex'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />}>
        
        <Route path='koder' element={<Koder/>} />
        <Route path='kodex' element={<Kodex/>} />

        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
