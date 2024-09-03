import React from 'react'
import './SimilarProduct.css'
import Items from '../Items/Items'
import products from '../Assets/Similar-Product'
import mark from '../Assets/Rectangle 21 (1).png'
const SimilarProduct = () => {
  return (
    <div className='similar-product'>
      <div className="top">
            <div className="line">
                <img src={mark} alt="" />
            </div>
            <h1>Similar Products</h1>
        </div>
        <div className="similar-product-item">
            {products.map((item,i) => {
                return <Items key={i} id={item.id} name={item.name} arrow={item.arrow} image={item.image} title={item.title} price={item.price} like={item.like}/>
            })}
        </div>
    </div>
  )
}

export default SimilarProduct
