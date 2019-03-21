import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../stylesheets/index.scss';
import '../stylesheets/About.scss';

const About = () => (
    <div>
<Header/>
<div id="aboutSection"> 
    <Row>
        <Col id="aboutText">
            <div id='firstLineAbout'>About Nate</div>
            <div id='secondLineAbout'></div>
        </Col>
    </Row>

    </div>
   
    <footer id="footer">
        <Footer/>
        </footer>
        </div>
)

export default About;