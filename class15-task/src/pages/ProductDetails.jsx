import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ProductDataContext } from '../context/ProductContext';

const ProductDetails = () => {

  const productData = useContext(ProductDataContext)

  const {productId} = useParams()

 
  let selectedItem = '';

  if (productData.length > 0) {
    selectedItem = productData.find((elem) => elem.id == productId);
  }
    
  return (
    <div>
      <h1>{selectedItem.title}</h1>
      <img src={selectedItem.image} alt="" />
      <h3>Price : {selectedItem.price}</h3>
    </div>
  );
}
export default ProductDetails
