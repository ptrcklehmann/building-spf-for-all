import React,{useState} from 'react'
import {Link} from 'gatsby'
import {
  IoIosArrowForward,
  IoIosMenu,IoLogoTwitter,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoInstagram,
  IoIosClose
} from "react-icons/io";
import './navbar.css'


const NewNavbar=() => {
  const [show,setShow]=useState(false);
  const handleClose=() => setShow(false);
  const toggleShow=() => setShow((s) => !s);
  return (
    <>
    <nav id="navbar" className='navbar navbar-expand-lg'>
      <div className='container px-0'>
        <button className='btn navbar-toggler' type='button' onClick={toggleShow} data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
          <IoIosMenu size="2em" />
        </button>
        <div className={`offcanvas offcanvas-start-lg ${show? 'show':''}`} tabindex='-1' id='offcanvasExample'
          aria-labelledby='offcanvasExampleLabel' style={show? {visibility: 'visible'}:{visibility: 'hidden'}} aria-modal={show} role={show&&'dialog'} aria-hidden={show? false:true}>
          <div className='offcanvas-header d-flex d-lg-none'>
            <button type="button"
              onClick={handleClose}
              className='navbar-close'
              data-bs-dismiss='offcanvas'
              aria-label='close'>
              <IoIosClose size="2em" />
            </button>
            <ul className='social-reach'>
              <li className="social-link"><a href="http://twitter.com/soc_protection"><IoLogoTwitter /></a></li>
              <li className="social-link"><a href="http://www.facebook.com/SPplatform"><IoLogoFacebook /></a></li>
              <li className="social-link"><a href="http://www.facebook.com/SPplatform"><IoLogoLinkedin /></a></li>
              <li className="social-link"><a href="https://www.youtube.com/channel/UCWf4KIllUoxGa3aeMf-jBvwm"><IoLogoYoutube /></a></li>
              <li className="social-link"><a href="https://www.youtube.com/channel/https://www.instagram.com/socialprot3ction/-jBvwm"><IoLogoInstagram /></a></li>
            </ul>
          </div>
          <div className='offcanvas-body p-lg-0'>
            <ul className='navbar-nav'>
              <li className='nav-item'><Link className="nav-link" activeClassName="active" to="/">Home</Link></li>
              <li className="nav-item dropdown">
                <Link to="/approach" activeClassName="active" partiallyActive={true} className='nav-link dropdown-toggle'>
                  Our approach <IoIosArrowForward className="arrow" /></Link>
                <ul className='dropdown-menu'>
                  <li><Link to="/approach/vision-and-value" className='dropdown-item' activeClassName="active">Vision and value proposition</Link></li>
                  <li><Link to="/approach/theory-of-change" className='dropdown-item' activeClassName="active">Theory of change</Link></li>
                  <li><Link to="/approach/team" className="dropdown-item" activeClassName="active">Our team</Link></li>
                </ul>
              </li>
              <li className='nav-item'><Link className="nav-link" activeClassName="active" to="/countries">Countries</Link></li>
              <li className='nav-item'><Link className="nav-link" activeClassName="active" to="/results">Results</Link></li>
              <li className='nav-item'><Link className="nav-link" activeClassName="active" to="/resources">Resources</Link></li>
              <li className='nav-item'><Link className="nav-link" activeClassName="active" to="/partners">Partners</Link></li>
              <li className='nav-item'><Link className="nav-link" activeClassName="active" to="/funding-gaps">Funding gaps</Link></li>
              <li className='nav-item'><Link className="nav-link last" activeClassName="active" to="/news-and-events">News and events</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
export default NewNavbar
