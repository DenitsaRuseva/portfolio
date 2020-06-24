import React from 'react';
import './ParagraphContainer.css';


export default function paragraphContainer(props){
    return(
        <div className='paragraph-container'>
            <h3>{props.header}</h3>
            <p>{props.children}</p>
        </div>
    );
};