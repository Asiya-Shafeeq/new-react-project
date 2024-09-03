import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import SimilarProduct from '../Components/SimilarProduct/SimilarProduct';

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} =useParams();
    const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <ProductDisplay product={product}/>
      <SimilarProduct product={product}/>
    </div>
  )
}

export default Product
