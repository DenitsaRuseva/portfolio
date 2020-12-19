import React, {Fragment} from 'react';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faPhoneSquare, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function contactsText(){
    return (
        <Fragment>
        <h2>CONTACT ME</h2>
                    <div className='contacts-details'>
                        <div className='contacts-details-wrapp'>
                            <div>
                                <FontAwesomeIcon icon={faPhoneSquare}/>
                                <span>Phone: +000 000 000</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <span>E-mail: ruseva.ruseva.denitsa@gmail.com</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                                <span>Facebook: facebook/user</span>
                            </div>
                        </div>
                    </div>
        </Fragment>
    );
};