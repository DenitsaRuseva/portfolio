import React from 'react';
import './NavigationItem.css';
import {NavLink} from 'react-router-dom';

export default function navigationItem(props){
    return(
        <NavLink exact={true} className='navigation-item' to={props.link} onClick={props.clicked}>
            {props.children}
        </NavLink>
    );
};