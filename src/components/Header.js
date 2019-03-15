import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/App.scss';



const Header = () => (
    <Navbar bg="light" variant="light">
      <Nav className="leftNav">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="https://github.com/natekarnes">Github</Nav.Link>
      </Nav>
    </Navbar>
      )
      export default Header;