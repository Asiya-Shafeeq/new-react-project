import React from 'react'
import './NewArrival.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import mark from '../Assets/Rectangle 21 (1).png'
import scroll_image from '../Assets/scroll_image'
function NewArrival() {

    const sliderLeft =() => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
  return (
    <div className='newarrival'>
        <div className="top">
            <div className="line">
                <img src={mark} alt="" />
            </div>
            <h1>New Arrivel</h1>
        </div>
        <div className="relative flex items-center">
        <MdKeyboardArrowLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderLeft} size={40} />
        <div id="slider" className='w-full h-full overflow-x-scroll scroll witespace-nowrap scroll-smooth scrollbar-hide'>
            <div className="flex items-center">
            {scroll_image.map((item) => (
                <img className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ' src={item.image} alt="" />
            ))}
        </div>
        </div>
        <MdOutlineKeyboardArrowRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderRight} size={40}/>
    </div>
        </div>
  )
}
export default NewArrival
