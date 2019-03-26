import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/App.scss';
import '../stylesheets/Header.scss';


const Header = () => (
    <div>
<Navbar bg="dark" variant='dark'>
    <Nav className="justify-content-center">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link disabled href="/about">About</Nav.Link>
        <Nav.Link disabled href="/skills">Skills</Nav.Link>
        <Nav.Link disabled href="/contact">Contact</Nav.Link>
    </Nav>
</Navbar>
    </div>
      )
      export default Header;


