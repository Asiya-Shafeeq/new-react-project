import React from 'react'
import './Womens.css';
import line from '../Assets/Rectangle 21 (1).png';
import Items from '../Items/Items';
import womens_products from '../Assets/Womens_Products';

const Womens = () => {
    return (
        <div className='womens'>
          <div className="top">
                <div className="line">
                    <img src={line} alt="" />
                </div>
                <h1>Categories For Women</h1>
            </div>
            <div className="womens-item">
                {womens_products.map((item,i) => {
                    return <Items key={i} id={item.id} name={item.name} arrow={item.arrow} image={item.image} title={item.title}/>
                })}
            </div>
        </div>
      )
}

export default Womens
