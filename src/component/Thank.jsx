import React from "react";
import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logo from '../images/mains.png';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Thank() {
    const navigate = useNavigate();
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center thank">
                    <Col lg={10} md={11} sm={9} xs={10} className="thank-main">
                        <Row className="thankLogo">
                            <Col lg={12} md={12} xs={12}><img className="logoThank" src={logo} alt="tie-tales" /></Col>
                        </Row>
                        <Row className="thankIcon" >
                            <Col className="thankIn" lg={4} md={6} xs={11}>
                                <Row>
                                    <Col lg={3} md={3} xs={3}>
                                        <div className="iconOuter">
                                            <TiSocialFacebook className="iconInner" />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} >
                                        <div className="iconOuter">
                                            <FaTwitter className="iconInner" />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} >
                                        <div className="iconOuter">
                                            <AiOutlineInstagram className="iconInner" />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} >
                                        <div className="iconOuter">
                                            <FaGooglePlusG className="iconInner" />
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>

                        {/* <Button variant="dark" className="w-100" onClick={() => navigate("/admin-login")}>
                            Go to Admin Panel
                        </Button> */}

                        <Row className="line">
                            <Col lg={12} md={12} xs={12}><hr /></Col>
                        </Row>
                        <Row className="policy">
                            <Col className="thankLast" lg={12} md={12} xs={12}><span>"ThemeREX © 2017 All Rights Reserved"</span><a className="lastThank" href="#">Terms of Use </a>and <a className="lastThank" href="#">Privacy Policy</a></Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};
export default Thank;