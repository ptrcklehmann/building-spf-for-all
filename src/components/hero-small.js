import React from 'react'
import "./hero.css"
import {Parallax} from "react-parallax";
import DoubleBullet from '../images/double-bullet.svg'
import useViewport from './hooks/useViewport'

export default function                  (props) {
    const { width } = useViewport();
    const breakpoint = 992;
    return (
        <>
            <Parallax bgImage={width < breakpoint ? props.bgImageMobile : props.bgImage} strength={-200}>
                <section id="hero-small" className="container">
                    <div className="hero-row">
                        <div className="hero-heading justify-items-start">
                            <DoubleBullet className="double-bullet" />
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                </section>
            </Parallax>
            {/* <Parallax bgImage={props.bgImageMobile} strength={-300}>
                <section id="hero-small" className="container">
                    <div className="hero-row">
                        <div className="hero-heading">
                            <DoubleBullet className="double-bullet" />
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                </section>
            </Parallax> */}
        </>
    )
}
