import React from 'react';
import './Images.css';


export default function images(props){
    console.log(props.data);

    const makeImg = (el, id) => {
        try {
            return (
                <div key={id+props.data[el].name} className='fg-item-container'>
                    <img  className='fg-item' src={props.data[el].urlSm} alt={props.data[el].name}/>
                    <span>{props.data[el].id}</span>
                    <br></br>
                    <span>{props.data[el].colour}</span>
                </div>
            );
        } catch(err){
            console.log(err);
            return;
        };
    };
    
    const images = Object.keys(props.data).map((el, id) => {
        return makeImg(el, id);
    });

    
    // const imagesArr = [];
    // for(let i = 0; i < idsArr.length; i++){
    //     try{
    //         imagesArr.push(
    //         <div key={i+props.data[i].name} className='fg-item-container'>
    //             <img  className='fg-item' src={props.data[i].urlSm} alt={props.data[i].name}/>
    //         <span>{props.data[i].id}</span>
    //         <br></br>
    //         <span>{props.data[i].colour}</span>
    //         </div>)
    //     }
    //      catch(err) {
    //         console.log(err);
    //     }
        
    // };
   
    return (
        <div className='fg-wrapp'>
            {images}
        </div>
    );
}; 