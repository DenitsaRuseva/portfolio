import React , {useEffect, useRef, useState} from 'react';
import FancyGallery from './FancyGallery/FancyGallery';
import About from 'components/About/About';
import './Home.css';


export default function Home(props){

    const showHeaderRef = useRef(null); //timeout
    const showAboutRef = useRef(null);  //timeout
    const aboutRef = useRef(null);

    const [showGalleryHeader, setShowGalleryHeader] = useState(false);
    const [showAboutHeader, setShowAboutHeaderHeader] = useState(false);

  

    let firstTimer;
    let secondTimer;

   
    function listenerOne(){
        if(firstTimer){
            clearTimeout(firstTimer);
        };
        firstTimer = setTimeout(() => {    
            if(window.scrollY >= window.innerHeight/4 && showHeaderRef.current === null){
                showHeaderRef.current = true;
                removeListenerOne();
                window.addEventListener('scroll', listenerTwo);
                setShowGalleryHeader(true);
            };
        }, 100);
    };

    function listenerTwo(){
        if(secondTimer){
            clearTimeout(secondTimer);
        }
        secondTimer = setTimeout(() => {
        const theHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        if(showAboutRef.current === null && (theHeight - window.scrollY - window.innerHeight < aboutRef.current.getBoundingClientRect().height)){
            showAboutRef.current = true;
            removeListenerTwo();
            setShowAboutHeaderHeader(true);
        };
        }, 100)
        
    };
    function removeListenerOne(){
        window.removeEventListener('scroll', listenerOne);
    };
    function removeListenerTwo(){
        window.removeEventListener('scroll', listenerTwo);
    };
    function removeAllListeners(){
        window.removeEventListener('scrool', listenerOne);
        window.removeEventListener('scroll', listenerTwo);
    }

    useEffect(() => {
        window.addEventListener('scroll', listenerOne);
        return removeAllListeners;
    }, []);




    return(
        <div className='home'>

            <div className='home-content'>
                <FancyGallery showHeader={showGalleryHeader}/>
                <div className='about' ref={aboutRef}>
                    <About showHeader={showAboutHeader}/>
                </div>
                <div className='home-compensator'></div>
            </div>

        </div>
    );
};