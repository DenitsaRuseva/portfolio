import React from 'react';
import './DrawerToggle.css';

export default function drawerToggle(props){
    return(
        <div className='drawerToggle' onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};