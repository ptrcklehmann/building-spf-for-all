import React from 'react'
import ILOLogo from '../images/ILO_logo.svg'
import {IoIosPlay} from "react-icons/io";
import {Link} from "gatsby"
import './footer.css'

export default function Footer() {
    return (
        <footer id="footer ">
            <div className="footer-top ">
                <div className="container ">
                    <div className="row px-lg-4 px-md-3 px-sm-2 ">
                        <div className="col-lg-7 col-md-6 footer-info ">
                            <p>
                                Contact us: <Link to="mailto:socpro@ilo.org ">socpro@ilo.org</Link>
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 footer-links ">
                            <ul>
                                <li><Link href="# ">Copyright</Link></li>
                                <li><Link to="# ">Privacy policy</Link></li>
                                <li><Link to="# ">Fraud alert</Link></li>
                                <li><Link to="# ">Disclaimer</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row divider px-lg-4 ">
                        <div className="col-lg-6 col-md-6 py-lg-3 py-md-2 py-sm-1 ">
                            <Link to="https://www.ilo.org/global/lang--en/index.htm">
                                <ILOLogo className="logo-ilo"/>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 footer-newsletter py-lg-3 py-md-2 ">
                            <div className="headline ">
                                <h1>
                                <IoIosPlay className="tri-bullet" /> Advancing social justice, promoting decent work
                                </h1>
                                <p>ILO is a specialized agency of the United Nations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
