import React from 'react'
import './Container.css';
import conatiner_right_img from '../Assets/bg-5.jpg'
import left_img from '../Assets/bg-4.jpg';

function Container() {
  return (
    <div className='container'>
      <div className="container_left w-[600px]">
        <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
        <p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
        <button>Shop Now</button>
        {/* <img src={left_img} alt="" /> */}
      </div>
      <div className="conatiner_right">
        <img src={conatiner_right_img} alt="" />
      </div>
    </div>
  )
}

export default Container
