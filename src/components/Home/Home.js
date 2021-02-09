import React from 'react';
import FancyGallery from './FancyGallery/FancyGallery';
import About from 'components/About/About';
import Carousels from 'components/UI/Carousels/Carousels';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Parallax from './Parallax/Parallax';

function Home(props) {


    const goToGalleryHandler = () => {
        props.history.push('/gallery');
    };

    return (
            <div className='home'>
                <Parallax/>
                <div className='home-content'>
                    <div className='home-gallery'>
                        <FancyGallery goToGallery={goToGalleryHandler} />
                    </div>
                    <div className='home-carousels'>
                        <InViewListener>
                            <HeaderContainer header='HEADER' subtitle='Donec varius libero purus, tristique egestas.' />
                        </InViewListener>
                        <Carousels goToGallery={goToGalleryHandler} />
                    </div>
                    <About />
                </div>
            </div>
    );
};

export default withRouter(Home);