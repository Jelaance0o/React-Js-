import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {

  //  const data =  useContext(ThemeDataContext)
    const [theme,setTheme] = useContext(ThemeDataContext)

  return (
    <div className='footer'>
      <h1>Footer {theme}</h1>
      <button
      onClick={()=>{
                if (theme == "light") {
                  setTheme("Dark");
                } else {
                  setTheme("light");
                }
      }}>Change Theme </button>
    </div>
  )
}

export default Footer
