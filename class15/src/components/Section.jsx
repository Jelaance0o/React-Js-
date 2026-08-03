import React, { useContext } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { ThemeDataContext } from '../context/ThemeContext'


const Section = () => {
    // const data = useContext(ThemeDataContext)
    const [theme,setTheme] = [ThemeDataContext]
  return (
    <div className='section'>
      <Section1></Section1>
      <Section2></Section2>
      <h1>{theme}</h1>
      
    </div>
  )
}

export default Section
