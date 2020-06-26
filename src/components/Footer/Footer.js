import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import Line from 'components/UI/Line/Line';


export default function footer(){
    return (
        <div className='footer'>
            <Line/>
            <Link to='/contacts'>CONTACTS</Link>
            <Link to='/contacts'>PRIVACY POLICY</Link>
            <Link to='/contacts'>TERMS OF USE</Link>
            <Link to='/return'>RETURN POLICY</Link>
            <Link to='/about'>ABOUT ME</Link>
            
        </div>
    );
};