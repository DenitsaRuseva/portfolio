import React, {Fragment} from 'react';
import './Carousels.css';
import Carousel from './Carousel/Carousel';


export default function Carousels(props){

    return (
        <Fragment>
        <div className='home-carousel'>
                        <Carousel
                        url='https://portfolio-f96f5.firebaseio.com/carousel_one.json'
                        header='FIRST HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'
                        goToGallery={props.goToGallery}
                        />
                    </div>
                    <div className='home-carousel right'>
                        <Carousel 
                        url='https://portfolio-f96f5.firebaseio.com/carousel_two.json'
                        header='SECOND HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'
                        goToGallery={props.goToGallery}
                        />
                    </div>
                    <div className='home-carousel'>
                        <Carousel 
                        url='https://portfolio-f96f5.firebaseio.com/carousel_tree.json'
                        header='THIRTH HEADER'
                        text='Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem. Lorem ipsum aklods predato ver simte amet guste rome propten apen ven little sin a dten do retnem.'
                        goToGallery={props.goToGallery}
                        />
                    </div>
                    </Fragment>
    );
};