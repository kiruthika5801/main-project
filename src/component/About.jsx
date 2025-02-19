import React from "react";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import aboutOne from '../images/about-img1.jpg'
import aboutTwo from "../images/about-img2.jpg"
import aboutThree from "../images/about-img-3.jpg"
import dividers from "../images/divider_title.png"
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center about">
                    <Col xs={9} md={11} lg={10}   className="about-main">
                        <Row>
                            <Col className="a-one" lg={7} md={7} xs={12}>
                                <Row className="a-head">
                                    <Col className="a-headOne">ABOUT US</Col>
                                </Row>
                                <Row className="a-para">
                                    <Col className="a-paraOne" lg={12}  md={12}  xs={12}>We Plan & Design Weddings <br/>
                                    That Capture the Imagination</Col>
                                </Row>
                                <Row className="a-head d-flex align-items-center">
                                    <Col lg={10} ><img className='a-images ' src={dividers} alt="about-divider" /></Col>
                                </Row>
                                <Row className="a-last" >
                                    <Col lg={11} md={12} ><p className="a-lastOne">Weddings are significant events in people’s lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding planners are often used by couples who work long hours and have little spare time available for sourcing and managing wedding venues.</p></Col>
                                </Row>
                                <Row className="a-btn" >
                                    <Col> <button className="a-btnn">MORE ABOUT US</button></Col>
                                </Row>




                            </Col>
                            <Col className="a-two" lg={5} md={5} xs={12}>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            src={aboutOne}
                                            alt="Wedding Ceremony"
                                            className="about-image"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src={aboutTwo}
                                            alt="Reception Venue"
                                            className="about-image"
                                        />



                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src={aboutThree}
                                            alt="Decor and Floral Arrangements"
                                            className="about-image"
                                        />



                                    </Carousel.Item>
                                </Carousel>

                            </Col>
                        </Row>

                    </Col>

                </Row>

            </Container>

        </div>

    )
};
export default About;