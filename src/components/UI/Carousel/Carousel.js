import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';


export default function Carousel(props){

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const showNextSlide = () => {
        const newIndex = (currentSlideIndex + 1) % props.slides.length;
        setCurrentSlideIndex(newIndex);
    };

    const showPrevSlide = () => {
        const newIndex = (currentSlideIndex + props.slides.length - 1) % props.slides.length;
        setCurrentSlideIndex(newIndex);
    };

    return (
        <div className='carousel'>
            <div className='slide-container'>
                {props.slides.map((img, i) => {
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
    );
};