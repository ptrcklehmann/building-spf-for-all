import React from 'react'
import "./hero.css"
import {ParallaxBanner} from 'react-scroll-parallax';


export default function HeroSmall(props) {
    return (
        <section id="hero-small">
            <ParallaxBanner
                className="masthead-small"
                style={{
                    height: '50vh',
                }}
                layers={[
                    {
                        image: `${props.bgImage}`,
                        amount: 0.5
                    }
                ]}
                y={[1,3]}>
                <div className="hero-row">
                    <h1 className="hero-heading">{props.title}</h1>
                    <div className="right-column"></div>
                </div>
            </ParallaxBanner>
        </section>
    )
}
