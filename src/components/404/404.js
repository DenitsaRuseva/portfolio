import React from 'react';
import './404.css';
import {ReactComponent as Image} from 'assets/images/dont-know-25547.svg'; 

export default function notFound(){
    return <div className='notFound'>
        <span>Page Not Found</span>
        <Image/>
    </div>
};