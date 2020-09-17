import React, {Fragment, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';
import {useInterval} from '../../../utility';
import Paragraphcontainer from 'components/UI/ParagraphContainer/ParagraphContainer';
import Button from 'components/UI/Button/Button';
import {fetchData} from '../../../utility';


export default function Carousel(props){

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetchData(props.url, (data, err) => {
            if(!err){
                setSlides(data);
            }
        })
    }, []);
        
    const showNextSlide = () => {
        const newIndex = (currentSlideIndex + 1) % slides.length;
        setCurrentSlideIndex(newIndex);
    };

    const showPrevSlide = () => {
        const newIndex = (currentSlideIndex + slides.length - 1) % slides.length;
        setCurrentSlideIndex(newIndex);
    };

    useInterval(() => {
        showNextSlide();
    }, 4000);

    console.log('slides:', slides)
    return (
        <Fragment>
        <div className='carousel'>
            <div className='slide-container'>
                {slides.map((img, i) => {
                    if(i === currentSlideIndex){
                        return <img key={i+'key'} className='slide current' src={img} alt=''/>
                    } return <img key={i+'key'} className='slide' src={img} alt=''/>
                })}
            </div>
            <div className='arrow left' onClick={showPrevSlide}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
            <div className='arrow right' onClick={showNextSlide}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </div>
            <div className='home-carousel-text-wrapp'>
            <Paragraphcontainer header={props.header}>{props.text}</Paragraphcontainer>
            <Button class='btn' type='button' clicked={props.goToGallery}>VIEW GALLERY &gt;</Button>
        </div>
        </Fragment>
    );
};