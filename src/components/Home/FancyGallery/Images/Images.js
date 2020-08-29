import React from 'react';
import './Images.css';


export default function images(props){
    console.log(props.data)
    const imagesArr = [];
    for(let i = 0; i < props.data.length; i++){
        // if(i===0||i===3||i==4||i===6||i===12||i===13||i===14||i===16||i===17||i===19||i===20)
        try{
            imagesArr.push(
            <div key={i+props.data[i].name} className='fg-item-container'>
                <img  className='fg-item' src={props.data[i].urlSm} alt={props.data[i].name}/>
            </div>)
        }
         catch(err) {
            console.log(err);
        }
        
    };
    console.log(imagesArr)
    const test = props.data.length !== 0 ? (<div key='dkjflkdsjfkl' className='fg-item-container'>
    <img  className='fg-item' src={props.data[0].urlSm} alt={props.data[0].name}/>
</div>
) : null;
    return (
        <div className='fg-wrapp'>
        {imagesArr}
        </div>
    )
}; 