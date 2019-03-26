import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../stylesheets/App.scss';
import '../stylesheets/Footer.scss';

const Footer = () => (

    <Navbar bg="dark" variant="dark">
      <Nav>
         <Nav.Link href="https://github.com/natekarnes">Github</Nav.Link>
         <Nav.Link href="https://linkedin.com/in/natekarnes">Linkedin</Nav.Link>
         <Nav.Link href="https://instagram.com/natekarnes.dev">Instagram</Nav.Link>
         <Nav.Link href="https://twitter.com/natekarnes">Twitter</Nav.Link>
         <Nav.Link href="https://www.facebook.com/Nate-Karnes-Web-Developer-290672345190431">Facebook</Nav.Link>
         </Nav>
         <div id="copywrite">&copy; 2019 Nate Karnes</div>
    </Navbar>
      )
      export default Footer;