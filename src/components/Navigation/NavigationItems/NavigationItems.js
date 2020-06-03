import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { CSSTransitionGroup } from 'react-transition-group';

export default function(props){
    return(
        <nav className='navigation-items'>
            {/* <CSSTransitionGroup> */}
            <NavigationItem link='/'>HOME</NavigationItem>
            <NavigationItem link='/link1' >LINK1</NavigationItem>
            <NavigationItem link='/link2' >LINK2</NavigationItem>
            <NavigationItem link='/about'>ABOUT</NavigationItem>
            {/* </CSSTransitionGroup> */}
        </nav>
    );
};