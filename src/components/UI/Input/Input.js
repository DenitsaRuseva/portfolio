import React from 'react';
import './Input.css';


export default function input(props){
    let inputElement;
    const attachedClasses = props.valid === false && props.tuched === true ? ['input', 'invalid'] : ['input', 'valid'];
        switch(props.inputType){
            case 'input': 
            return inputElement = (
            <p className='input-container'>
                <label  className='label' htmlFor={props.config.name}>{props.children}</label>
                <input 
                className={attachedClasses.join(' ')} 
                id={props.config.name} 
                type={props.config.type} 
                name={props.config.name} 
                value={props.value}
                onChange={props.changed}
                required={props.required}/>
            </p>
            );
            case 'textarea': 
            return inputElement = (
                <p className='input-container'>
                    <label className='label' htmlFor={props.config.name}>{props.children}</label>
                    <textarea 
                    className={attachedClasses.join(' ')}
                    id={props.config.name}
                    name={props.config.name} 
                    rows={props.config.rows} 
                    cols={props.config.cols}
                    maxLength={props.config.maxlength}
                    minLength={props.config.minlength}
                    value={props.value}
                    onChange={props.changed}
                    required={props.required}></textarea>
                </p>
            );
            default: inputElement = <input className={attachedClasses.join(' ')} onChange={props.changed} required={props.required}/>
    };
    return inputElement;
};