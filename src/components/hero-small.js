import React from 'react'
import "./hero.css"
import {ParallaxBanner,Parallax} from 'react-scroll-parallax';
import DoubleBullet from '../images/double-bullet.svg'

export default function HeroSmall(props) {
    return (
        <>
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
                <section id="hero-small" className="container">
                <div className="hero-row">
                    <div className="hero-heading justify-items-start">
                    <DoubleBullet className="double-bullet" />
                        <h1>{props.title}</h1>
                    </div>
                </div>
                </section>
            </ParallaxBanner>
            <ParallaxBanner
                className="masthead-small-mobile"
                style={{
                    height: '50vh',
                }}
                layers={[
                    {
                        image: `${props.bgImageMobile}`,
                        amount: 0.5
                    }
                ]}
                y={[1,3]}>
                <section id="hero-small" className="container">
                <div className="hero-row">
                    <div className="hero-heading">
                    <DoubleBullet className="double-bullet" />
                        <h1>{props.title}</h1>
                    </div>
                </div>
                </section>
            </ParallaxBanner>
        </>
    )
}
