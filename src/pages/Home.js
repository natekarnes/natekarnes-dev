import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import mobileEmoji from '../images/mobileEmoji.png'
import macbookEmoji from '../images/macbookEmoji.png'
import developerEmoji from '../images/developerEmoji.png'
import '../stylesheets/Home.scss';
import '../stylesheets/index.scss';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = () => (
    <div>
        <Header/>
    <div id="welcomeSection">
    <Row>
        <Col id="welcomeText">
            <div id='firstLineHome'>Hi, I'm Nate Karnes.</div>
            <div id='secondLineHome'>I develop web applications.</div>
        </Col>
    </Row>
    <Row id="welcomeEmoji">
        <Col>
            <Image ic="developerEmoji" width="50" src={developerEmoji} fluid />
            <Image id="macbookEmoji" width="50" src={macbookEmoji} fluid />
            <Image id="mobileEmoji" width="50" src={mobileEmoji} fluid />
        </Col>
    </Row>
    </div>
    
    <footer id="footer">
        <Footer/>
    </footer>

    </div>
)

export default Home;