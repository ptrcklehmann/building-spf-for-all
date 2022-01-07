import React from 'react'
import "./hero.css"
import DoubleBullet from '../images/double-bullet.svg'
import {BsChevronDoubleDown} from "react-icons/bs";


export default function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <article className="uuper_box hero-heading container">
                {/* <DoubleBullet className="double-bullet" /> */}
                    <h1>Building social <br />protection  floors for all</h1>
                    <h2>ILO Global Flagship Programme</h2>
                    <h3>
                        <mark>
                            Changing the lives of millions of people  <br /> to allow them to live a life in dignity.
                        </mark>
                    </h3>
                </article>
                <a href="#about" className='arrows' data-bs-toggle="tooltip" data-bs-placement="top" title="Learn more" >
                    <BsChevronDoubleDown />
                </a>
                <small class="strong-copyright">Photo: Marcel Crozet</small>
            </div>
        </section>

    )
}
