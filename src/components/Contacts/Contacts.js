import React, {useState} from 'react';
import './Contacts.css';
import Input from 'components/UI/Input/Input';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Button from 'components/UI/Button/Button';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faPhoneSquare, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {updateObject, checkValidity} from '../../utility';

export default function Contacts(props){
    const [formIsValid, setFormIsValid] = useState(false);
    const [form, setForm] = useState({
        name: {
            elType: 'input',
            config: {
                type: 'text',
                name: 'name',
                label: true
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
                name: 'email',
                label: true
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
                label: true,
                rows: 20,
                cols: 50
            },
            valid: false,
            tuched: false,
            validation: {
                required: true,
                maxLength: 1000,
                minLength: 10
            },
            value: ''
        }
    });

    const inputChangeHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const isValid = checkValidity(inputValue, form[inputName].validation);
        const updatedInput = updateObject(form[inputName], {value: inputValue, valid: isValid, tuched: true});
        const updatedForm = updateObject(form, {[inputName]: updatedInput});
        setForm(updatedForm);

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


    console.log(form)

    return(
        <div className='contacts'>
            <div className='contacts-wrapp'>
                <InViewListener>
                    <h2>CONTACT ME</h2>
                    <div className='contacts-details'>
                        <div className='contacts-details-wrapp'>
                            <div>
                                <FontAwesomeIcon icon={faPhoneSquare}/>
                                <span>Phone: +359 878 6783</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <span>E-mail: desi@dkjfkl.jd</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                                <span>Facebook: facebook/desislavaRuseva</span>
                            </div>
                        </div>
                    </div>
    
                    <div className='contact-form-container'>
                        <form>
                            {formElements}
                        </form>
                    </div>
                    <div className='contact-btn-container'>
                            <Button class='btn'>SEND</Button>
                    </div>
                </InViewListener>
            </div>
        </div>
    );
};