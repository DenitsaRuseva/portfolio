import React from 'react';
import './Line.css';


export default function line(props){
    let line = <div className='line'><span></span></div>;
    if(props.diamound){
        const style = {
            height: '1.5rem',
            lineHeight: '1.5rem',
            fontSize: '1.5rem',
            color: 'black',
            textShadow: '0 0 1px white'
        };
        line = <div className='line' style={style}><span style={{width: '30%', margin: '0 10px'}}></span>&#10070;<span style={{width: '30%', margin: '0 10px'}}></span></div>;
    };
    return line;
};