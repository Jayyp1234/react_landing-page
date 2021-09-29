import React from "react";
import mobilepost from '../svg/mobile_post.svg';
import plus from '../svg/file-plus-alt 1.svg';
import star from '../svg/star 1.svg';
import location from '../svg/location-pin-alt 1.svg';
import card4 from '../svg/Group 86.svg';
import card1 from '../svg/undraw_Security_on_re_e491 (1) 1.svg';
import card2 from '../svg/undraw_Mobile_marketing_re_p77p 1.svg';
import card3 from '../svg/undraw_Wireframing_re_q6k6 1.svg';
import card5 from '../svg/Group 108.svg';
import card6 from '../svg/Group 110.svg';

import card8 from '../svg/Group 112.svg';
import card9 from '../svg/Group 112(1).svg';
import hander from '../svg/Group 171.svg';
import icon1 from '../svg/Vector(1).svg';
import icon2 from '../svg/Vector(2).svg';
import phones from '../svg/phones.jpg';
const Main = ()=> {
    return(
        <div>
        <section className="row main">
            <div className="col-lg-4">
                <img src={mobilepost} style={{width:'100%'}}/>
            </div>
            <div className="col-lg-8 mmtop">
                <div>
                    <h2 style={{fontWeight: '900'}}>What are The Consumers Concerns During Shopping?</h2>
                    <div className="row" style={{minHeight:220,alignContent: 'space-evenly'}}>
                        <div className="customer-box col-sm-5">
                            <div style={{display:'flex'}}>
                            <img src={plus} />
                            <div> 
                                <b>What are the Ingredients?</b>
                                <span>Does it contain ingredients that might trigger allergic reactions?</span>
                            </div>
                            </div>
                        </div> 
                        <div className="col-sm-1"></div>
                        <div className="customer-box col-sm-5">
                            <div style={{display:'flex'}}>
                            <img src={star} />
                            <div> 
                                <b>User Review/Rating?</b>
                                <span>Past buyers, how was their experiences?</span>
                            </div>
                            </div>
                        </div> 
                        <div className="customer-box col-sm-5">
                            <div style={{display:'flex'}}>
                            <img src={plus} />
                            <div> 
                                <b>Is this Fake?</b>
                                <span>I’m not sure whether this is original or fake…</span>
                            </div>
                            </div>
                        </div> 
                        <div className="col-sm-1"></div>
                        <div className="customer-box col-sm-5">
                            <div style={{display:'flex'}}>
                            <img src={location} />
                            <div> 

                                <b>Where is this from?</b>
                                <span>I’ll be paranoid if I don’t know where it’s originated from.</span>
                            </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
        <section className="row main" style={{backgroundColor:'white'}}>
            <h1 style={{textAlign:'center',fontWeight:'bolder'}}>One Scan to Trigger Consumers <span className="theme-color">360<sup>o</sup> </span> Product Experiences</h1>
            <span style={{color:'#74899d',display:'block',maxWidth:550,margin:'auto',textAlign:'center'}}>With Stegofy solution, your product packaging and labelling no longer provides a static content and Making your consumers choose your product over a competitors.</span>
            <br/>
            <div className="card-container">
                <div className="cards">
                    <img src={card1}/>
                    <b>Anti-Counterfeit</b>
                    <span>Every product unit contains a unique code fortified with Blockchain technology, reassuring customers the authenticity of your products.</span>
                </div>
                <div className="cards">
                    <img src={card2}/>
                    <b>Marketing</b>
                    <span>Now your product is able to become the entry point for various marketing activities</span>
                </div>
                <div className="cards">
                    <img src={card3}/>
                    <b>Product Transparency</b>
                    <span>Now your product is able to become the entry point for various marketing activities</span>
                </div>
                <div className="cards">
                    <img src={card4}/>
                    <b>Rating & Testimony</b>
                    <span>Your consumers are more likely to buy your product once they discover how many people love it.</span>
                </div>
            </div>
        </section>
        <section className="row main" style={{backgroundColor:'white'}}>
            <h2 style={{textAlign:'center',fontWeight:'bolder'}}>How it works</h2>
            <br/>
            <br/>
            <div className="card-container">
                <div className="cards c2">
                    <img src={card5}/>
                    <b>Our Technology</b>
                    <span>Our non cloneable QR powered with blockchain technology enables a brand to secure the product by printing it on a product/package</span>
                </div>
                <div className="cards c2">
                    <img src={card6}/>
                    <b>Product Analysis</b>
                    <span>Our advanced analytics helps to trace products end to end starting from manufacturers to consumers.</span>
                </div>
                <div className="cards c2">
                    <img src={card3}/>
                    <b>Product Info Displayed</b>
                    <span>Shoppers are able to verify the product authenticity and are exposed to various marketing experience</span>
                </div>
                <div className="cards c2">
                    <img src={card8}/>
                    <b>Verify Authenticity</b>
                    <span> Our mobile app helps to verify product authenticity & claim. Digital receipts, warranty cards, exciting rewards & much more are included.</span>
                </div>
                <div className="cards c2">
                    <img src={card9}/>
                    <b>Rating & Testimony</b>
                    <span>Your consumers are more likely to buy your product once they discover how many people love it.</span>
                </div>
            </div>
        </section>
        <section className="row main" style={{backgroundColor:'white',display:'grid',justifyContent:'center'}}>
            <h2 style={{textAlign:'center',fontWeight:'bolder'}}>Product Features</h2>
            <span style={{color:'#74899d',display:'block',maxWidth:550,margin:'auto',textAlign:'center'}}>We have successfully identified the essential functions of track & trace softwares throughout developing for various corporate clients. </span>
            <br/>
            <img src={phones} className="phone"/>
            <div style={{display:'flex',justifyContent:'center'}}>
                <span className="grey-circle"></span>
                <span className="grey-circle"></span>
                <span className="blue-circle"></span>
                <span className="grey-circle"></span>
                <span className="grey-circle"></span>
            </div>
        </section>
        <section className="row main">
            <div className="col-lg-4" style={{paddingLeft:0}}>
                <img src={hander} style={{width:'100%'}}/>
            </div>
            <div className="col-lg-1"> </div>
            <div className="col-lg-7 mmtop">
                <div>
                    <div className="hh">
                    <h2 style={{fontWeight: '900'}}>Why choose <span className="theme-color">Stegofy</span></h2>
                    <span style={{color:'#74899d',fontSize:14}}>Stegofy platform is the secure, reliable and convenient one stop solution for all your brand and product management needs</span>
                    <div>
                    <a className="blue-face" href="#">Learn More </a>
                    </div>
                    </div>
                    <div className="row" style={{minHeight:220,alignContent: 'space-evenly'}}>
                        <div className="customer-box pix col-sm-12">
                            <div style={{display:'flex'}}>
                            <img src={icon1} />
                            <div>
                                <b>Low Cost</b>
                                <span>Stegofy platform stores all uploaded business and product information in a secure, tamper proof and fraud resistant format</span>
                            </div>
                            </div>
                        </div> 
                        <div className="customer-box pix col-sm-12">
                            <div style={{display:'flex'}}>
                            <img src= {icon1} />
                            <div> 
                                <b>Secure</b>
                                <span>Stegofy platform stores all uploaded business and product information in a secure, tamper proof and fraud resistant format</span>
                            </div>
                            </div>
                        </div> 
                        <div className="customer-box pix col-sm-12">
                            <div style={{display:'flex'}}>
                            <img src={icon2} />
                            <div> 
                                <b>Customer Experiance</b>
                                <span>Stegofy platform stores all uploaded business and product information in a secure, tamper proof and fraud resistant format</span>
                            </div>
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </section>
        
        </div>
    )
    
}

export default Main;