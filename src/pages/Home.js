import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import mobileEmoji from '../images/mobileEmoji.png'
import macbookEmoji from '../images/macbookEmoji.png'
import developerEmoji from '../images/developerEmoji.png'
import '../stylesheets/Home.scss';
import '../stylesheets/App.scss';
// import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = () => (
<div>


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
{/* Contact */}
<Container id="contactSection">
    <Row>
        <Col xs={12} md={4}>
            <h1>Links</h1>
                <ul>
                    <li className="contactList"><h3><a href="https://app.hellobonsai.com/u/natekarnes/contact">Contact Me</a></h3></li>
                    <li className="contactList"><h3><a href="https://github.com/natekarnes">My Github</a></h3></li>
                    <li className="contactList"><h3><a href="https://fb.me/natekarnesdeveloper">My Facebook</a></h3></li>
                    <li className="contactList"><h3><a href="https://instagram.com/natekarnes.dev">My Instagram</a></h3></li>
                    <li className="contactList"><h3><a href="https://twitter.com/natekarnes">My Twitter</a></h3></li>
                </ul>
        </Col>
        <Col xs={12} md={4}>
            <h1>Projects</h1>
                <ul>
                    <li className="contactList"><h3>Rocco Pizza</h3></li>
                    <li className="contactList"><h3>Children's Character Club</h3></li>
                </ul>
        </Col>
        <Col xs={12} md={4}>
            <h1>Skills</h1>
                <ul>
                    <li className="contactList"><h3>Websites</h3></li>
                    <li className="contactList"><h3>Apps</h3></li>
                    <li className="contactList"><h3>Maintenance</h3></li>
                    <li className="contactList"><h3>Design</h3></li>
                    <li className="contactList"><h3>Online Food Ordering</h3></li>
                    <li className="contactList"><h3>CMS Setup</h3></li>
                    
                </ul>
        </Col>
    </Row>
</Container>



    
    <footer id="footer">
        <Footer/>
    </footer>

    </div>
)

export default Home;