import React from "react";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6";
// import imagesOne from "../images/post-imageOne.jpg";
import imagesTwo from "../images/post-imageTw0.jpg";
import imagesThree from "../images/post-imageThree.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Testimonial() {

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center test-box">
                    <Col xs lg={10} md={10} className="test-main">
                        <Carousel
                            className="carousal-box slider-nav-round"
                            nextIcon={<FaArrowRight size={30} color="white" className="arrow-right" />}
                            prevIcon={<FaArrowLeft size={30} color="white" className="arrow-left" />}
                        >
                            <Carousel.Item className="test-item">
                                <Carousel.Caption className="test-carousalOne">
                                <Row>
                                        <Col className="test-up"lg={12}><img className="test-image" src={imagesTwo} alt="imagesTwo" /></Col>
                                        <Col className="test-head" lg={12}>"We were extremely excited, but everything was even more that we hoped for!"</Col>
                                        <Col className="test-para" lg={12}>Kelly & Brandon Walsh, CA</Col>
                                    </Row>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className="test-item">
                                <Carousel.Caption className="test-carousalTwo">
                                    <Row>
                                        <Col className="test-up" lg={12}><img className="test-image" src={imagesTwo} alt="imagesTwo" /></Col>
                                        <Col className="test-head" lg={12}>"We were extremely excited, but everything was even more that we hoped for!"</Col>
                                        <Col className="test-para" lg={12}>Kelly & Brandon Walsh, CA</Col>
                                    </Row>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className="test-item">
                                <Carousel.Caption className="test-carousalThree">
                                    <Row>
                                        <Col className="test-up" lg={12}><img className="test-image" src={imagesTwo} alt="imagesTwo" /></Col>
                                        <Col className="test-head" lg={12}>"We were extremely excited, but everything was even more that we hoped for!"</Col>
                                        <Col className="test-para" lg={12}>Kelly & Brandon Walsh, CA</Col>
                                    </Row>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                </Row>

            </Container>


        </div>
    )

};
export default Testimonial;