import * as React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import Navbar from "./navbar"
import "./header.css"
import ILOSocpro from '../images/ILO_socpro.svg'
import {useState,useLayoutEffect,useRef} from "react";
import {IoIosPlay} from "react-icons/io";


export default function Header() {

  return (
    <>
      <TopBar />
      <header className='header d-flex fluid'>
        <div className="container ">
          <div className="logo me-auto">
            <Link to="/">
              <ILOSocpro className="logo-socpro" />
            </Link>
          </div>
          <div className="headline ms-auto ">
               <h1> <IoIosPlay className="tri-bullet" /> Building social protection floors for all</h1>
               <p>ILO Global Flagship Programme</p>
          </div>
        </div>
      </header>
    </>
  )
}

