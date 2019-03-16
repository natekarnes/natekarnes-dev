import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header.js';

const About = () => (
    <div>
<Header/>
    <Row>
        <Col id="welcomeText">
            <div id='firstLine'>About Nate</div>
            <div id='secondLine'>is under construction. Above you can check out some of Nate's projects.</div>
        </Col>
    </Row>
        <footer id="footer">
            &copy; 2019 Nate Karnes
        </footer>
    </div>
)

export default About;