import React from "react";
import headerpics from '../svg/header.jpg';
const Header = ()=> {
    return(
        <header className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5 mmh" style={{display:'grid',alignContent: 'center'}}>
                <div>
                    <h1>Bring <span className="theme-color">Authenticity </span> To Your Products</h1>
                    <span style={{color:'#74899d',display:'block'}}>Securing the genunity of your brand andhelping consumers buy smartly</span>
                    <br/><br/>
                    <a href="#" className="blue-face" >Request Demo</a>
                </div>
            </div>
            <div className="col-md-6 header-image">
                <img src={headerpics} />
            </div>
        </header>
    )
    
}

export default Header;