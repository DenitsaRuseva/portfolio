import React from 'react';
import './Images.css';
import ImgLoader from 'components/UI/ImgLoader/ImgLoader';


export default function images(props){

    const makeImg = (el, id) => {
        try {
            return <ImgLoader 
            key={id+props.data[el].name}
            src={props.data[el].urlSm}
            alt={props.data[el].alt}
            width={props.data[el].width}
            height={props.data[el].height}/>
        } catch(err){
            console.log(err);
            return;
        };
    };
    
    const images = Object.keys(props.data).map((el, id) => {
        return makeImg(el, id);
    });
   
    return (
        <div className='img-wrapp'>
            {props.error ? <div style={{position: 'absolute', top: '0', left: '0', right: '0', display: 'inline-block', width: '100%', textAlign: 'center'}}>{props.error.message}</div> : images}
        </div>
    );
}; 