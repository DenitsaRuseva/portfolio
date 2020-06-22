import React from 'react';
import './Layout.css';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import Logo from 'components/Logo/Logo';
import Footer from 'components/Footer/Footer';


export default function Layout(props) {

    

    return (
    <div className='layout'>
        <Logo/>
        <Toolbar/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </div>
    );
};

