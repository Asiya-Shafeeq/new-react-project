import React from 'react'
import './Brands.css';
import barnd_1 from '../Assets/nike.jpg'
import barnd_2 from '../Assets/H&M.jpg';
import barnd_3 from '../Assets/levis.jpg';
import barnd_4 from '../Assets/USPA.jpg';
import barnd_5 from '../Assets/puma.jpg';

function Brands() {
  return (
    <div className='brands'>
      <div className="brand-box">
        <h1>Top Brands Deal</h1>
        <p>Up To <b>60%</b> off on brands</p>
        <div className="brand-item">
            <li>
                <a href="">
                    <img src={barnd_1} alt="" />
                </a>
            </li>
            <li>
                <a href="">
                    <img src={barnd_2} alt="" />
                </a>
            </li>
            <li>
                <a href="">
                    <img src={barnd_3} alt="" />
                </a>
            </li>
            <li>
                <a href="">
                    <img src={barnd_4} alt="" />
                </a>
            </li>
            <li>
                <a href="">
                    <img src={barnd_5} alt="" />
                </a>
            </li>
        </div>
      </div>
    </div>
  )
}

export default Brands
