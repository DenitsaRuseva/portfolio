import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParalaxImage from './ParallaxImage/ParallaxImage';
import background from '../../../assets/images/21752617_313159862486220_2846810308660514837_o.jpg';
import './Parallax.css';
import { Fragment } from 'react';



const ParallaxComponent = () => {
    
    return (
        <Fragment>
            <div className='parallax-wrapp'>
                <Parallax
                    styleOuter={{ position: 'relative', width: '100%', height: '100%' }}
                    styleInner={{ position: 'relative', width: '100%', height: '100%', top: '-40%'}}
                    y={[40, -40]}
                >
                    <ParalaxImage src={background} />
                </Parallax>
                <div  className='parallax-text-container'>
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[170, -100]}>P</Parallax>
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[170, -100]}>O</Parallax>
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[170, -100]}>R</Parallax>
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[170, -100]}>T</Parallax>
                   
                    <span className='f-border'><span className='f'><span className='ff'>F</span></span></span>
                   
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[-115, 160]}>O</Parallax>
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[-115, 160]}>L</Parallax>
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[-115, 160]}>I</Parallax>
                    <Parallax  styleOuter={{ display: 'inline-block'}} x={[-115, 160]}>O</Parallax>
                </div>

            </div>
        </Fragment>
    );
};

export default ParallaxComponent;







