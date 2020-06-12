import React from 'react';
import './Button.css';

export default function button(props){
    return(
    <button className={props.class} type={props.type} onClick={props.clicked}>{props.children}</button>
    )
};