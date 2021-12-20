import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import Navbar from "./navbar"
import {IoIosPlay} from "react-icons/io";
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'

export default function Header(props) {

  console.log(props)

  return (
    <>
      <TopBar />
      <header
        id="header"
        className="d-flex align-items-center justify-content-between">
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
    </>
  )
}

