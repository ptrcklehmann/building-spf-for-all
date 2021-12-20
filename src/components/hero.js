import React from 'react'
import "./hero.css"
import {IoIosPlay} from "react-icons/io";
import TriangleIntro from '../images/triangle-intro.svg'


export default function Hero() {
    return (
        <section id="hero" className="container fluid">
            <TriangleIntro className="triangle-intro "/>
            <div className="hero-row">
                <div className="hero-heading">
                    <h1>
                    Building social protection floors for all</h1>
                    <p>ILO Global Flagship Programme</p>
                    <h2 className="h">
                    Changing the lives of millions of peopleto allow them to live a life in dignity.
                    </h2>
                </div>
                {/* <div className="right-column">
                    <div className="content">
                        <div className="hashtag">PUBLICATION</div>
                        <div>
                            <p data-aos="fade-in" className="hero-highlight">Strategy for the second phase <br /><span>2021 - 2025</span></p>
                            <a href="#" className="btn-get-started">Read our Strategy</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
