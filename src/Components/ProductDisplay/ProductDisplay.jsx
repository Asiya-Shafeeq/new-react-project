import React, { useState } from 'react';
import './ProductDisplay.css';
import { MdOutlineKeyboardArrowRight, MdPayment, MdOutlineLocalShipping } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong, FaRetweet } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { PiTShirt } from "react-icons/pi";
import star from '../Assets/star.svg';
import line from '../Assets/Rectangle 21 (1).png';

const ProductDisplay = (props) => {
    const { product } = props;
    const [menu, setMenu] = useState('description');

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='productdisplay'>
            <div className="product-container">
                <div className="productdisplay-right">
                    <div className="productdisplay-img-list">
                    <div className="list-img">
                    <a href=""><img src={product.image} alt='' /></a>
                    <a href=""><img src={product.image} alt='' /></a>
                    <a href=""><img src={product.image} alt='' /></a>
                </div>
                    </div>
                    <div className="productdisplay-img">
                        <img className='main-img' src={product.image} alt="Main product" />
                    </div>
                </div>
                <div className="productdisplay-left">
                    <div className="breadcrumb">
                        Shop <MdOutlineKeyboardArrowRight /> {product.category} <MdOutlineKeyboardArrowRight /> {product.name}
                    </div>
                    <div className="heading">
                        <h1>{product.heading}</h1>
                    </div>
                    <div className="comment-box">
                        <div className="star">
                            {[...Array(5)].map((_, i) => (
                                <a key={i} href="#"><img src={star} alt="Star" /></a>
                            ))}
                        </div>
                        <small>3.5</small>
                        <div className="comment">
                            <a href="#" className="image"><BiCommentDetail /></a>
                            <p>120 comments</p>
                        </div>
                    </div>
                    <div className="size-box">
                        <div className="sizes">
                            <h6>Select Sizes</h6>
                            <span className="guide">
                                <h6 className='text'>Size Guide</h6>
                                <a href="#" className='arrow-img'><FaArrowRightLong /></a>
                            </span>
                        </div>
                        <div className="size-name">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <a key={size} href="#">{size}</a>
                            ))}
                        </div>
                    </div>
                    <div className="colours">
                        <h6>Colours Available</h6>
                        <div className="color-box">
                            {['black', 'yellow', 'pink', 'red'].map((color) => (
                                <li key={color}><a href="#" className={color}></a></li>
                            ))}
                        </div>
                    </div>
                    <div className="buttons">
                        <button><a href="#" className='button-color'><FiShoppingCart /> Add To Cart</a></button>
                        <a className='price'>$ 63.00</a>
                    </div>
                    <hr className="line" />
                    <div className="shipping">
                        {[
                            { icon: <MdPayment />, text: "Secure Payment" },
                            { icon: <PiTShirt />, text: "Size & Fit" },
                            { icon: <MdOutlineLocalShipping />, text: "Free Shipping" },
                            { icon: <FaRetweet />, text: "Free Shipping & Returns" },
                        ].map((item, index) => (
                            <li key={index}>
                                <a href="#" className='icon'>{item.icon}</a>
                                <a href="#" className='text'>{item.text}</a>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
            <div className="product-description">
                <div className="description-left">
                    <div className="top">
                        <div className="line">
                            <img src={line} alt="Line divider" />
                        </div>
                        <h1>Product Description</h1>
                    </div>
                    <div className="description-heading">
                        <li><a href="#" className='heading' onClick={() => setMenu('description')}><h6>Description {menu === 'description' ? <hr /> : <></>}</h6></a></li>
                        <li>
                            <a href="#" className='heading' onClick={() => setMenu('user comment')}><h6>User Comments {menu === 'user comment' ? <hr /> : <></>}</h6></a>
                            <a href="#" className="number">21</a>
                        </li>
                        <li>
                            <a href="#" className='heading' onClick={() => setMenu('question')}><h6>Question & Answer {menu === 'question' ? <hr /> : <></>}</h6></a>
                            <a href="#" className="ans-number">4</a>
                        </li>
                    </div>
                    <p>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provides all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
                </div>
                <div className="right-description">
                    <ul className='top'>
                        <li>
                            <h3>Fabric</h3>
                            <h6>Bio-washed Cotton</h6>
                        </li>
                        <li>
                            <h3>Pattern</h3>
                            <h6>Printed</h6>
                        </li>
                        <li>
                            <h3>Fit</h3>
                            <h6>Regular-fit</h6>
                        </li>
                    </ul>
                    <ul className='bottom'>
                        <li>
                            <h3>Neck</h3>
                            <h6>Round Neck</h6>
                        </li>
                        <li>
                            <h3>Sleeve</h3>
                            <h6>Half-sleeves</h6>
                        </li>
                        <li>
                            <h3>Style</h3>
                            <h6>Casual Wear</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;
