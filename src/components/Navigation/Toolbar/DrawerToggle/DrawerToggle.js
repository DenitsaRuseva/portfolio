import React from 'react';
import './DrawerToggle.css';

export default function drawerToggle(props){
    return(
        <div className='drawerToggle' onClick={props.clicked}>
            <div className='dt-line-1'></div>
            <div className='dt-line-2'></div>
            <div className='dt-line-3'></div>
        </div>
    );
};