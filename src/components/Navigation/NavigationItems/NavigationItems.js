import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {faHome, faUserSecret, faCameraRetro, faShoppingCart, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function(props){
    return(
        <nav className='navigation-items'>
            <NavigationItem link='/'><span><span>HOME</span><FontAwesomeIcon icon={faHome} className='nav-svg'>
                </FontAwesomeIcon></span>
                
            </NavigationItem>
            <NavigationItem link='/gallery'><span><span>GALLERY</span><FontAwesomeIcon icon={faCameraRetro} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
            <NavigationItem link='/shop' ><span><span>SHOP</span><FontAwesomeIcon icon={faShoppingCart} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
            <NavigationItem link='/about'><span><span>ABOUT</span><FontAwesomeIcon icon={faUserSecret} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
                <NavigationItem link='/contacts' ><span><span>CONTACTS</span><FontAwesomeIcon icon={faMapMarkerAlt} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
        </nav>
    );
};