import React , {useEffect, useRef, useState} from 'react';
import FancyGallery from './FancyGallery/FancyGallery';
import About from 'components/About/About';
import Carousel from 'components/UI/Carousel/Carousel';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';
import './Home.css';


export default function Home(props){

    const carouselImages = ['https://cdn.pixabay.com/photo/2020/06/19/19/09/switzerland-5318548_1280.jpg',
                            'https://cdn.pixabay.com/photo/2017/08/07/06/34/weimaraner-2600694_1280.jpg',
                        'https://cdn.pixabay.com/photo/2020/06/19/08/31/haflinger-5316218_1280.jpg'];

    return(
        <div className='home'>
            <div className='home-content'>
                <div className='home-gallery'>
                    <FancyGallery/>
                </div>
                <div className='home-carousel'>
                    <InViewListener>
                        <HeaderContainer header='HEADER' subtitle='Lorem ipsum hyt koldd jekksla'  />
                    </InViewListener>
                    <Carousel slides={carouselImages}/>
                </div>
                <div className='about'>
                    <About/>
                </div>
                <div className='home-compensator'></div>
            </div>
        </div>
    );
};