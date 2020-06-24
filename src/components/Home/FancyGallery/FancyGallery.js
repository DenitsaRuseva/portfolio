import React, {useState} from 'react';
import Button from 'components/UI/Button/Button';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import './FancyGallery.css';
import InViewListener from 'hoc/InViewListener/InViewListener';



export default function FancyGallery(props){

    const [actveBtnIndex, setActiveBtnIndex] = useState(0);

    const toggleActiveButton = (index) => {
        setActiveBtnIndex(index);
    };

    return(
        <div className='fancyGallery'>
            <InViewListener>
                <HeaderContainer header='PORTFOLIO' subtitle='Lorem ipsum dolo sit amet'/>
                <div className='fancyGallery-buttons-container'>
                        <Button class={actveBtnIndex === 0 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(0)}>ALL</Button>
                        <Button class={actveBtnIndex === 1 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(1)}>STILL LIFE</Button>
                        <Button class={actveBtnIndex === 2 ? 'btn active' : 'btn'} clicked={() => toggleActiveButton(2)}>LANDSCAPE</Button>
                </div>
            </InViewListener>
            <div className='fancyGallery-gallery'>
                <div style={{width: '100px', height:'300px', background: 'yellow'}}></div>
                <div style={{width: '200px', height:'200px', background: 'red'}}></div>
                <div style={{width: '300px', height:'350px', background: 'blue'}}></div>
                <div style={{width: '380px', height:'300px', background: 'green'}}></div>
                <div style={{width: '330px', height:'400px', background: 'yellow'}}></div>
            </div>
        </div>
    )
};