import React from 'react';
import './HeaderContainer.css';

export default function headerContainer(props){
    return(
    <div className='header-container'>
        <div className='text-wrapp'>                
            <h1>{props.header}</h1>
        </div>
    </div>);
};