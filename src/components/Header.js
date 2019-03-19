import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/App.scss';
import '../stylesheets/Header.scss';


const Header = () => (
    <Navbar bg="dark" variant="dark">
      <Nav id="headerLinks">
        <Nav.Link href="https://github.com/natekarnes">Github</Nav.Link>
        <Nav.Link href="https://linkedin.com/in/natekarnes">Linkedin</Nav.Link>
        <Nav.Link href="https://instagram.com/natekarnes.dev">Instagram</Nav.Link>
        <Nav.Link href="https://twitter.com/natekarnes">Twitter</Nav.Link>
        <Nav.Link href="https://www.facebook.com/Nate-Karnes-Web-Developer-290672345190431">Facebook</Nav.Link>

        {/* <Nav.Link href="/">Home</Nav.Link> */}
        {/* <Nav.Link href="/about">About</Nav.Link> */}
      </Nav>
    </Navbar>
      )
      export default Header;