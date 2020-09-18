import  React, { useState, useRef, useEffect } from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import Logo from 'components/Logo/Logo';


 function Toolbar(){

    const timeoutRef = useRef(null);

    const [showShadow, setShowSadow] = useState(false);

    let timer;

   
    function listenerOne(){
        if(timer){
            clearTimeout(timer);
        };
        timer = setTimeout(() => {    
            if(timeoutRef.current === null && checkElementPosition()){
                removeListenerOne();
                setShowSadow(true); 
            };
        }, 100);
    };

    function checkElementPosition(){
        return window.scrollY >= 90;
    };

    function checkElementPositionTwo(){
        return window.scrollY <= 10;
    };

   
    function removeListenerOne(){
        window.removeEventListener('scroll', listenerOne);
        window.addEventListener('scroll', listenerTwo);
    };

    function removeListenerTwo(){
        window.removeEventListener('scroll', listenerTwo);
        window.addEventListener('scroll', listenerOne);
    };


    function listenerTwo(){
        if(timer){
            clearTimeout(timer);
        };
        timer = setTimeout(() => {    
            if(timeoutRef.current === null && checkElementPositionTwo()){
                removeListenerTwo();
                setShowSadow(false); 
            };
        }, 100);
    };




    function removeAllListeners(){
        window.removeEventListener('scroll', listenerOne);
        window.removeEventListener('scroll', listenerTwo);
    };

    useEffect(() => {
        listenerOne();
        window.addEventListener('scroll', listenerOne);
        return removeAllListeners;
    }, []);






    const [showMenu, setShowMenu] = useState(false);

    const toggleMenuHandler = () => {
        setShowMenu(prevState => {
            return !prevState;
        });
    };


    const attachedClasses = ['toolbar'];
    if(showMenu){
        attachedClasses.push('show-menu')
    };

    return(
        <div className={attachedClasses.join(' ')}>

            <div className='toolbar-border sm-only' onClick={toggleMenuHandler}>
                <span>MENU</span>
                <DrawerToggle 
                // clicked={toggleMenuHandler}
                />
            </div>
            <NavigationItems clicked={toggleMenuHandler}/>
            <div className={showShadow ? 'desk-only shadow' : 'desk-only no-shadow'}>
                <Logo/>
                <DrawerToggle clicked={toggleMenuHandler}/>
            </div>
        </div>
    );
};

export default Toolbar;