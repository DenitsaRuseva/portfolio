import React from 'react';
import './Frame.css';


export default function frame(props){
    return (
        <div className='frame'>
            <img className='frame-img' src={props.src} alt={props.alt}/>
        </div>
    );
};