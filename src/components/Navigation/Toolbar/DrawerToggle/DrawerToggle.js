import React from 'react';
import './DrawerToggle.css';

export default function drawerToggle(props){
    return(
        <div className='drawerToggle' onClick={props.clicked}>
            <div className='line line-1'></div>
            <div className='line line-2'></div>
            <div className='line line-3'></div>
        </div>
    );
};