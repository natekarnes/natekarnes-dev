import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import mobileEmoji from '../images/mobileEmoji.png'
import macbookEmoji from '../images/macbookEmoji.png'
import developerEmoji from '../images/developerEmoji.png'
import '../stylesheets/Home.scss';
import '../stylesheets/App.scss';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = () => (
    <div>
        <Header/>
{/* Welcome Text */}
    <div id="welcomeSection">
    <Row>
        <Col>
            <div id='firstLine'>Hi, I'm Nate Karnes.</div>
            <div id='secondLine'>I develop web applications; currently working on my own.</div>
        </Col>
    </Row>
{/* Emojis */}
    <Row>
        <Col>
            <Image id="developerEmoji" width="50" src={developerEmoji} fluid />{' '}
            <Image id="macbookEmoji" width="50" src={macbookEmoji} fluid />
            <Image id="mobileEmoji" width="50" src={mobileEmoji} fluid />
        </Col>
    </Row>
    </div>
{/* Contact Form */}


    
    <footer id="footer">
        <Footer/>
    </footer>

    </div>
)

export default Home;