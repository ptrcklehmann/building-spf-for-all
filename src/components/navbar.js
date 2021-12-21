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
import {ListGroup} from 'react-bootstrap'
import './navbar.css'

const MyNavbar=() => {
  const [show,setShow]=useState(false);
  const handleClose=() => setShow(false);
  const toggleShow=() => setShow((s) => !s);

  return (
    <>
      <nav id="navbar" className='navbar d-flex align-items-center fluid' >
        <ul>
          <li><Link className="nav-link scrollto" activeClassName="active" to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/approach" activeClassName="active" partiallyActive={true}><IoIosArrowForward className="arrow" /> Our approach</Link>
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
        <button className="mobile-nav-toggle" onClick={toggleShow}><IoIosMenu size="2em" /></button>
      </nav>
      {show&&<div class="navbar-mobile navbar">
      <div className="nav-header">
        <button className="mobile-nav-close" onClick={toggleShow}><IoIosClose size="2em" /></button>
          <ListGroup horizontal>
            <ListGroup.Item className="social-link"><a href="http://twitter.com/soc_protection"><IoLogoTwitter /></a></ListGroup.Item>
            <ListGroup.Item className="social-link"><a href="http://www.facebook.com/SPplatform"><IoLogoFacebook /></a></ListGroup.Item>
            <ListGroup.Item className="social-link"><a href="http://www.facebook.com/SPplatform"><IoLogoLinkedin /></a></ListGroup.Item>
            <ListGroup.Item className="social-link"><a href="https://www.youtube.com/channel/UCWf4KIllUoxGa3aeMf-jBvwm"><IoLogoYoutube /></a></ListGroup.Item>
            <ListGroup.Item className="social-link"><a href="https://www.youtube.com/channel/https://www.instagram.com/socialprot3ction/-jBvwm"><IoLogoInstagram /></a></ListGroup.Item>
          </ListGroup>
        </div>
        <ul>
          <li><Link className="nav-link scrollto" activeClassName="active" to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/approach" activeClassName="active" partiallyActive={true}><IoIosArrowForward className="arrow" /> Our approach</Link>
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
      </div>}
    </>
    // <Navbar expand='lg' className='navbar' >
    //     <Button onClick={toggleShow} className="mobile-nav-toggle" variant='mobile-nav-toggle'><IoIosMenu/></Button>
    //     <Navbar.Offcanvas
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="start" show={show} onHide={handleClose} backdrop={false} {...props}>
    //       <Offcanvas.Header closeButton>
    //         <ListGroup horizontal>
    //           <ListGroup.Item className="social-logo-link"><a href="http://twitter.com/soc_protection"><IoLogoTwitter /></a></ListGroup.Item>
    //           <ListGroup.Item className="social-logo-link"><a href="http://www.facebook.com/SPplatform"><IoLogoFacebook /></a></ListGroup.Item>
    //           <ListGroup.Item className="social-logo-link"><a href="http://www.facebook.com/SPplatform"><IoLogoLinkedin /></a></ListGroup.Item>
    //           <ListGroup.Item className="social-logo-link"><a href="https://www.youtube.com/channel/UCWf4KIllUoxGa3aeMf-jBvwm"><IoLogoYoutube /></a></ListGroup.Item>
    //           <ListGroup.Item className="social-logo-link"><a href="https://www.youtube.com/channel/https://www.instagram.com/socialprot3ction/-jBvwm"><IoLogoInstagram /></a></ListGroup.Item>
    //         </ListGroup>
    //       </Offcanvas.Header>
    //       <Nav.Item as='li'><Link className="nav-link" activeClassName="active" to="/">Home</Link></Nav.Item>
    //       <NavDropdown title='Our approach' className="arrow" id="offcanvasNavbarDropdown" href="/approach">
    //         <Nav.Item as='li'><Link to="/approach/vision-and-value" activeClassName="active">Vision and value proposition</Link></Nav.Item>
    //         <Nav.Item as='li'><Link to="/approach/theory-of-change" activeClassName="active">Theory of change</Link></Nav.Item>
    //         <Nav.Item as='li'><Link to="/approach/team" activeClassName="active">Our team</Link></Nav.Item>
    //       </NavDropdown>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/countries">Countries</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/results">Results</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/resources">Resources</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/partners">Partners</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/funding-gaps">Funding gaps</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto last" activeClassName="active" to="/news-and-events">News and events</Link></Nav.Item>
    //     </Navbar.Offcanvas>
    //     <Offcanvas.Body as='ul'>
    //       <Nav.Item as='li'><Link className="nav-link" activeClassName="active" to="/">Home</Link></Nav.Item>
    //       <NavDropdown as='li' title='Our approach' className="arrow" gatsby buildid="offcanvasNavbarDropdown" href="/approach">
    //         <Nav.Item as='li'><Link to="/approach/vision-and-value" activeClassName="active">Vision and value proposition</Link></Nav.Item>
    //         <Nav.Item as='li'><Link to="/approach/theory-of-change" activeClassName="active">Theory of change</Link></Nav.Item>
    //         <Nav.Item as='li'><Link to="/approach/team" activeClassName="active">Our team</Link></Nav.Item>
    //       </NavDropdown>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/countries">Countries</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/results">Results</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/resources">Resources</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/partners">Partners</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto" activeClassName="active" to="/funding-gaps">Funding gaps</Link></Nav.Item>
    //       <Nav.Item as='li'><Link className="nav-link scrollto last" activeClassName="active" to="/news-and-events">News and events</Link></Nav.Item>
    //     </Offcanvas.Body>
    // </Navbar>
  )

}
export default MyNavbar