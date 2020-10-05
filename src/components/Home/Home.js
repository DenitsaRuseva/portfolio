import React from 'react';
import FancyGallery from './FancyGallery/FancyGallery';
import About from 'components/About/About';
import Carousels from 'components/UI/Carousels/Carousels';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Paragraphcontainer from 'components/UI/ParagraphContainer/ParagraphContainer';
import Button from 'components/UI/Button/Button';
import './Home.css';


export default function home(props){


    const goToGalleryHandler = () => {
        props.history.push('/gallery');
    };


    return(
        <div className='home'>
            <div className='home-content'>
                <div className='home-gallery'>
                    <FancyGallery goToGallery={goToGalleryHandler}/>
                </div>
                <div className='home-carousels'>
                    <InViewListener>
                        <HeaderContainer header='HEADER' subtitle='Donec varius libero purus, tristique egestas.'  />
                    </InViewListener>
                    <Carousels/>
                    
                 </div>
                    <About/>
            </div>
        </div>
    );
};