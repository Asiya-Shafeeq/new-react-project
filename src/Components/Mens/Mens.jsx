import React from 'react'
import './Mens.css'
import mark from '../Assets/Rectangle 21 (1).png'
import Items from '../Items/Items'
import mens_products from '../Assets/Mens_products'

const Mens = () => {
  return (
    <div className='mens'>
      <div className="top">
            <div className="line">
                <img src={mark} alt="" />
            </div>
            <h1>Categories For Men</h1>
        </div>
        <div className="mens-item">
            {mens_products.map((item,i) => {
                return <Items key={i} id={item.id} name={item.name} arrow={item.arrow} image={item.image} title={item.title}/>
            })}
        </div>
    </div>
  )
}

export default Mens
