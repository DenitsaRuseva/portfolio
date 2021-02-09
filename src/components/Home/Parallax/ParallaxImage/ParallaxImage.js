import React, {useEffect} from 'react';
import { withController, useController } from 'react-scroll-parallax';
 
function ParalaxImage(props){

    const { parallaxController } = useController();

    useEffect(()=> {
        parallaxController.update();
    });   
    return <img src={props.src} alt=''/>;
};
 
export default withController(ParalaxImage);