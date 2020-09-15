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
                        <Carousel 
                        url='https://portfolio-f96f5.firebaseio.com/carousel_one.json'
                        header='FIRST HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'/>
                        {/* <div className='home-carousel-text-wrapp'>
                            <Paragraphcontainer header='FIRST HEADER'>Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.</Paragraphcontainer>
                            <Button class='btn' type='button' clicked={goToGalleryPage}>VIEW GALLERY &gt;</Button>
                        </div> */}
                    </div>
                    <div className='home-carousel right'>
                        <Carousel 
                        url='https://portfolio-f96f5.firebaseio.com/carousel_two.json'
                        header='SECOND HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'/>
                    </div>
                    <div className='home-carousel'>
                        <Carousel 
                        url='https://portfolio-f96f5.firebaseio.com/carousel_tree.json'
                        header='THIRTH HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'/>
                    </div>
                 </div>
                    <About/>
                <div className='home-compensator'></div>
            </div>
        </div>
    );
};