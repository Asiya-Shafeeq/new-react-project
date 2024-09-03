import React from 'react'
import './Home.css'
import arrow from '../Assets/left-arrow-bold.svg'

const Home = () => {
  return (
    <div className='home'>
        <div className="arrow">
            <img src={arrow} alt="" />
        </div>
      <div className="content">
        <div className="text">
            <h3>T-Shirt / Tops</h3>
            <h1>Summer<br/>Value Pack</h1>
            <h3>Cool / colorful / comfy</h3>
            <button>Shop Now</button>
        </div>
      </div>
      <div className="right_arrow">
            <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default Home
