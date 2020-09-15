import React from 'react';
import FancyGallery from './FancyGallery/FancyGallery';
import About from 'components/About/About';
import Carousel from 'components/UI/Carousel/Carousel';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Paragraphcontainer from 'components/UI/ParagraphContainer/ParagraphContainer';
import Button from 'components/UI/Button/Button';
import './Home.css';


export default function home(){


    const goToGalleryPage = () => {
        
    };

    const carouselImages = ['https://cdn.pixabay.com/photo/2020/06/19/19/09/switzerland-5318548_1280.jpg',
                            'https://cdn.pixabay.com/photo/2017/08/07/06/34/weimaraner-2600694_1280.jpg',
                        'https://cdn.pixabay.com/photo/2020/06/19/08/31/haflinger-5316218_1280.jpg'];

    return(
        <div className='home'>
            <div className='home-content'>
                <div className='home-gallery'>
                    <FancyGallery/>
                </div>
                <div className='home-carousels'>
                    <InViewListener>
                        <HeaderContainer header='HEADER' subtitle='Donec varius libero purus, tristique egestas.'  />
                    </InViewListener>
                    <div className='home-carousel'>
                        <Carousel slides={carouselImages}/>
                        <div className='home-carousel-text-wrapp'>
                            <Paragraphcontainer header='FIRST HEADER'>Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.</Paragraphcontainer>
                            <Button class='btn' type='button' clicked={goToGalleryPage}>VIEW GALLERY &gt;</Button>
                        </div>
                    </div>
                    <div className='home-carousel right'>
                        <Carousel slides={carouselImages}/>
                        <div className='home-carousel-text-wrapp'>
                            <Paragraphcontainer header='SECOND HEADER'>Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.</Paragraphcontainer>
                            <Button class='btn'type='button'  clicked={goToGalleryPage}>VIEW GALLERY &gt;</Button>
                        </div>
                    </div>
                    <div className='home-carousel'>
                        <Carousel slides={carouselImages}/>
                        <div className='home-carousel-text-wrapp'>
                            <Paragraphcontainer header='THIRTH HEADER'>Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.</Paragraphcontainer>
                            <Button class='btn' type='button' clicked={goToGalleryPage}>VIEW GALLERY &gt;</Button>
                        </div>
                    </div>
                 </div>
                    <About/>
                <div className='home-compensator'></div>
            </div>
        </div>
    );
};