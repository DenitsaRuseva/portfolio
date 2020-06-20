import React from 'react';
import './HeaderContainer.css';


export default function headerContainer(props){

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