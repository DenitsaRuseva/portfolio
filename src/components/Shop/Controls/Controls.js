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
        collection: {
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
        props.onFilterImages(formProperty, value);
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
        removeFilter={props.removeFilter}/>)
    };




    // const [category, setCategory] = useState('selectCat');
    // const [showCategory, setShowCategory] = useState(false);


    // const categoriesOptions = [{value:'selectCat', displayValue: 'Choose your type'},
    //             {value:'nature', displayValue: 'Nature Morte'},
    //             {value: 'bw', displayValue: 'Black and White'}];

    // const changeCategory = (newCategoryValue) => {
    //     setCategory(newCategoryValue);
    //     setShowCategory(false);
    // };

    // const showCategoryHandler = () => {
    //     const updatedShowCategory = !showCategory;
    //     setShowCategory(updatedShowCategory);
    // };

    // const selectContainerClasses = showCategory ? 'select-container show' : 'select-container';
    const backdrop = showBackdrop ? <Backdrop clicked={closeControlsHendler}/> : null;
    return (
            <div className='shop-controls'>
                {backdrop}
                {controls}
            </div>
    );
    // return(
    //     <div className='shop-controls-container'>
    //             <div className={selectContainerClasses}>
    //                 <div className='select-label control-box'>Collections:</div>
    //                 <div className='select-options-wrapp'>
    //                     <div className='select-value-container control-box' onClick={showCategoryHandler}>
    //                         <span>{categoriesOptions.find(el => el.value === category).displayValue}</span>
    //                         <div className='select-svg-container'>
    //                             <FontAwesomeIcon icon={faChevronDown}/>
    //                         </div>
    //                     </div>
    //                     <div className='select-options-container'>
    //                         <div className='option control-box' onClick={() => changeCategory('nature')}>
    //                             <div className='select-svg-container'>
    //                                 <FontAwesomeIcon icon={faPaintBrush}/>
    //                             </div>
    //                             <span>Nature Morte</span>
    //                         </div>
    //                         <div className='option control-box' onClick={() => changeCategory('bw')}>
    //                             <div className='select-svg-container'>
    //                                 <FontAwesomeIcon icon={faFlask}/>
    //                             </div>
    //                             <span value='acrilic'>Black and White</span>
    //                         </div>
    //                         <div className='option control-box' onClick={() => changeCategory('selectCat')}>
    //                             <div className='select-svg-container'>
    //                                 <FontAwesomeIcon icon={faWindowClose}/>
    //                             </div>
    //                             <span>Remove filter</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    // );
};