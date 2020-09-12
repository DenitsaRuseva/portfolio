import React, {useEffect, useState} from 'react';
import './Shop.css';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Controls from 'components/Shop/Controls/Controls';
import axios from 'axios';
import Images from 'components/Home/FancyGallery/Images/Images';
import {withRouter, Route} from 'react-router-dom';


function Shop(props){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-f96f5.firebaseio.com/all.json?orderBy="name"')
        .then(res => {
            setData(res.data)
        })
        .catch(err => console.log(err));
    }, []);
    
    
    return(
        <Route path='/shop' render={() => {
            return (<div className='shop'>
            <div className='shop-header-container'>
                <InViewListener>
                    <HeaderContainer header='GALLERY' subtitle='Lorem ipsum nopte bot'/>
                </InViewListener>
            </div>
            <Controls onFilterImages={() => {}}/>
            <div className='shop-gallery'>
                <Images data={data}/>
            </div>
        </div>
            )}}/>
       
    );
};

export default withRouter(Shop);