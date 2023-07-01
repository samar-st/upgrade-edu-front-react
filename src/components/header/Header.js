import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import upg from "../../images/Group 39520.png";
import profileImg from "../../images/Avatar.svg"
import '../../components/header/Header.css';


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img
              src={upg}
              width="214"
              height="55"
              className="d-inline-block align-top"
              alt="Upgrade Education logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='last-item-section'>
            <Nav.Link href="/">
            <p className='language-selector'>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle"></span>
            </label>
            </p>
            </Nav.Link>
            <Nav.Link href="/profile">
            <img
              src={profileImg}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Upgrade Education logo"
            />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header