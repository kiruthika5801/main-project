import React from "react";
import "../App.css"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiTruckTrailer } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { GiFlowerPot } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Box() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center content">
                    <Col xs className="content-main" lg="9">
                        <Row className="contentBox">
                            <Col lg={4} >
                                <Card className="content-white  ">
                                    <div className="content-up">
                                        <div className="content-icon">
                                            <PiTruckTrailer className="c-Icon" />

                                        </div>
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="content-title"><h1 className="content-head">Free Delivery</h1></Card.Title>
                                        <Card.Text className="content-para"><p className="content-para">on every order, during the same day</p></Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col lg={4} >
                                <Card className="content-white  ">
                                    <div className="content-up">
                                        <div className="content-icon">
                                            <FaRegHandshake className="c-Icon" />

                                        </div>
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="content-title"><h1 className="content-head">Hand - Tied</h1></Card.Title>
                                        <Card.Text className="content-para"><p className="content-para">bouquets and beautiful plants</p></Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col lg={4} >
                                <Card className="content-white  ">
                                    <div className="content-up">
                                        <div className="content-icon">
                                            <GiFlowerPot  className="c-Icon" />

                                        </div>
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="content-title"><h1 className="content-head">Exclusive Design</h1></Card.Title>
                                        <Card.Text className="content-para"><p className="content-para">by the best florist from NYC</p></Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>

                        </Row>



                    </Col>

                </Row>

            </Container>

        </div>
    )
};
export default Box;