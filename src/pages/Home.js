import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Card from 'react-bootstrap/Card';
import mobileEmoji from '../images/mobileEmoji.png'
import macbookEmoji from '../images/macbookEmoji.png'
import developerEmoji from '../images/developerEmoji.png'
// import responsiveWebDevelopment from '../images/responsiveWebDevelopment.jpg'
// import webDesign from '../images/webDesign.jpg'
// import contentManagement from '../images/contentManagement.jpg'
// import technicalSupport from '../images/technicalSupport.jpg'
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
            <Image id="developerEmoji" width="50" src={developerEmoji} fluid />
            <Image id="macbookEmoji" width="50" src={macbookEmoji} fluid />
            <Image id="mobileEmoji" width="50" src={mobileEmoji} fluid />
        </Col>
    </Row>
    </div>
{/* First Row of Boxs */}
    {/* <div id="firstRow">
    <Row>
    <Col xs={6} md={3}>
    <Card.Img id="responsiveWebDevelopment" width="100" src={responsiveWebDevelopment}/>
    </Col>
    <Col xs={6} md={3}>
    <Card.Img id="webDesign" width="100" src={webDesign}/>
    </Col>
    <Col xs={6} md={3}>
    <Card.Img id="contentManagement" width="100" src={contentManagement}/>
    </Col>
    <Col xs={6} md={3}>
    <Card.Img id="technicalSupport" width="100" src={technicalSupport}/>
    </Col>
  </Row>
    </div> */}
    
    <footer id="footer">
        <Footer/>
    </footer>

    </div>
)

export default Home;