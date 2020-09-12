import React from 'react';
import './Images.css';


export default function images(props){
    const imagesArr = [];
    for(let i = 0; i < props.data.length; i++){
        try{
            imagesArr.push(
            <div key={i+props.data[i].name} className='fg-item-container'>
                <img  className='fg-item' src={props.data[i].urlSm} alt={props.data[i].name}/>
            {/* <span>{props.data[i].id}</span>
            <br></br>
            <span>{props.data[i].colour}</span> */}
            </div>)
        }
         catch(err) {
            console.log(err);
        }
        
    };
   
    return (
        <div className='fg-wrapp'>
            {imagesArr}
        </div>
    );
}; 