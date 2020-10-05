import React from 'react';
import './GoToTopBtn.css';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function goToTopBtn(props){
    return (
        <div 
        className={props.show === true ? 'top-btn show' : 'top-btn'}
        onClick={props.clicked}><FontAwesomeIcon icon={faArrowUp}/></div>
    );
};