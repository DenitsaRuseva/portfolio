import React, { Fragment, useEffect, useReducer, useRef, useState } from 'react';
import './Layout.css';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import Logo from 'components/Logo/Logo';
import Footer from 'components/Footer/Footer';
import Gallery from 'container/Gallery/Gallery';
import About from 'components/About/About';
import Home from 'components/Home/Home';
import Contacts from 'components/Contacts/Contacts';
import {Switch, Route} from 'react-router-dom';
import GoToTopBtn from 'components/UI/GoToTopBtn/GoToTopBtn';
import NotFound from 'components/404/404';


export default function Layout() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const timerRef = useRef(false);

    useEffect(()=>{
        window.addEventListener('scroll', timer);
        return () => {
            window.removeEventListener('scroll', timer);
        }
    },[]);

   const timer = () => {
        setTimeout(listener, 100);
   };

   const listener = () => {
       if(checkPosition() && !timerRef.current){
            timerRef.current = true;
            setShowTopBtn(true);
       } else if(timerRef.current && !checkPosition()){
           timerRef.current = false;
           setShowTopBtn(false);
       };
   };

    const checkPosition = () => {
        return window.pageYOffset > window.innerHeight;
    };

    const goToTopHandler = () => {
        window.scrollTo(0,0);
    };

  


    return (
    <div className='layout'>
        <Logo/>
        <Toolbar/>
        <main>
            {/* {props.children} */}

            <Switch>
                <Route path='/gallery' render={() => <Fragment><Gallery/><GoToTopBtn show={showTopBtn} clicked={goToTopHandler}/></Fragment>}/>
                <Route path='/about' component={About}/>
                <Route path='/contacts' component={Contacts}/>
                <Route path='/' exact render={() => <Fragment><Home/><GoToTopBtn show={showTopBtn} clicked={goToTopHandler}/></Fragment>}/>
                <Route path='/' component={NotFound}/>
            </Switch>
        </main>
        <Footer/>
    </div>
    );
};

