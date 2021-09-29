import React from "react";
import $ from 'jquery';
import logo from '../svg/logo.svg';
import barcode from '../svg/barcode.svg';
const showDrop = ()=> {
    $('.dropdown-menu').slideToggle('slow');
  }
  const menuData = ()=>{
    $('.nav-list').slideToggle('slow');
  }
const Nav = ()=> {
    return(
        <nav className="nav-bar">
      <a href="/" className="nav-link"> <img src={logo} /></a>
      <ul className = "nav-list"> 
        <li> <a href="#"> Pricing  </a> </li>
        <li> <a href="#"> FAQs </a> </li>
        <li> <a href="#"> Our Journey </a> </li>
        <li> <a href="#"> Contact Us </a> </li>
        <li><a href="#" className="blue-face" > <img style={{marginRight:11}} src={barcode} /> Verify </a> </li>
        <li><a href="#" className="light-face"> Login </a> </li>
      </ul>
      <i className="icon-menu" onClick={menuData}></i>
      </nav>
    )
    
}

export default Nav;