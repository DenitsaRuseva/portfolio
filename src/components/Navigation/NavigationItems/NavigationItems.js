import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {faHome, faUserSecret, faCameraRetro, faShoppingCart, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function(props){
    return(
        <nav className='navigation-items'>
            <NavigationItem link='/'><span><span><span>HOME</span></span><FontAwesomeIcon icon={faHome} className='nav-svg'>
                </FontAwesomeIcon></span>
                
            </NavigationItem>
            <NavigationItem link='/gallery'><span><span><span>GALLERY</span></span><FontAwesomeIcon icon={faCameraRetro} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
            <NavigationItem link='/shop' ><span><span><span>SHOP</span></span><FontAwesomeIcon icon={faShoppingCart} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
            <NavigationItem link='/about'><span><span><span>ABOUT</span></span><FontAwesomeIcon icon={faUserSecret} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
                <NavigationItem link='/contacts' ><span><span><span>CONTACTS</span></span><FontAwesomeIcon icon={faMapMarkerAlt} className='nav-svg'></FontAwesomeIcon></span>
                </NavigationItem>
        </nav>
    );
};