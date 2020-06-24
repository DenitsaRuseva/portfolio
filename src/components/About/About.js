import React, { Fragment } from 'react';
import './About.css';
import aboutImg from 'assets/images/about_a.png';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import ParagraphContainer from 'components/UI/ParagraphContainer/ParagraphContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';

export default function about(props){


    return(
        <Fragment>
            <div className='about-header-container'>
                <InViewListener>
                    <HeaderContainer header='ABOUT ME' subtitle='Lorem ipsum dhsk kdfji kdpej'/>
                </InViewListener>
            </div>
            <div className='about-img-container'>
                <img className='about-img' src={aboutImg} alt=''/>
            </div>
            <div className='about-text-container'>
                <InViewListener>
                    <ParagraphContainer header='A LITTLE INTRO'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</ParagraphContainer>
                    <ParagraphContainer header='MY EXIBITIONS'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor quis nostrud exercitation ullamco</ParagraphContainer>  
                </InViewListener>
            </div>
        </Fragment>
    );
};