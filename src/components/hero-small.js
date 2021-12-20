import React from 'react'
import "./hero.css"
import {ParallaxBanner, Parallax} from 'react-scroll-parallax';
import TriangleIntro from '../images/triangle-intro.svg'

export default function HeroSmall(props) {
    return (
        <section id="hero-small">
            <ParallaxBanner
                className="masthead-small"
                style={{
                    height: '50vh',
                    minHeight: 'fit-content',
                }}
                layers={[
                    {
                        image: `${props.bgImage}`,
                        amount: 0.5
                    }
                ]}
                y={[1,3]}>
                <Parallax y={[-80, 50]} className="triangle-intro">
            <TriangleIntro />
            </Parallax>
            <div className="hero-row">
                <div className="hero-heading">
                    <h1>{props.title}</h1>
                </div>
            </div>
            </ParallaxBanner>
            <ParallaxBanner
                className="masthead-small-mobile"
                style={{
                    height: '50vh',
                    minHeight: 'fit-content',
                }}
                layers={[
                    {
                        image: `${props.bgImageMobile}`,
                        amount: 0.5
                    }
                ]}
                y={[1,3]}>
                <Parallax y={[-80, 50]} className="triangle-intro">
            <TriangleIntro />
            </Parallax>
            <div className="hero-row">
                <div className="hero-heading">
                    <h1>{props.title}</h1>
                </div>
            </div>
            </ParallaxBanner>

        </section>
    )
}
