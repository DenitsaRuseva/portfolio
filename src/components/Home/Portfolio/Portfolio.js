import React, {useState, useEffect, useRef} from 'react';
import Button from 'components/UI/Button/Button';
import TextContainer from 'components/UI/TextContainer/TextContainer';
import './Portfolio.css';


export default function Portfolio(){

    const showHeaderRef = useRef(null);
    const [showHeader, setShowHeader] = useState(false);
    const [actveBtnIndex, setActiveBtnIndex] = useState(0);

   
    function listener(){
        if(window.scrollY >= window.pageXOffset && showHeaderRef.current === null){
            showHeaderRef.current = true;
            setShowHeader(true);
            console.log('jdkfjlsdk')
        };
        
    };
    function removeListener(){
        window.removeEventListener('scroll', listener);
    };

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return removeListener;
    }, []);

    const toggleActiveButton = (index) => {
        setActiveBtnIndex(index);
    };

    const btnContClasses = ['portfolio-buttons-container'];
    if(showHeader){
        btnContClasses.push('show-btns');
    };

    return(
        <div className='portfolio'>
            <TextContainer showHeader={showHeader} header='PORTFOLIO' subtitle='Lorem ipsum dolo sit amet'/>
            <div className={btnContClasses.join(' ')}>
                    <Button class={actveBtnIndex === 0 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(0)}>ALL</Button>
                    <Button class={actveBtnIndex === 1 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(1)}>STILL LIFE</Button>
                    <Button class={actveBtnIndex === 2 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(2)}>LANDSCAPE</Button>
            </div>
            <div className='portfolio-gallery'></div>
        </div>
    )
};