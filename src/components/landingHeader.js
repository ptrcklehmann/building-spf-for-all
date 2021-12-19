import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import Navbar from "./navbar"
import {IoIosPlay} from "react-icons/io";
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import Hero from "./hero"
import { Parallax } from 'react-parallax';

export default function LandingHeader(props) {
  console.log(props)
  return (
    <>
      <TopBar />
      <Parallax bgImage="/images/slide.jpg" bgImageAlt="Hero Image" strength={400} className="masthead">
        <section className='masthead'>
         <div className="upper">
          <header
          id="header"
          className="d-flex align-items-center">
          <div className="container d-flex align-items-center">
            <div className="logo me-auto">
              <Link to="/">
                <ILOSocpro className="logo-socpro"/>
              </Link>
            </div>
            <div className="headline">
              <h1><IoIosPlay className="tri-bullet" />Building social protection floors for all</h1>
              <p>ILO Global Flagship Programme</p>
            </div>
          </div>
        </header>
        <Navbar />
        </div>
          <Hero />
          </section>
      </Parallax>
    </>
  )
}

