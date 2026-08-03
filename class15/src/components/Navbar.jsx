import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    // const data = useContext(ThemeDataContext)
    const [theme,setTheme] = useContext(ThemeDataContext)
    return (
    <div className='navbar'>
      <h1>Navbar - {theme}</h1>
      <button onClick={()=>{
        if(theme=='light'){
          setTheme('Dark')
        }
        else{
          setTheme('light')
        }

        
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar
