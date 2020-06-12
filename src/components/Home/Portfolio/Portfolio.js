import React from 'react';
import Button from 'components/UI/Button/Button';
import './Portfolio.css';


export default function portfolio(){
    return(
        <div className='portfolio'>
            <div className='portfolio-text-container'>
                <h1>PORTFOLIO</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <div className='portfolio-svg-container'>
                    <div className='line left'></div>
                    <div className='line right'></div>
                </div>
            </div>
            <div className='portfolio-buttons-container'>
                <Button class='btn'>ALL</Button>
                <Button class='btn'>NATURE</Button>
                <Button class='btn'>PEOPLE</Button>
                <Button class='btn'>STREET</Button>
                <Button class='btn'>STILL LIFE</Button>
            </div>
            <div className='portfolio-gallery'></div>
        </div>
    )
};