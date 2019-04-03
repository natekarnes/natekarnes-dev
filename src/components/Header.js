import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import '../stylesheets/App.scss';
import '../stylesheets/Header.scss';
import logoLight from '../images/logoLight.png'
// import logoDark from '../images/logoDark.png'


const Header = () => (
    <Navbar bg="dark">
    <Navbar.Brand href="/">
      <img
        src={logoLight}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="logoLight"
      />
    </Navbar.Brand>
  </Navbar>
      )
      export default Header;


