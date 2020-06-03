import  React, { useState } from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import Logo from 'components/Logo/Logo';


 function Toolbar(){




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

            <div className='toolbar-border sm-only'>
                <span>MENU</span>
                <DrawerToggle clicked={toggleMenuHandler}/>
            </div>
            <NavigationItems/>
            <div className='desk-only'>
                <Logo/>
                <DrawerToggle clicked={toggleMenuHandler}/>
            </div>
           

        </div>
    );
};

export default Toolbar;