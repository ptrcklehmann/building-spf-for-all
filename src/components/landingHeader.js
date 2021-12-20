import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import Navbar from "./navbar"
import {IoIosPlay} from "react-icons/io";
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import Hero from "./hero"
import {ParallaxBanner} from 'react-scroll-parallax';


export default function LandingHeader(props) {
  console.log(props)
  return (
    <>
      <TopBar />
      <header id="header" className="d-flex fluid ">
        <div className="container d-flex align-items-between justify-content-between">
          <div className="logo me-auto">
            <Link to="/">
              <ILOSocpro className="logo-socpro" />
            </Link>
          </div>
          <Navbar />
          </div>
          {/* <div className="headline">
            <h1>Building social protection floors for all</h1>
            <p>ILO Global Flagship Programme</p>
          </div> */}
      </header>
      <ParallaxBanner
        className="masthead"
        style={{
          height: '100%',
        }}
        layers={[
          {
            image: "/images/building-intro.jpg",
            amount: 0.2
          }
        ]}
        y={[1,3]}>
        <Hero />
      </ParallaxBanner>
    </>
  )
}

