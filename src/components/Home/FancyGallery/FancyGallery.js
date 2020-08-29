import React, {useState, useEffect} from 'react';
import Button from 'components/UI/Button/Button';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import './FancyGallery.css';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Images from './Images/Images';
import Spinner from 'components/UI/Spinner/Spinner';
import axios from 'axios';



export default function FancyGallery(props){

    const [actveBtnIndex, setActiveBtnIndex] = useState(4);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleActiveButton = (index) => {
        setActiveBtnIndex(index);
    };

    function errorHandler(err){
        console.log("FGallery Err: ", err);
        setLoading(false);
        setError(err);
    };

    function setNewData(data){
        console.log(data);
        setData(data);
        setLoading(false);
    };

    function fetchNatureMortes(){
        setActiveBtnIndex(0);
        if(actveBtnIndex === 0){
            setActiveBtnIndex(0);
            return;
        };
        setActiveBtnIndex(0);
        fetch('https://portfolio-f96f5.firebaseio.com/fg/natureMorte.json');
    };
    function fetchBandW(){
        if(actveBtnIndex===1){
            setActiveBtnIndex(1);
            return;
        };
        setActiveBtnIndex(1);
        fetch('https://portfolio-f96f5.firebaseio.com/fg/baw.json')
    };

    function goToGallery(){
        setActiveBtnIndex(2);
        window.alert('TO DO');
    };

    function fetch(address){
        setLoading(true);
        axios.get(address)
        .then(res => {
            setNewData(res.data)
        })
        .catch(err => errorHandler(err));
    };


    useEffect(()=>{
        fetchNatureMortes();
        // fetch('https://portfolio-f96f5.firebaseio.com/fg/natureMorte.json', (res, err) => {
        // if(!err){
        //     console.log(res.data);
        //     setData(res.data);
        //     setLoading(false);
        // } else {
        //     console.log("FGallery Err: ", err);
        //     setLoading(false);
        // };
        // });
    },[]);


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
                <HeaderContainer header='PORTFOLIO' subtitle='Lorem ipsum dolo sit amet'/>
                <div className='fancyGallery-buttons-container'>
                        <Button class={actveBtnIndex === 0 ? 'btn active' : 'btn'} clicked={() => fetchNatureMortes()}>NATURE MORTE</Button>
                        <Button class={actveBtnIndex === 1 ? 'btn active' : 'btn'} clicked={() => fetchBandW()}>B&amp;W</Button>
                        <Button class={actveBtnIndex === 2 ? 'btn active' : 'btn'} clicked={() => goToGallery()}>GO TO GALLERY</Button>
                </div>
            </InViewListener>
            <div className='fancyGallery-gallery'>
                {content}
            {/* <Images data={data}/> */}
            </div>
        </div>
    )
};