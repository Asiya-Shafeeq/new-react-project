import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.svg'
import { FaRegHeart } from 'react-icons/fa'
import { IoSearchOutline } from "react-icons/io5";
import { RiUserLine } from 'react-icons/ri';
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menu,setMenu] = useState("shop")


  return (
    <div className='navbar'>
        <div class="logo">
            <img src={logo}/>
        </div>
        <nav>
            <ul className='navmenu'>
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link> {menu==='mens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("combos")}}><Link to='/combos'>Combos</Link>{menu==='combos'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("joggers")}}><Link to='/joggers'>Joggers</Link> {menu==='joggers'?<hr/>:<></>}</li>
            </ul>
        </nav>
        <div class="search-bar">
            <IoSearchOutline  color='#807D7E'/>
            <input type="text" placeholder="Search"/>
        </div>
        <div className="icons">
            <li className="wishlisht">
                <FaRegHeart color='#807D7E'/>
            </li>
            <li className="user">
                <RiUserLine color='#807D7E'/>
            </li>
            <li className="cart">
                <LuShoppingCart color='#807D7E'/>
            </li>
        </div>
    </div>
  )
}

export default Navbar
