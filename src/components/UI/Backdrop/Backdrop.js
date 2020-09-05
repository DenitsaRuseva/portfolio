import React from 'react';

export default function backdrop(props){
return <div 
    className='backdrop' 
    style={{
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '900'}}
    onClick={props.clicked}></div>};