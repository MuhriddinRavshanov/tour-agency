import React from 'react';
import classes from './RepGuide.module.css';
import RepMap from './RepMap/RepMap';
import RepSidebar from './RepSidebar/RepSidebar'

const RepGuide = () => {
    return (
        <div className={classes.RepGuide}>
            <RepSidebar/>
            <RepMap/>
        </div>
    );
};

export default RepGuide;