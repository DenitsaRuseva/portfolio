import React from 'react';
import './TextContainer.css';


export default function textContainer(props){

    const headerClasses = ['text-container'];
    if(props.showHeader === true){
        headerClasses.push('show-text');
    };

    return(

    <div className={headerClasses.join(' ')}>
        <div className='text-wrapp'>                
            <h1>{props.header}</h1>
            <p>{props.subtitle}</p>
            <div className='text-divider'>
            </div>
        </div>
    </div>);
};