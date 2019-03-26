import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../stylesheets/App.scss';
import '../stylesheets/About.scss';
import techie from '../images/techie.jpg'
import husband from '../images/husband.jpg'
import father from '../images/father.jpg'

const About = () => (
<div>
<Header/>
<div id="aboutSection"> 
    <Row>
        <Col>
            <div id='firstLine'>About Me</div>
            <div id='secondLine'>I'm a husband, father, and techie. </div>
        </Col>
    </Row>
</div>
    <div id="firstRow">
    <Row>
    <Col xs={12} md={4}>
    <Card bg="light" style={{ width: '30rem' }}>
    <Card.Img id="husband" width="300" src={husband}/>
    
        <Card.Header><h3>Husband</h3></Card.Header>
        <Card.Body>
        <Card.Text>

        </Card.Text>
        </Card.Body>
        </Card>
    </Col>

    <Col xs={12} md={4}>
        <Card bg="light" style={{ width: '30rem' }}>
        <Card.Img id="father" width="300" src={father}/>
        <Card.Header><h3>Father</h3></Card.Header>
        <Card.Body>
        <Card.Text>

        </Card.Text>
        </Card.Body>
        </Card>
    </Col>

    <Col xs={12} md={4}>
    <Card bg="light" style={{ width: '30rem' }}>
    <Card.Img id="techie" width="300" src={techie}/>
        <Card.Header><h3>Techie</h3></Card.Header>
        <Card.Body>
        <Card.Text>

        </Card.Text>
        </Card.Body>
        </Card>
    </Col>
  </Row>
    </div>
    

 
   
    <footer id="footer">
        <Footer/>
        </footer>
</div>
)

export default About;