import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../stylesheets/App.scss';
import '../stylesheets/About.scss';

const Contact = () => (
<div>
<Header/>
<div id="aboutSection"> 
    <Row>
        <Col>
            <div id='firstLine'>Contact Me</div>
            <div id='secondLine'></div>
        </Col>
    </Row>

    </div>
   
    <footer id="footer">
        <Footer/>
        </footer>
</div>
)

export default Contact;