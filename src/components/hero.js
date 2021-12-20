import React from 'react'
import "./hero.css"
import TriangleIntro from '../images/triangle-intro.svg'
import {Parallax} from 'react-scroll-parallax';


export default function Hero() {
    return (
        <section id="hero" className="container fluid">
            <Parallax y={[-80, 50]} className="triangle-intro">
            <TriangleIntro />
            </Parallax>
            <div className="hero-row">
                <div className="hero-heading">
                    <h1>Building social protection floors for all</h1>
                    <h2>ILO Global Flagship Programme</h2>
                    <p><mark>Changing the lives of millions of peopleto allow them to live a life in dignity.
                    </mark></p>
                </div>
            </div>
        </section>
    )
}
