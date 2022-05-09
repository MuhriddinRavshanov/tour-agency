import React from 'react';
import classes from './RepSidebar.module.css';

const RepSidebar = (props) => {
    const {links} = props
    return (
        <div className={classes.RepSidebar}>
            <h3 style={{marginBottom: '10px'}}>{props.title}</h3>
            <ul style={{listStyle: 'none'}}>
                { 
                    links.map(f => 
                        <li>
                            <a href={'#/' + f}>{f}</a>
                        </li>    
                    )
                }
            </ul>
        </div>
    );
};

export default RepSidebar;