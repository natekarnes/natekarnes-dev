import React from 'react';
import Navbar from '../components/Navbar.js';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import superheroEmoji from '../images/superheroEmoji.png'
import toolsEmoji from '../images/toolsEmoji.png'
import developerEmoji from '../images/developerEmoji.png'
import heartEmoji from '../images/heartEmoji.png'
import '../stylesheets/Home.scss';
import '../stylesheets/index.scss';

const Home = () => (
    <div>
    <Navbar/>
    <Row>
        <Col id="welcomeText">
            <div id='firstLine'>Hi, I'm Nate Karnes.</div>
            <div id='secondLine'>My superpower is problem solving. My love language is code.</div>
        </Col>
    </Row>
    <Row id="welcomeEmoji">
        <Col>
            <Image id="superheroEmoji" width="50" src={superheroEmoji} fluid />
            <Image id="toolsEmoji" width="50" src={toolsEmoji} fluid />
            <Image id="heartEmoji" width="50" src={heartEmoji} fluid />
            <Image ic="developerEmoji" width="50" src={developerEmoji} fluid />
        </Col>
    </Row>
        <footer id="footer">
            &copy; 2019 Nate Karnes
        </footer>
    </div>
)

export default Home;