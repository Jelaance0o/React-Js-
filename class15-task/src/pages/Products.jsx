import React, { useContext } from 'react'
import { ProductDataContext } from "../context/ProductContext";
import { Link, useParams } from 'react-router-dom';
Link
const Products = () => {
    const productData = useContext(ProductDataContext)
    console.log(productData);

    const param = useParams()
    console.log(param)

    let renderData = 'Loading....'
     if(renderData.length>0){
      renderData = productData.map((elem, idx) => (
        <Link className="product" key={idx} to={`/products/${elem.id}`}>
          <img src={elem.image} alt="" />
          <h4>{elem.title}</h4>
        </Link>
      ));
     }
    
 return (
   <div className="allProducts">
     {renderData}
   </div>
 );
}

export default Products
