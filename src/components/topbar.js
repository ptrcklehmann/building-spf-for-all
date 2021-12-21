import * as React from "react"
import {Link} from "gatsby"
import './topbar.css'

const TopBar=() => {
    return (
        <section id="topbar">
            <Link to="https://www.ilo.org/global/lang--en/index.htm">Go to ILO main website</Link>
        </section>
    )
}
export default TopBar