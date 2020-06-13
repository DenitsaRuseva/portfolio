import React from 'react';
import './Button.css';

export default function button(props){
    return(
    <span className={props.class} type={props.type} onClick={props.clicked}><span>{props.children}</span></span>
    )
};