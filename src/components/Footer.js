import React from "react";
import logo from '../svg/Group 31(1).svg';

const Footer = ()=> {
    return(
        <footer className="no-margin dark-back" style={{paddingLeft:10,paddingRight:10}}>
        <div className="row no-margin" style={{padding:10}} >
          <div className="col-sm-6 col-md-3">
            <div className="footer-body">
              <img src={logo} />
              <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
              <div>
                <i className="icon-instagram" ></i> 
                <i className="icon-twitter" ></i>
                <i className="icon-linkedin" ></i>
                <i className="icon-facebook" ></i>
              </div> 
            </div>
        </div>
          <div className="col-sm-6 col-md-2">
            <ul>
              <li> <b> Company  </b> </li>
              <li> <a href="#"> Blog</a> </li>
              <li> <a href="#"> Careers</a> </li>
              <li> <a href="#"> About Us</a> </li>
            </ul>
        </div>
          <div className="col-sm-6 col-md-2">
            <ul>
              <li> <b> Product </b> </li>
              <li> <a href="#"> Watch Demo</a> </li>
              <li> <a href="#"> Term of Service</a> </li>
              <li> <a href="#"> Privacy Policy</a> </li>
            </ul>
        </div>
          <div className="col-sm-6 col-md-2">
            <ul>
              <li> <b> Help & Support </b> </li>
              <li> <a href="#"> Report Bug</a> </li>
              <li> <a href="#"> Share Feedback</a> </li>
              <li> <a href="#"> Contact Support</a> </li>
            </ul>
        </div>
          <div className="col-sm-6 col-md-3">
            <ul>
              <li> <a href="#"> Subscribe to our Newsletter </a> </li>
              <li> 
                <form style={{position:'relative'}}>
                  <i className="icon-envelope"></i>
                  <input type="input" placeholder="Enter Email Address"/>
                  <button>Get Started</button> 
                </form>
                </li>
            </ul>
        </div>
          
      </div>
      <br/><hr style={{borderTop: '1px solid #435976'}}/>
      <span style={{color:'#435976',textAlign:'center',fontSize:12,lineHeight:1.1,display:'block',margin:9}}>Copyright © 2020. Stegofy All rights reserved | Privacy policy | Refund and Cancellation Policy | Terms of Use | Cookies | Sitemap</span>
      </footer>
    )
    
}

export default Footer;