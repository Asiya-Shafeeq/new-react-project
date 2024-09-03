import React from 'react'
import './Limelight.css';
import marks from '../Assets/Rectangle 21 (1).png'
import limelight_product from '../Assets/Limelight_Product'
import Items from '../Items/Items'

const Limelight = () => {
  return (
    <div className='limelight'>
          <div className="top">
                <div className="line">
                    <img src={marks} alt="" />
                </div>
                <h1>Categories For Limelight</h1>
            </div>
            <div className="limelight-item">
                {limelight_product.map((item,i) => {
                    return <Items key={i} id={item.id} name={item.name} image={item.image} title={item.title} price={item.price} like={item.like}/>
                })}
            </div>
        </div>
  )
}

export default Limelight
