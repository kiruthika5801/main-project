import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dividers from "../images/divider_title.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiLink } from "react-icons/hi";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Feedback() {
    return (
        <div>
            <Container fluid >
                <Row className="justify-content-md-center feed">
                    <Col lg={10} md={11} sm={9} xs={9} className="feed-main">
                        <Row className="shop-head">
                            <Col className="wel-one">Give Us a Feedback</Col>
                        </Row>
                        <Row className="w-para">
                            <Col className="wel-two">contact form</Col>
                        </Row>
                        <Row className="w-divider">
                            <Col className="d-flex justify-content-center align-items-center">
                                <img className="d-images" src={dividers} alt="divider-title" />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center form">
                            <Col lg={6} md={6}  xs={10} className="form-main">
                                <Row className='formOne'>
                                    <Col lg={6} md={6} xs={12}><input className='form-up' type="text" placeholder="Name *" required /></Col>
                                    <Col lg={6} md={6} xs={12}><input className='form-up' type="text" placeholder="E-mail *" required /></Col>

                                </Row>
                                <Row className='formTwo'>
                                    <Col><textarea className='form-down' type="text" placeholder='Messege' required /></Col>
                                </Row>
                                <Row className='formBtn'>
                                    <Col lg={12}md={12} xs={12} ><button className='formBtnn' >SEND MESSEGE</button></Col>
                                </Row>


                            </Col>

                        </Row>




                    </Col>

                </Row>

            </Container>


        </div>
    );
};
export default Feedback;