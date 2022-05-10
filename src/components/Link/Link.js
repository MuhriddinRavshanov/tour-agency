import cl from './Link.module.css'
import React from 'react';

export const MyLink = ({children}, {...props}) => {
    return (
        <a {...props} href='#' className={cl.myLink}>
            {children}
        </a>
    );
};