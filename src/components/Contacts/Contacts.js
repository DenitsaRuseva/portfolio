import React, {useState} from 'react';
import './Contacts.css';
import Input from 'components/UI/Input/Input';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Button from 'components/UI/Button/Button';
import ContactsText from './ContactsText/ContactsText';

import {updateObject, checkValidity} from '../../utility';

export default function Contacts(){

    const [formIsValid, setFormIsValid] = useState(false);
    const [form, setForm] = useState({
        name: {
            elType: 'input',
            config: {
                type: 'text',
                name: 'name'
            },
            valid: false,
            tuched: false,
            validation: {
                required: true,
                maxLength: 50
            },
            value: ''
        },
        email: {
            elType: 'input',
            config: {
                type: 'email',
                name: 'email'
            },
            valid: false,
            tuched: false,
            validation: {
                required: true,
                email: true
            },
            value: ''
        },
        message: {
            elType: 'textarea',
            config: {
                type: 'text',
                name: 'message',
                rows: 13,
                cols: 50
            },
            valid: false,
            tuched: false,
            validation: {
                required: true,
                maxLength: 1000
            },
            value: ''
        }
    });

    const resetForm = () => {
        if(!formIsValid){
            return;
        };
        let updatedForm = {};
        for(let key in form){
            const updatedConfig = {...form[key].config};
            const updatedValidation ={...form[key].validation};
            updatedForm[key] = {
                ...form[key],
                config: updatedConfig,
                validation: updatedValidation,
                value: '',
                valid: false,
                tuched: false
            };
        };
        setForm(updatedForm);
    };

    const inputChangeHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const isValid = checkValidity(inputValue, form[inputName].validation);
        const updatedInput = updateObject(form[inputName], {value: inputValue, valid: isValid, tuched: true});
        const updatedFormIsValid = checkFormValidity();
        const updatedForm = updateObject(form, {[inputName]: updatedInput});
        setForm(updatedForm);
        setFormIsValid(updatedFormIsValid);
    };

    const checkFormValidity = () => {
        let formIsValid = true;
        for(let key in form){
            formIsValid = formIsValid && form[key].valid === true;
        };
        return formIsValid;
    };



    const formElements = [];
    for(let el in form){
        formElements.push(
        <Input 
        key={el+'01'} 
        inputType={form[el].elType} 
        config={form[el].config} 
        label={form[el].config.label}
        changed={inputChangeHandler}
        valid={form[el].valid}
        tuched={form[el].tuched}
        value={form[el].value}
        required={form[el].validation.required}>{el.toUpperCase()}</Input>
        );
    };



    return(
        <div className='contacts'>
            <div className='contacts-wrapp'>
                <InViewListener>
                    <ContactsText/>
                    <div className='contact-form-container'>
                        <form>
                            {formElements}
                        </form>
                    </div>
                    <div className='contact-btn-container'>
                        <Button class={formIsValid ? 'btn' : 'btn disabled'} clicked={resetForm}>SEND</Button>
                    </div>
                </InViewListener>
            </div>
        </div>
    );
};