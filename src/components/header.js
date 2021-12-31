import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import Navbar from "./navbar"
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import { useState, useLayoutEffect, useRef } from "react";


export default function Header(props) {
  const ref = useRef();
  const sticky = useStickyHeader(0);
  const headerClasses = `header d-flex fluid ${sticky ? 'sticky' : ''}`

  function useStickyHeader(offset = 150) {
    const [stick, setStick] = useState(false);

    const handleScroll = () => {
      setStick( window.scrollY > offset );
    };

    useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return(() => {
        window.removeEventListener('scroll', handleScroll);
      });
    });
    return stick;
  }
  console.log(props)

  return (
    <>
      <TopBar />
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
    </>
  )
}

