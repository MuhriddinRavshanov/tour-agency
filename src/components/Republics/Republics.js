import classes from './Republics.module.css'
import React from 'react';
import { MyButton, MyInput } from '../MyUI/MyUI';

const Republics = () => {
    return (
        <div className={classes.Republics}>
            <div className={classes.row_1}>
                <div className={classes.col_1}>
                    <MyButton>Build your own trip</MyButton>
                </div>
                <div className={classes.col_2}>
                    <MyButton>EN</MyButton>
                    <MyButton>RU</MyButton>
                    <MyButton>FR</MyButton>
                    <MyButton>DE</MyButton>
                    <MyButton>IT</MyButton>
                    <MyButton>ES</MyButton>
                </div>
            </div>
            <div className={classes.row_2}>
                <MyButton>Central Asia</MyButton>
                <MyButton>Uzbekistan</MyButton>
                <MyButton>Kyrgyzstan</MyButton>
                <MyButton>Turkmenistan</MyButton>
                <MyButton>Tajikistan</MyButton>
                <MyButton>Kazakhstan</MyButton>
                <MyInput placeholder="Search"/>
            </div>
            <div className={classes.row_3}>
                <small>Countries/</small>
            </div>
        </div>
    );
};

export default Republics;