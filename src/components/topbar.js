import * as React from "react"
import {Link} from "gatsby"
import './topbar.css'
import {IoIosMenu} from "react-icons/io";

const TopBar=() => {
    return (
        <section id="topbar">
            <Link to="https://www.ilo.org/global/lang--en/index.htm">Go to ILO main website</Link>
            <IoIosMenu size="2em" className="mobile-nav-toggle" />
        </section>
    )
}
export default TopBar