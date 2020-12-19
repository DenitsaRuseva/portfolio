import React, {useEffect, useState} from 'react';
import './Gallery.css';
import HeaderContainer from 'components/UI/HeaderContainer/HeaderContainer';
import InViewListener from 'hoc/InViewListener/InViewListener';
import Controls from 'components/Shop/Controls/Controls';
import Images from 'components/Home/FancyGallery/Images/Images';
import Spinner from 'components/UI/Spinner/Spinner';
import {fetchData} from '../../utility';
import { Fragment } from 'react';


function Gallery(props){

   

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchAll(hendleResponse);
    }, []);
    
   
    const hendleResponse = (data, err) => {
        if(!err){
            setData(data);
            setLoading(false);
        } else {
            setError(err);
            setLoading(false);
        };
    };
    const filterImagesHandler = (filter, value) => {
        setLoading(true);
        const query = `https://portfolio-f96f5.firebaseio.com/all.json?orderBy="${filter}"&equalTo="${value}"`;
        fetchData(query, hendleResponse);
    };

    // const fetchData = (url, cb) => {
    //     axios.get(url)
    //     .then(res => cb(res.data))
    //     .catch(err => {console.log(err);cb(null, err)});
    // };

    const fetchAll = (cb) => {
        const url = 'https://portfolio-f96f5.firebaseio.com/all.json';
        fetchData(url, cb);
    };

    const removeFilterHandler = () => {
        fetchAll(hendleResponse);
    };
     
    return(
        <div className='gallery'>
            <div className='gallery-header-container'>
                <InViewListener>
                    <HeaderContainer header='GALLERY' subtitle='Lorem ipsum nopte bot'/>
                </InViewListener>
            </div>
            <Controls 
            onFilterImages={filterImagesHandler} 
            removeFilter={removeFilterHandler}
            />
            <div className='gallery-gallery'>
                {loading ? <Fragment><Spinner/><div className='g-img-container hidden'></div></Fragment> : 
                <Fragment>
                    <div className='spinner-container'>
                        <Spinner/>
                    </div>
                    <div className='g-img-container'>
                        <Images data={data} error={error}/>
                    </div>
                </Fragment>}
            </div>
        </div>
    );
};

export default Gallery;