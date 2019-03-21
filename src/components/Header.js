import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/App.scss';
import '../stylesheets/Header.scss';


const Header = () => (
    <Navbar bg="dark" variant="dark">
    <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    </Navbar>
      )
      export default Header;