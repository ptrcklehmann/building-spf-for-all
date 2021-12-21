import React from 'react'
import "./hero.css"
import DoubleBullet from '../images/double-bullet.svg'
import {Parallax} from 'react-scroll-parallax';


export default function Hero() {
    return (
        <section id="hero" className="container">
            <div className="hero-row">
                <div className="hero-heading">
                    <DoubleBullet className="double-bullet" />
                    <h1>Building social protection floors for all</h1>
                    <h2>ILO Global Flagship Programme</h2>
                    <h3><mark>Changing the lives of millions of peopleto allow them to live a life in dignity.
                    </mark></h3>
                    <a href="#about">
                    <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
