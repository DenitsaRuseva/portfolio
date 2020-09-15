import React, {useState} from 'react';
import './ImgLoader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';


export default function ImgLoader(props){

    const [loaded, setLoaded] = useState(false);

    function onLoadHandler(){
        setLoaded(true);
    };


    const aspectRatio = (props.height / props.width)*100;

    return (
        <div className={loaded ? 'img-loader-container loaded' : 'img-loader-container fg-item-container'}>
            <img className='img' style={{width: props.width}}
            onLoad={onLoadHandler}
            src={props.src} 
            alt={props.alt} />
            <div className='loader-back'
            style={{width: props.width, paddingBottom: aspectRatio.toFixed(2).toString().concat("%")}}>
                <div className="svg-wrapp">
                    <FontAwesomeIcon icon={faCamera} size='3x'/>
                </div>
            </div>
        </div>
    );
};