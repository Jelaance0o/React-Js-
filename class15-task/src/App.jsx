import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  
  const [productData, setProductData] = useState([])

  const getdata = async ()=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    setProductData(response.data)
    console.log(productData)
  }

  useEffect(()=>{
    getdata()
  },[])
  
  return (
    <div className='allProducts'>

    {productData.map((elem,idx)=>{
      return (
          <a className='product' key={idx} href="">
            <img src={elem.image} alt="" />
            <h4>{elem.title}</h4>
          </a>
      );
    })}
    </div>
  )
}

export default App
