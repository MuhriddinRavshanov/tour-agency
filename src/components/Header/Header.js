import classes from './Header.module.css'
import React from 'react';
import { MyButton } from '../MyUI/MyUI'

const Header = () => {
    return (
        <div className={classes.Header}>
           <div className={classes.nav}>
                <div className={classes.col_1}>
                    <MyButton>About us</MyButton>
                    <MyButton>Contact us</MyButton>
                </div>
                <div className={classes.col_2}>
                    <MyButton>uzb@oasisinternational.travel</MyButton>
                    <MyButton>FB</MyButton>
                    <MyButton>IN</MyButton>
                    <MyButton>YT</MyButton>
                    <MyButton>TW</MyButton>
                </div>
           </div>
           <div className={classes.logo}>
               <h1>LOGO</h1>
           </div>
        </div>
    );
};

export default Header;