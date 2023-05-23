import React from 'react';
import css from "./footer.css";
import footerlogo from "../img/footlogo.png";
import insta from "../img/insta.png"
import whats from "../img/whats.png"


const Footer =() => {
    return(
        <div className="footer" >
            <div>
                <img className="footer_logo" src={footerlogo} />
            </div>
            <div className="syzyk"></div>
            <div className='footer_nav'>
                <ul>
                    <li>Башкы бет</li>
                    <li>Меню</li>
                    <li>Таанымал тамактар</li>
                    <li>Биз жонундо</li>
                </ul>
                <ul>
                    <li>Кируу</li>
                    <li>Катталуу</li>
                </ul>
            </div>
            <div className="footer_icon" >
                <a><img className="footer_insta" src={insta} /></a>
                <a><img className="footer_insta" src={insta} /></a>
                <a><img className="footer_insta" src={insta} /></a>
                <a><img className="footer_insta" src={whats} /></a>
                <a><img className="footer_insta" src={insta} /></a>
            </div>
        </div>
       )
   }

export default Footer;