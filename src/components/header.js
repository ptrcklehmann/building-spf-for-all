import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import Navbar from "./navbar"
import {IoIosPlay} from "react-icons/io";
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import {Parallax} from 'react-parallax';
import HeroSmall from "./hero-small";
import {graphql} from 'gatsby';

export default function Header(props) {

console.log(props)

  return (
    <>
      <TopBar />
      <Parallax bgImage="/images/approach/vision-and-value.jpg" bgImageAlt="Hero Image" strength={300} className='masthead-small'>
        <section className='masthead-small'>
          <div className="upper">
            <header
              id="header"
              className="d-flex align-items-center">
              <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                  <Link to="/">
                    <ILOSocpro className="logo-socpro" />
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
          <HeroSmall />
        </section>
      </Parallax>
    </>
  )
}

