import React from 'react';
import classes from './RepSidebar.module.css';

const RepSidebar = () => {
    let array = ['About Uzbekistan', 'History', 'Cultrue', 'Arts', 'Customs', 'Foreign', 'Whi visit?', 'Arts', 'Customs', 'Foreign', 'Whi visit?', 'Customs', 'Foreign', 'Whi visit?', 'Arts', 'Customs', 'Foreign', 'Whi visit?'];

    return (
        <div className={classes.RepSidebar}>
            <h3 style={{marginBottom: '40px'}}>Uzbekistan</h3>
            <ul style={{listStyle: 'none'}}>
                { 
                    array.map(arr => 
                        <li>
                            <a href={'#/' + arr}>{arr}</a>
                        </li>    
                    )
                }
            </ul>
        </div>
    );
};

export default RepSidebar;