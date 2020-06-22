import React from 'react';
import './ParagraphContainer.css';


export default function paragraphContainer(props){
    const attachedClassses = ['paragraph-container'];
    if(props.showHeader === true){
        attachedClassses.push('show');
    };
    return(
        <div className={attachedClassses.join(' ')}>
            <h3>{props.header}</h3>
            <p>{props.children}</p>
        </div>
    );
};