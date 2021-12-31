import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import Navbar from "./navbar"
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import Hero from "./hero"
import {useState, useLayoutEffect, useRef} from "react";
import useViewport from './hooks/useViewport'
import {Parallax} from "react-parallax";


export default function LandingHeader(props) {
  const ref=useRef();
  const sticky=useStickyHeader(30);
  const headerClasses=`header d-flex fluid ${sticky? 'sticky':''}`
  const { width } = useViewport();
  const breakpoint = 992;

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
      {/* <div className={hiddenBar}>
      </div> */}
      <header ref={ref} className={headerClasses}>
        <div className="container d-flex align-items-between justify-content-between">
          <div className="logo me-auto">
            <Link to="/">
              <ILOSocpro className="logo-socpro" />
            </Link>
          </div>
          <Navbar />
        </div>
      </header>
      <Parallax bgImage={width < breakpoint ? '/images/building-intro-mobile.jpg' : "/images/building-intro.jpg"} strength={200}>
        <Hero />
      </Parallax>
    </>
  )
}

