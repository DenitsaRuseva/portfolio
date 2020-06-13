import React, {useState, useEffect} from 'react';
import Button from 'components/UI/Button/Button';
import './Portfolio.css';


export default function Portfolio(){

    const [actveBtnIndex, setActiveBtnIndex] = useState(0);

    const toggleActiveButton = (index) => {
        setActiveBtnIndex(index);
    };


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
                <Button class={actveBtnIndex === 0 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(0)}>ALL</Button>
                <Button class={actveBtnIndex === 1 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(1)}>NATURE</Button>
                <Button class={actveBtnIndex === 2 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(2)}>PEOPLE</Button>
                <Button class={actveBtnIndex === 3 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(3)}>STREET</Button>
                <Button class={actveBtnIndex === 4 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(4)}>STILL LIFE</Button>
            </div>
            <div className='portfolio-gallery'></div>
        </div>
    )
};