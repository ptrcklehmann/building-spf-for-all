import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import MyNavbar from "./navbar"
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import Hero from "./hero"
import {ParallaxBanner} from 'react-scroll-parallax';
import {useState,useLayoutEffect,useRef} from "react";


export default function LandingHeader(props) {
  const ref=useRef();
  const sticky=useStickyHeader(30);
  const headerClasses=`header d-flex fluid ${sticky? 'sticky':''}`
  const hiddenBar=`hidden-bar ${sticky? 'active':''}`

  function useStickyHeader(offset=0) {
    const [stick,setStick]=useState(false);

    const handleScroll=() => {
      setStick(window.scrollY>offset);
    };

    useLayoutEffect(() => {
      window.addEventListener('scroll',handleScroll);

      return (() => {
        window.removeEventListener('scroll',handleScroll);
      });
    });
    return stick;
  }
  console.log(props)
  return (
    <>
      <TopBar />
      <div className={hiddenBar}>
      </div>
      <header ref={ref} className={headerClasses}>
        <div className="container d-flex align-items-between justify-content-between">
          <div className="logo me-auto">
            <Link to="/">
              <ILOSocpro className="logo-socpro" />
            </Link>
          </div>
          <MyNavbar />
        </div>
      </header>
      <ParallaxBanner
        className="masthead"
        style={{
          height: '100%',
          transition: 'all 0.2s ease-in-out'
        }}
        layers={[
          {
            image: "/images/building-intro.jpg",
            amount: -0.2
          },
        ]}>
        <Hero />
      </ParallaxBanner>
      <ParallaxBanner
        className="masthead-mobile"
        style={{
          height: '100%',
          transition: 'all 0.2s ease-in-out'
        }}
        layers={[
          {
            image: "/images/building-intro-mobile.jpg",
            amount: -0.2
          }
        ]}>
        <Hero />
      </ParallaxBanner>
    </>
  )
}

