import React, {useEffect, useRef, useState} from 'react';
import './InViewListener.css';


export default function InViewListener(props){



    const timeoutRef = useRef(null);
    const elementRef = useRef(null);

    const [showHeader, setShowHeader] = useState(false);

    let timer;

   
    function listener(){
        if(timer){
            clearTimeout(timer);
        };
        timer = setTimeout(() => {    
            if(timeoutRef.current === null && checkElementPosition(elementRef)){
                elementRef.current = true;
                removeListener();
                setShowHeader(true); 
            };
        }, 100);
    };

    function checkElementPosition(ref){
        const elementRect = ref.current.getBoundingClientRect();
        return elementRect.top + 100 < window.innerHeight && elementRect.bottom > 0;
    };

   
    function removeListener(){
        window.removeEventListener('scroll', listener);
    };

    useEffect(() => {
        window.addEventListener('scroll', listener);
        listener();
        return removeListener;
    }, []);





    const attachedClasses = ['inViewListener'];

    if(showHeader === true){
        attachedClasses.push('show-component');
    };

    return (
    <div className={attachedClasses.join(' ')} ref={elementRef}>{props.children}</div>
    );
};