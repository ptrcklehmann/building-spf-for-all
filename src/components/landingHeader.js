import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import Hero from "./hero"
import useViewport from './hooks/useViewport'
import {Parallax, Background} from "react-parallax";
import {IoIosPlay} from "react-icons/io";


export default function LandingHeader(props) {
  console.log(props)
  return (
    <>
      <TopBar />
      <header className='header d-flex fluid'>
        <div className="container d-flex">
          <div className="logo">
            <Link to="/">
              <ILOSocpro className="logo-socpro" />
            </Link>
          </div>
          <div className="headline">
            <h1> <IoIosPlay className="tri-bullet" /> Building social protection floors for all</h1>
            <p>ILO Global Flagship Programme</p>
          </div>
        </div>
      </header>
      <Parallax strength={150} className="parallax-wrapper">
        <Background className="hero-image-filter">
          <div style={{
              backgroundImage: 'url(/images/main-hero-01.jpg)',
              width: '100vw',
              height: '95vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              WebkitClipPath: 'polygon(0 0,100% 0,100% calc(100% - 60px),0 100%)',
              clipPath: 'polygon(0 0,100% 0,100% calc(100% - 60px),0 100%)'
        }}  />
          </Background>
          <Hero />
        </Parallax>
        </>
        )
}

