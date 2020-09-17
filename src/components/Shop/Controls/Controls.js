import React, {useState} from 'react';
import './Controls.css';
import {faPaintBrush, faFlask, faWindowClose, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Control from './Control/Control';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import { updateObject } from 'utility';

export default function Controls(props){

    const [showBackdrop, setShowBackdrop] = useState(false);

    const [form, setForm] = useState({
        category: {
            options: [
            {value:'select', displayValue: 'Choose collection'},
            {value:'coll_one', displayValue: 'Collection One'},
            {value: 'coll_two', displayValue: 'Collection Two'}],
            value: 'select',
            showOptions: false
        },
        colour: {
            options: [
                {value: 'select', displayValue: 'Choose colour'},
                {value: 'blue', displayValue: 'Blue'},
                {value: 'green', displayValue: 'Green'},
                {value: 'baw', displayValue: 'B&W'}
            ],
            value: 'select',
            showOptions: false
        },
        orientation: {
            options: [
                {value: 'select', displayValue: 'Choose orientation'},
                {value: 'portret', displayValue: 'Portret'},
                {value: 'landscape', displayValue: 'Landscape'}
            ],
            value: 'select',
            showOptions: false
        }
    });

    const toggleShowOptionsHandler = (formProperty) => {
        const updatedField = updateObject(form[formProperty], {showOptions: !form[formProperty].showOptions});
        const updatedForm = updateObject(form, {[formProperty]: updatedField});
        setForm(updatedForm);
        setShowBackdrop(!showBackdrop);
    };
    const chooseOptionHandler = (formProperty, value) => {
        const updatedField = updateObject(form[formProperty], {value: value, showOptions: false});
        const updatedForm = updateObject(form, {[formProperty]: updatedField});
        setForm(updatedForm);
        setShowBackdrop(!showBackdrop);
        if(value === 'select'){
            props.removeFilter();
        } else {
            props.onFilterImages(formProperty, value);
        }
    };
    const closeControlsHendler = () => {
        let updatedForm = {...form};
        for(let i in form){
            updatedForm[i] =  updateObject(form[i], {showOptions: false}); 
        };
        setForm(updatedForm);
        setShowBackdrop(false);
    };

    const controls = [];
    for(let i in form){
        controls.push(
        <Control 
        key={i} 
        options={form[i].options} 
        value={form[i].value} 
        showOptions={form[i].showOptions}
        name={i}
        clicked={()=>toggleShowOptionsHandler(i)}
        clickedOption={chooseOptionHandler}
        />)
    };


    const backdrop = showBackdrop ? <Backdrop clicked={closeControlsHendler}/> : null;
    return (
            <div className='gallery-controls'>
                {backdrop}
                {controls}
            </div>
    );
};