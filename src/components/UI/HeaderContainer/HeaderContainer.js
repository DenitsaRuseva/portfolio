import React from 'react';
import './HeaderContainer.css';
import { ReactComponent as Divider } from 'assets/images/divider-36856.svg';

export default function headerContainer(props){

    const headerClasses = ['header-container'];
    if(props.showHeader === true){
        headerClasses.push('show-text');
    };

    return(

    <div className={headerClasses.join(' ')}>
        <div className='text-wrapp'>                
            <h1>{props.header}</h1>
            <p>{props.subtitle}</p>
            <div className='text-divider'>
                <Divider/>
                {/* <img src={divider} alt=''/> */}
            </div>
        </div>
    </div>);
};