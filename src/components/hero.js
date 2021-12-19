import React from 'react'
import "./hero.css"

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-row">
                <div className="hero-box">
                    <h2 data-aos="fade-in" className="hero-heading">Changing the lives of millions of peopleto allow them to live a life in dignity.</h2>
                    <div className="right-column">
                        <div className="content">
                            <div className="hashtag">PUBLICATION</div>
                            <div>
                                <p data-aos="fade-in" className="hero-highlight">Strategy for the second phase <br /><span>2021 - 2025</span></p>
                                <a href="#" className="btn-get-started">Read our Strategy</a>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
}
