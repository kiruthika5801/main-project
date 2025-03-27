import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { IoSearch } from "react-icons/io5";
// import { HiOutlineLink } from "react-icons/hi";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Picture() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center pic-box">
                    <Col lg={12} md={12} xs={12} className='pic-main'>
                        <Row>
                            <Col className="pic-one" lg={3} md={4}>

                                {/* <div className='hover-box'>
                                    <div>CLASSIC CEREMONY</div>
                                    <Row>
                                        <Col className='picHover'><IoSearch className="picIcon" /></Col>
                                        <Col className='picHovers'><HiOutlineLink className="picIcons" /></Col>

                                    </Row>
                                </div> */}

                            </Col>
                            <Col className="pic-two" lg={3} md={4}></Col>
                            <Col className="pic-three" lg={3} md={4}></Col>
                            <Col className="pic-four" lg={3}></Col>
                        </Row>

                    </Col>
                </Row>

            </Container>


        </div>
    );
};
export default Picture;