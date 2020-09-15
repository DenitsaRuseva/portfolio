import React, {useState, useEffect} from 'react';
import Button from 'components/UI/Button/Button';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import './FancyGallery.css';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Images from './Images/Images';
import Spinner from 'components/UI/Spinner/Spinner';
import axios from 'axios';
import {fetchData} from '../../../utility';



export default function FancyGallery(props){

    const [actveBtnIndex, setActiveBtnIndex] = useState(4);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    function goToGallery(){
        setActiveBtnIndex(2);
        window.alert('TO DO');
    };

    useEffect(()=>{
        const url = 'https://portfolio-f96f5.firebaseio.com/all.json?orderBy="category"&equalTo="coll_one"'
        fetchData(url, handleResponse);
    },[]);



    const showCollectionHandler = (collection) => {
        setLoading(true);
        const url = `https://portfolio-f96f5.firebaseio.com/all.json?orderBy="category"&equalTo="${collection}"`;
        fetchData(url, handleResponse);
    };

    const handleResponse = (data, err) => {
        if(!err){
            setData(data);
            setLoading(false);
        } else {
            setError(err);
            setData(data);
        };
    };


    console.log("data: ", data);
    let content = <Spinner/>;
    if(!loading){
        content = <Images data={data}/>;
    };
    if(error){
    content = <div>{error.message}</div>
    };
    const images = loading ? <Spinner/> : <Images data={data}/>;
    return(
        <div className='fancyGallery'>
            <InViewListener>
                <HeaderContainer header='GALLERY' subtitle='Donec in metus facilisis, vulputate.'/>
                <div className='fancyGallery-buttons-container'>
                        <Button class={actveBtnIndex === 0 ? 'btn active' : 'btn'} clicked={() => showCollectionHandler('coll_one')}>COLLECTION ONE</Button>
                        <Button class={actveBtnIndex === 1 ? 'btn active' : 'btn'} clicked={() => showCollectionHandler('coll_two')}>COLLECTION TWO</Button>
                        <Button class={actveBtnIndex === 2 ? 'btn active' : 'btn'} clicked={() => goToGallery()}>GO TO GALLERY</Button>
                </div>
            </InViewListener>
            <div className='fancyGallery-gallery'>
                {content}
            </div>
        </div>
    )
};