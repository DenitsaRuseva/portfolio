import React from 'react';
import './About.css';
import aboutImg from 'assets/images/about.svg';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';

export default function about(props){

    return(
        <div className='about'>
            <img className='about-img' src={aboutImg} alt=''/>
            <HeaderContainer header='ABOUT' subtitle='Lorem ipsum dhsk kdfji kdpej' showHeader={props.showHeader}/>
        </div>
    );
};