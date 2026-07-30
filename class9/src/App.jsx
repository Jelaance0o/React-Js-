import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import User from './comoponents/User'


const App = () => {

  const [allData, setAllData] = useState([])

  
  const getData = async ()=>
    {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setAllData(response.data)
      console.log(allData)
    }

    useEffect(()=>{
      getData()
    },[])
  return (
    <div>


      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          return (
            <div key={idx}>
              <User elem={elem}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
