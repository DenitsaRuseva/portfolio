import React from 'react';
import './HeaderContainer.css';
import { ReactComponent as Divider } from 'assets/images/divider-36856.svg';


export default function headerContainer(props){
    return(
    <div className='header-container'>
        <div className='text-wrapp'>                
            <h1>{props.header}</h1>
            {/* <p>{props.subtitle}</p> */}
            {/* <div className='text-divider'>
                <Divider/>
            </div> */}
        </div>
    </div>);
};