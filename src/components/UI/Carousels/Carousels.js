import React, {Fragment, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './Carousels.css';
import {useInterval} from '../../../utility';
import Paragraphcontainer from 'components/UI/ParagraphContainer/ParagraphContainer';
import Button from 'components/UI/Button/Button';
import {fetchData} from '../../../utility';
import Carousel from './Carousel/Carousel';


export default function Carousels(props){

   


    return (
        <Fragment>
        <div className='home-carousel'>
                        <Carousel
                        url='https://portfolio-f96f5.firebaseio.com/carousel_one.json'
                        header='FIRST HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'
                        goToGallery={props.goToGallery}
                        />
                        {/* <div className='home-carousel-text-wrapp'>
                            <Paragraphcontainer header='FIRST HEADER'>Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.</Paragraphcontainer>
                            <Button class='btn' type='button' clicked={goToGalleryPage}>VIEW GALLERY &gt;</Button>
                        </div> */}
                    </div>
                    <div className='home-carousel right'>
                        <Carousel 
                        url='https://portfolio-f96f5.firebaseio.com/carousel_two.json'
                        header='SECOND HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'
                        goToGallery={props.goToGallery}
                        />
                    </div>
                    <div className='home-carousel'>
                        <Carousel 
                        url='https://portfolio-f96f5.firebaseio.com/carousel_tree.json'
                        header='THIRTH HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'
                        goToGallery={props.goToGallery}
                        />
                    </div>
                    </Fragment>
    );
};