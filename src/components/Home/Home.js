import React from 'react';
import Portfolio from './Portfolio/Portfolio';
import './Home.css';


export default function home(props){
    return(
        <div className='home'>

            <div className='home-content'>
                <Portfolio/>
                <div className='home-compensator'></div>
            </div>

        </div>
    );
};