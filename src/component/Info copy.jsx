import React, { useEffect } from "react";
import "../App.css"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'aos/dist/aos.css';
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Info() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center content">
                    <Col  className="info-main" lg={10} md={11} xs={9}>
                        <Row className="contentBox">
                            <Col lg={4} md={4} sm={4}>
                                <Card className="content-white  ">
                                    <div className="content-up">
                                        <div className="content-icon">
                                            {/* <PiTruckTrailer className="c-Icon" /> */}
                                            <TfiLocationPin className="c-Icon"/>

                                        </div>
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="content-title"><h1 className="content-head">Address</h1></Card.Title>
                                        <Card.Text className="content-para"><p className="content-para">"123, New Lenox Chicago, IL 60606"</p></Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className="content-white  ">
                                    <div className="content-up">
                                        <div className="content-icon">
                                            {/* <FaRegHandshake className="c-Icon" /> */}
                                            <FiPhoneCall className="c-Icon"  />

                                        </div>
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="content-title"><h1 className="content-head">Phone</h1></Card.Title>
                                        <Card.Text className="content-para"><p className="content-para">800-123-4567</p></Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className="content-white  ">
                                    <div className="content-up">
                                        <div className="content-icon">
                                            {/* <GiFlowerPot className="c-Icon" /> */}
                                            <MdOutlineMailOutline className="c-Icon" />

                                        </div>
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="content-title"><h1 className="content-head">Email address</h1></Card.Title>
                                        <Card.Text className="content-para"><p className="content-para">info@yoursite.com </p></Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>

                        </Row>



                    </Col>

                </Row>

            </Container>


        </div>
    );
};

export default Info;