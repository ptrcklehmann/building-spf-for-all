import React from 'react'
import "./hero.css"
import DoubleBullet from '../images/double-bullet.svg'
import {Parallax} from 'react-scroll-parallax';
import { BsChevronDoubleDown } from "react-icons/bs";
import Tooltip from 'rc-tooltip';


export default function Hero() {


    return (
        <>

        <section id="hero" className="container">
            <div className="hero-row">
                <div className="hero-heading">
                    <DoubleBullet className="double-bullet" />
                    <h1>Building social protection floors for all</h1>
                    <h2>ILO Global Flagship Programme</h2>
                    <h3><mark>Changing the lives of millions of peopleto allow them to live a life in dignity.
                    </mark></h3>
                    <a href="#about" className='arrows' data-bs-toggle="tooltip" data-bs-placement="top" title="Learn more" >
                    <BsChevronDoubleDown/>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}
