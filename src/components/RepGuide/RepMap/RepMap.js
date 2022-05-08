import React from 'react';
import classes from './RepMap.module.css'

const RepMap = () => {
    let country = 'Uzbekistan';

    return (
        <div className={classes.RepMap}>
            <div className='classes.title'>
                <h4 style={{textAlign: 'center'}}>{country} travel guide</h4>
            </div>
            <div className={classes.mapContainer}>
                <small>Map of {country}</small>
                <div className={classes.map}></div>
            </div>
        </div>
    );
};

export default RepMap;