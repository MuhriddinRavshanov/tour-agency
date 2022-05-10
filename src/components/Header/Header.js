import classes from './Header.module.css'
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, } from 'react-icons/fa';
import { MyLink } from '../Link/Link';
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";

const Header = () => {
    return (
        <div className={classes.Header}>
           <div className={classes.nav}>
                <div className={classes.col_1}>
                    <MyLink>About us</MyLink>
                    <MyLink>Contact us</MyLink>
                </div>
                <div className={classes.col_2}>
                    <MyLink>uzb@oasisinternational.travel</MyLink>
                    <MyLink><img src={facebook}/></MyLink>
                    <MyLink><img src={instagram}/></MyLink>
                    <MyLink><img src={youtube}/></MyLink>
                    <MyLink><img src={twitter}/></MyLink>
                </div>
           </div>
           <div className={classes.logo}>
               <img src='' alt='Main image'/>
           </div>
        </div>
    );
};

export default Header;