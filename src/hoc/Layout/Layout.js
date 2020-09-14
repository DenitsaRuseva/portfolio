import React, { useEffect, useState } from 'react';
import './Layout.css';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import Logo from 'components/Logo/Logo';
import Footer from 'components/Footer/Footer';

import Shop from 'container/Shop/Shop';
import About from 'components/About/About';
import Home from 'components/Home/Home';
import Contacts from 'components/Contacts/Contacts';
import {Switch, Route} from 'react-router-dom';


export default function Layout() {
    return (
    <div className='layout'>
        <Logo/>
        <Toolbar/>
        <main>
            {/* {props.children} */}

            <Switch>
                <Route path='/shop' component={Shop}/>
                <Route path='/about' component={About}/>
                <Route path='/contacts' component={Contacts}/>
                <Route path='/' component={Home}/>
            </Switch>
        </main>
        <Footer/>
    </div>
    );
};

