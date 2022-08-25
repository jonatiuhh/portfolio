import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/code.svg';
import navIcon1 from '../assets/img/github-icon.svg';
import navIcon2 from '../assets/img/whats2.svg';
import navIcon3 from '../assets/img/mail.svg';
import NavIcon4 from '../assets/img/pdf.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span> 
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a href="https://github.com/jonatiuhh" target='_blank' ><img src={navIcon1} alt="gith" className="github" /></a>
                  {/* <a href="https://drive.google.com/file/d/1-ToAJluVMTBdHF0rhkojEc-xRC3Igh3w/view?usp=sharing" target='_blank' ><img src={NavIcon4} alt="" /></a> */}
                  <CopyToClipboard text='3320897284'>
								    <a onClick={ () => toast('number copied',{position: 'top-center'})}><img src={navIcon2} /></a>
							    </CopyToClipboard>
                  <CopyToClipboard text='jonathan.sesma@outlook.com'>
							      <a onClick={ () => toast('mail copied',{position: 'top-center'})}><img src={navIcon3} /></a>
							    </CopyToClipboard>
                  <Toaster/>
               </div>
            <button className="vvd" onClick={() => window.open('https://drive.google.com/file/d/1-ToAJluVMTBdHF0rhkojEc-xRC3Igh3w/view?usp=sharing','_blank')}><span>My C.V.</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
