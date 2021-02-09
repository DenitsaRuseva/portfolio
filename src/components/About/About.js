import React from 'react';
import './About.css';
import {ReactComponent as AboutImage} from 'assets/images/robot.svg';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import ParagraphContainer from 'components/UI/ParagraphContainer/ParagraphContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';

export default function about(){


    return(
        <div className='about'>
            <div className='about-header-container'>
                <InViewListener>
                    <HeaderContainer header='ABOUT ME' subtitle='Morbi fermentum urna.'/>
                </InViewListener>
            </div>
            <div className='about-img-text-wrapp'>
                <div className='about-img-container'>
                    <div className='about-img-wrapp'>
                    <AboutImage/>
                    {/* <img className='about-img' src={aboutImg} alt=''/> */}
                    </div>
                </div>
                <div className='about-text-container'>
                    <InViewListener>
                        <ParagraphContainer header='ABOUT'>
                            <p>The creator of this app is looking for a job.</p>

                        </ParagraphContainer>
                        <ParagraphContainer header='THANKS'>
                        <p>All of the beautiful images are <a href='https://www.facebook.com/profile.php?id=100013766258333'>Ivan Slizov`s</a> creations.
                        <br></br> Thank you, old friend!</p>          
                        <p>The charming robot is <a href='https://pixabay.com/users/mosrod-3283393/'>Mosrod`s.</a> 
                        </p>                        
                        </ParagraphContainer>
                    </InViewListener>
                </div>
            </div>
        </div>
    );
};


