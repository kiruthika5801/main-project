import React from "react";
import "../App.css";
import image from "../images/bg_4.jpg"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Inspiration() {
    return (
        <div>
            <Container fluid>

                <Row className="ins-box">
                    <Col className="ins-left " lg={6} md={6}>
                    </Col>
                    <Col className="ins-right" lg={6} md={6}>
                        <Row className="justify-content-md-center right-box">
                            <Col xs={9} md={10} lg={10} className="i-main">
                                <Row className="a-head">
                                    <Col className="a-headOne">inspiration</Col>
                                </Row>
                                <Row className="i-para">
                                    <Col className="i-paraOne" lg={12} md={12} xs={12}>Exclusive Design by Best Florists</Col>
                                </Row>
                                <Row className="i-last" >
                                    <Col lg={11} md={12} ><p className="a-lastOne">The floristry business has a significant market in the corporate and social event world, as flowers play a large part in the decor of special events and meetings.</p></Col>
                                </Row>
                                <Row className="a-btn" >
                                    <Col> <button className="i-btnn">visit gallery</button></Col>
                                </Row>

                            </Col>

                        </Row>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}
export default Inspiration;