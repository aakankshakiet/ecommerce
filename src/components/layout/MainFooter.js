import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './mainFooter.scss';


const MainFooter = () => {
    
    return (
        <>
            <footer className="footer"  >
                <Container >
                    <Row className="footer-row" >
                        <Col sm={9}>
                            <p className="text-left">
                                Copyright &copy; 2021 AB-Company
                            </p>
                        </Col>
                        <Col sm={3}>
                            <ul className="footer-list" >
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">

                                    <li><FaFacebook /></li>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <li><FaInstagram /></li>
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <li><FaTwitter /></li>
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <li><FaLinkedin /></li>
                                </a>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
};
export default MainFooter;