import React,{useContext, useState} from "react";
import './Navbar.css';

import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar=()=>{
    const [isMenuOpen,setIsMenuOpen]=useState(true);
    const [menu,setMenu]=useState('shop');
    const {getTotalCartItems}=useContext(ShopContext);

    return(
        <div className="navbar container">
            <div className="bars-logo">
                <div className="bars" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </div>
            </div>
            <div className={`menu ${isMenuOpen? 'menu-open':''}`}>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none',color:'white'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'none',color:'white'}} to='mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none',color:'white'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none',color:'white'}} to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link style={{textDecoration:'none',color:'white'}} to='/login'><button>Login</button></Link>
                    <Link style={{textDecoration:'none',color:'white'}} to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;