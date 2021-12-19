import React from 'react'
import { useState, useLayoutEffect, useRef } from "react";
import {Link} from 'gatsby'
import {IoIosArrowForward} from "react-icons/io";

import './navbar.css'

const Navbar = () => {
  const ref = useRef();
  const sticky = useStickyNavbar(140);
  const navClasses = `col-lg-12 navbar d-flex justify-content-center align-items-center fluid ${sticky ? 'sticky' : ''}`

  function useStickyNavbar(offset = 0) {
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
  return (
    <nav id="navbar" ref={ref} className={ navClasses } >
          <ul>
              <li><Link className="nav-link scrollto" activeClassName="active" to="/">Home</Link></li>
              <li className="dropdown">
                <Link to="/approach" activeClassName="active"  partiallyActive={true}><IoIosArrowForward className="arrow" /> Our approach</Link>
                  <ul>
                      <li><Link to="/approach/vision-and-value" activeClassName="active">Vision and value proposition</Link></li>
                      <li><Link to="/approach/theory-of-change" activeClassName="active">Theory of change</Link></li>
                      <li><Link to="/approach/team" activeClassName="active">Our team</Link></li>
                  </ul>
              </li>
              <li><Link className="nav-link scrollto" activeClassName="active" to="/countries">Countries</Link></li>
              <li><Link className="nav-link scrollto" activeClassName="active" to="/results">Results</Link></li>
              <li><Link className="nav-link scrollto" activeClassName="active" to="/resources">Resources</Link></li>
              <li><Link className="nav-link scrollto" activeClassName="active" to="/partners">Partners</Link></li>
              <li><Link className="nav-link scrollto" activeClassName="active" to="/funding-gaps">Funding gaps</Link></li>
              <li><Link className="nav-link scrollto last" activeClassName="active" to="/news-and-events">News and events</Link></li>
          </ul>
        </nav>
  )
}
export default Navbar