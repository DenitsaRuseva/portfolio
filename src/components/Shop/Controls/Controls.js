import React, {useState} from 'react';
import './Controls.css';
import {faPaintBrush, faFlask, faWindowClose, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Controls(props){
    const [category, setCategory] = useState('selectCat');
    const [showCategory, setShowCategory] = useState(false);


    const categoriesOptions = [{value:'selectCat', displayValue: 'Choose your type'},
                {value:'oil', displayValue: 'Oil paintings'},
                {value: 'acrilic', displayValue: 'Acrilic paintings'}];

    const changeCategory = (newCategoryValue) => {
        setCategory(newCategoryValue);
    };

    const showCategoryHandler = () => {
        const updatedShowCategory = !showCategory;
        setShowCategory(updatedShowCategory);
    };

    const selectContainerClasses = showCategory ? 'select-container show' : 'select-container';

    return(
        <div className='shop-controls-container'>
                <div className={selectContainerClasses}>
                    <div className='select-label control-box'>Categories:</div>
                    <div className='select-options-wrapp'>
                        <div className='select-value-container control-box' onClick={showCategoryHandler}>
                            <span>{categoriesOptions.find(el => el.value === category).displayValue}</span>
                            <div className='select-svg-container'>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                        <div className='select-options-container'>
                            <div className='option control-box' onClick={() => changeCategory('oil')}>
                                <div className='select-svg-container'>
                                    <FontAwesomeIcon icon={faPaintBrush}/>
                                </div>
                                <span>Oil paintings</span>
                            </div>
                            <div className='option control-box' onClick={() => changeCategory('acrilic')}>
                                <div className='select-svg-container'>
                                    <FontAwesomeIcon icon={faFlask}/>
                                </div>
                                <span value='acrilic'>Acrilic paintings</span>
                            </div>
                            <div className='option control-box' onClick={() => changeCategory('selectCat')}>
                                <div className='select-svg-container'>
                                    <FontAwesomeIcon icon={faWindowClose}/>
                                </div>
                                <span>Remove filter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};