import React, {useState, useEffect, Fragment} from 'react';
import Button from 'components/UI/Button/Button';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import './FancyGallery.css';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Images from './Images/Images';
import Spinner from 'components/UI/Spinner/Spinner';
import {fetchData} from '../../../utility';



export default function FancyGallery(props){

    const [actveBtnIndex, setActiveBtnIndex] = useState(4);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    function goToGallery(){
        setActiveBtnIndex(2);
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


    let content = <Fragment><div className='spinner-container'><Spinner/></div><div className='g-img-container hidden'></div></Fragment>;
    if(!loading){
        content = (
        <Fragment>
        <div className='spinner-container'>
            <Spinner/>
        </div>
        <div className='g-img-container'>
            <Images data={data} error={error}/>
        </div>
        </Fragment>);
    };
    // if(error){
    // content = <div>{error.message}</div>
    // };
    return(
        <div className='fancyGallery'>
            <InViewListener>
                <HeaderContainer header='GALLERY' subtitle='Donec in metus facilisis, vulputate.'/>
                <div className='fancyGallery-buttons-container'>
                        <Button class={actveBtnIndex === 0 ? 'btn active' : 'btn'} clicked={() => showCollectionHandler('coll_one')}>COLLECTION ONE</Button>
                        <Button class={actveBtnIndex === 1 ? 'btn active' : 'btn'} clicked={() => showCollectionHandler('coll_two')}>COLLECTION TWO</Button>
                        <Button class={actveBtnIndex === 2 ? 'btn active' : 'btn'} clicked={() => {goToGallery(); props.goToGallery()}}>GO TO GALLERY</Button>
                </div>
            </InViewListener>
            <div className='fancyGallery-gallery'>
                {content}
            </div>
        </div>
    )
};