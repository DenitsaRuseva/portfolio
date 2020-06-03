import React from 'react';
import './NavigationItem.css';

export default function navigationItem(props){
    return(
        <a className='navigation-item' href={props.link}>
            {props.children}
        </a>
    );
};