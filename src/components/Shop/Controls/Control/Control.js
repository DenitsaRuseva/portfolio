import React from 'react';
import './Control.css'
import {faWindowClose, faChevronDown, faSun} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function control(props){


    const selectContainerClasses = props.showOptions ? 'select-container show' : 'select-container';

    const options = [];
    for(let i=1; i<props.options.length; i++){
        options.push(
        <div key={props.options[i].displayValue} className='option control-box' onClick={() => props.clickedOption(props.name,props.options[i].value)}>
            <div className='select-svg-container'>
                <FontAwesomeIcon icon={faSun}/>
            </div>
        <span>{props.options[i].displayValue}</span>
    </div>);
    };
    options.push(
        <div key={props.options[0].displayValue} className='option control-box' onClick={() => props.clickedOption(props.name,props.options[0].value)}>
                <div className='select-svg-container'>
                        <FontAwesomeIcon icon={faWindowClose}/>
                </div>
                <span>Remove filter</span>
        </div>
    );

    return(
        <div className='gallery-control-container'>
                <div className={selectContainerClasses}>
                    <div className='select-label control-box'>{props.name.toString().toUpperCase()}:</div>
                    <div className='select-options-wrapp'>
                        <div className='select-value-container control-box' onClick={props.clicked}>
                            <span>{props.options.find(el => el.value === props.value).displayValue}</span>
                            <div className='select-svg-container'>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                        <div className='select-options-container'>
                            {options}
                        </div>
                    </div>
                </div>
            </div>
    );
};