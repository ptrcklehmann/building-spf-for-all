import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import NewNavbar from "./newNavbar"
// import {IoIosPlay} from "react-icons/io";
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import { useState, useLayoutEffect, useRef } from "react";


export default function Header(props) {
  const ref = useRef();
  const sticky = useStickyHeader(30);
  const headerClasses = `header d-flex fluid ${sticky ? 'sticky' : ''}`
  const hiddenBar = `hidden-bar ${sticky? 'active':''}`

  function useStickyHeader(offset = 0) {
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
      <div className={hiddenBar}>
      </div>
      <header ref={ref} className={headerClasses}>
        <div className="container d-flex align-items-between justify-content-between">
          <div className="logo me-auto">
            <Link to="/">
              <ILOSocpro className="logo-socpro" />
            </Link>
          </div>
          <NewNavbar />
          </div>
      </header>
    </>
  )
}

