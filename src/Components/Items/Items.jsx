import React from 'react'
import './Items.css';
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='item'>
      <div className="img">
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      </div>
      <div className="box">
        <h2>{props.name}</h2>
        <span className="arrow">
          <img src={props.arrow} alt="" />
        </span>
      </div>
      <div className="price">
        <p>{props.title}</p>
      <p className='price-box'>{props.price}</p>
      </div>
      <div className="wishlist">
      <a href="" className='like'>{props.like}</a>
      </div>
    </div>
  )
}

export default Items
