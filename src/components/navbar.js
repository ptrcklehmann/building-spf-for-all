import React from 'react'
import {Link} from 'gatsby'
import {IoIosArrowForward} from "react-icons/io";

import './navbar.css'

const Navbar = () => {
  return (
    <nav id="navbar"  className='navbar d-flex align-items-center fluid' >
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