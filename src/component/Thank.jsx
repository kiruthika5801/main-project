import React from "react";
import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logo from '../images/mains.png';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGooglePlusG } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Thank() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center thank">
                    <Col lg={10} md={11} sm={9} xs={9} className="thank-main">
                        <Row className="thankLogo">
                            <Col lg={12}><img className="logoThank" src={logo} alt="tie-tales" /></Col>
                        </Row>
                        <Row className="thankIcon" >
                            <Col className="thankIn" lg={4}>
                                <Row>
                                    <Col lg={3}>
                                        <div className="iconOuter">
                                            <TiSocialFacebook className="iconInner" />
                                        </div>
                                    </Col>
                                    <Col lg={3} >
                                        <div className="iconOuter">
                                            <FaTwitter className="iconInner" />
                                        </div>
                                    </Col>
                                    <Col lg={3} >
                                        <div className="iconOuter">
                                            <AiOutlineInstagram className="iconInner" />
                                        </div>
                                    </Col>
                                    <Col lg={3} >
                                        <div className="iconOuter">
                                            <FaGooglePlusG className="iconInner" />
                                        </div>
                                    </Col>

                                </Row>









                            </Col>
                        </Row>
                        <Row>
                            <Col></Col>
                        </Row>






                    </Col>
                </Row>
            </Container>

        </div>
    );
};
export default Thank;