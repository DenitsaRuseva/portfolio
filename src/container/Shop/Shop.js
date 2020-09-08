import React from 'react';
import './Shop.css';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Controls from 'components/Shop/Controls/Controls';
import FancyGallery from 'components/Home/FancyGallery/FancyGallery';


export default function Shop(props){


    return(
        <div className='shop'>
            <div className='shop-header-container'>
                <InViewListener>
                    <HeaderContainer header='SHOP' subtitle='Lorem ipsum nopte bot'/>
                </InViewListener>
            </div>
            <Controls/>
            <div className='shop-gallery'></div>
        </div>
    );
};