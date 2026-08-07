import React, { createContext, useEffect, useState } from "react";
import { getdata } from "../api/productApi";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState([]);

  const setdata = async () => {
    const data = await getdata();
    console.log(data);
    setProductData(data);
  };
  
    
  useEffect(() => {
    setdata();
  }, []);

  return (
    <ProductDataContext.Provider value={productData}>
      {props.children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
