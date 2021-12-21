import React,{useState} from 'react'
import {Link} from 'gatsby'
import {
  IoIosArrowForward,
  IoIosMenu,IoLogoTwitter,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoInstagram
} from "react-icons/io";
import {Navbar,Container,Nav,NavDropdown,Button,Offcanvas,Toggle,ListGroup} from 'react-bootstrap'
import './navbar.css'

const options = [
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: false,
  }]



const MyNavbar=({name, ...props}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <Navbar expand='lg' className='navbar' >
      <Container fluid>
        <Button onClick={toggleShow} className="mobile-nav-toggle" variant='mobile-nav-toggle'><IoIosMenu/></Button>
        <Offcanvas
          aria-labelledby="offcanvasNavbarLabel"
          placement="start" show={show} onHide={handleClose} backdrop={false} {...props}>
          <Offcanvas.Header closeButton>
            <ListGroup horizontal>
              <ListGroup.Item className="social-logo-link"><a href="http://twitter.com/soc_protection"><IoLogoTwitter /></a></ListGroup.Item>
              <ListGroup.Item className="social-logo-link"><a href="http://www.facebook.com/SPplatform"><IoLogoFacebook /></a></ListGroup.Item>
              <ListGroup.Item className="social-logo-link"><a href="http://www.facebook.com/SPplatform"><IoLogoLinkedin /></a></ListGroup.Item>
              <ListGroup.Item className="social-logo-link"><a href="https://www.youtube.com/channel/UCWf4KIllUoxGa3aeMf-jBvwm"><IoLogoYoutube /></a></ListGroup.Item>
              <ListGroup.Item className="social-logo-link"><a href="https://www.youtube.com/channel/https://www.instagram.com/socialprot3ction/-jBvwm"><IoLogoInstagram /></a></ListGroup.Item>
            </ListGroup>
          </Offcanvas.Header>
          <Nav.Item><Link className="nav-link" activeClassName="active" to="/">Home</Link></Nav.Item>
          <NavDropdown title='Our approach' className="arrow" id="offcanvasNavbarDropdown" href="/approach">
            <Nav.Item><Link to="/approach/vision-and-value" activeClassName="active">Vision and value proposition</Link></Nav.Item>
            <Nav.Item><Link to="/approach/theory-of-change" activeClassName="active">Theory of change</Link></Nav.Item>
            <Nav.Item><Link to="/approach/team" activeClassName="active">Our team</Link></Nav.Item>
          </NavDropdown>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/countries">Countries</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/results">Results</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/resources">Resources</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/partners">Partners</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/funding-gaps">Funding gaps</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto last" activeClassName="active" to="/news-and-events">News and events</Link></Nav.Item>
        </Offcanvas>
        <Offcanvas.Body>
          <Nav.Item><Link className="nav-link" activeClassName="active" to="/">Home</Link></Nav.Item>
          <NavDropdown title='Our approach' className="arrow" gatsby buildid="offcanvasNavbarDropdown" href="/approach">
            <Nav.Item><Link to="/approach/vision-and-value" activeClassName="active">Vision and value proposition</Link></Nav.Item>
            <Nav.Item><Link to="/approach/theory-of-change" activeClassName="active">Theory of change</Link></Nav.Item>
            <Nav.Item><Link to="/approach/team" activeClassName="active">Our team</Link></Nav.Item>
          </NavDropdown>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/countries">Countries</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/results">Results</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/resources">Resources</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/partners">Partners</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto" activeClassName="active" to="/funding-gaps">Funding gaps</Link></Nav.Item>
          <Nav.Item><Link className="nav-link scrollto last" activeClassName="active" to="/news-and-events">News and events</Link></Nav.Item>
        </Offcanvas.Body>
      </Container>
    </Navbar>
  )

}
export default MyNavbar