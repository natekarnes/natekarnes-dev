import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import '../stylesheets/Home.scss';
import '../stylesheets/App.scss';
import Footer from '../components/Footer.js';

const Home = () => (
<div>


{/* Welcome Text */}
    <div id="welcomeSection">
    <Row>
        <Col>
            <div id='firstLine'>Hi, I'm Nate Karnes;</div>
            <div id='secondLine'>a web developer.</div>
        </Col>
    </Row>
    </div>
{/* Contact */}
<Container id="contactSection">
    <Row>
        <Col xs={12} md={4}>
        <Card>
    <Card.Header><h3>My Links</h3></Card.Header>
    <Card.Body>
      {/* <Card.Title>Links</Card.Title> */}
      <Card.Text>

                    <li className="contactList"> <a href="https://app.hellobonsai.com/u/natekarnes/contact">Contact Me</a> </li>
                    <li className="contactList"> <a href="https://github.com/natekarnes">My Github</a> </li>
                    <li className="contactList"> <a href="https://fb.me/natekarnesdeveloper">My Facebook</a> </li>
                    <li className="contactList"> <a href="https://instagram.com/natekarnes.dev">My Instagram</a> </li>
                    <li className="contactList"> <a href="https://twitter.com/natekarnes">My Twitter</a> </li>

      </Card.Text>
    </Card.Body>
  </Card>
  <br />
        </Col>
        <Col xs={12} md={4}>
        <Card>
    <Card.Header><h3>My Projects</h3></Card.Header>
    <Card.Body>
      {/* <Card.Title>Projects</Card.Title> */}
      <Card.Text>

                    <li className="contactList"> <a href="http://www.roccopizza.com">Rocco Pizza</a></li>
                    <li className="contactList"> <a href="http://www.childrenscharacter.club">Children's Character Club</a></li>

      </Card.Text>
    </Card.Body>
  </Card>
  <br />
        </Col>
        <Col xs={12} md={4}>
        <Card>
    <Card.Header><h3>My Skills</h3></Card.Header>
    <Card.Body>
      {/* <Card.Title>Skills</Card.Title> */}
      <Card.Text>

      <li className="contactList"> Websites </li>
                    <li className="contactList"> Apps </li>
                    <li className="contactList"> Maintenance </li>
                    <li className="contactList"> Design </li>
                    <li className="contactList"> Online Food Ordering </li>
                    <li className="contactList"> CMS Setup </li>

      </Card.Text>
    </Card.Body>
  </Card>
  <br />
        </Col>
    </Row>
</Container>



    
    <footer id="footer">
        <Footer/>
    </footer>

    </div>
)

export default Home;