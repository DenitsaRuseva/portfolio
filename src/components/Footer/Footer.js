import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';


export default function footer(){
    return (
        <div className='footer'>
            <div className='line'><span></span>&#10070;<span></span></div>
            <Link to='/contacts'>CONTACTS</Link>
            <Link to='/contacts'>PRIVACY POLICY</Link>
            <Link to='/contacts'>TERMS OF USE</Link>
        </div>
    );
};