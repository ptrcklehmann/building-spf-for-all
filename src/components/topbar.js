import * as React from "react"
import './topbar.css'
import Navbar from "./navbar"
import {useState,useLayoutEffect,useRef} from "react";

const TopBar=() => {
    const ref=useRef();
    const stick=useStickyHeader(0);
    const tobBarClasses=`topbar ${stick? 'sticky':''}`

    function useStickyHeader(offset=0) {
        const [stick,setStick]=useState(false);
        const handleScroll=() => {
            setStick(window.scrollY > offset);
        };
        useLayoutEffect(() => {
            window.addEventListener('scroll',handleScroll);

            return (() => {
                window.removeEventListener('scroll',handleScroll);
            });
        });
        return stick ;
    }
    return (
        <section ref={ref} className={tobBarClasses}>
            <div className="container d-flex align-items-center justify-content-between">
                <a href="https://www.ilo.org/global/lang--en/index.htm">Go to ILO main website</a>
                <Navbar />
            </div>
        </section>
    )
}
export default TopBar