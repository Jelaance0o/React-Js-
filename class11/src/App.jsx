import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Men from './pages/Men'
import Dynamic from './pages/Dynamic'
import Cohort1 from './pages/Cohort1'
import Details from './pages/Details'

const App = () => {
  return (
    <div className="bg-black w-screen h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />

        <Route path="/about/cohort1" element={<Cohort1 />} />
        <Route path="/about/:id" element={<Dynamic />} />
        <Route path="/about/courseID/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App
