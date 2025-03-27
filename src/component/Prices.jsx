import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dividers from "../images/divider_title.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Prices() {
    return (
        <div>
            <Container fluid >
                <Row className="justify-content-md-center price ">
                    <Col lg={10} md={11} sm={12} xs={10} className="price-main">
                        <Row className="shop-head">
                            <Col className="wel-one">Our Events Plans</Col>
                        </Row>
                        <Row className="w-para">
                            <Col className="wel-two">prices</Col>
                        </Row>
                        <Row className="w-divider">
                            <Col className="d-flex justify-content-center align-items-center">
                                <img className="d-images" src={dividers} alt="divider-title" />
                            </Col>
                        </Row>
                        <Row className='price-Box'>

                            <Col lg={4} md={4} sm={4} >
                                <Card className='card-white '>
                                    <div className=' price-img   price-imgOne'>
                                        <Card.Img variant="top"
                                        />
                                    </div>

                                    <Card.Body className='pt-4'>
                                        <Card.Title className='card-head'>Bouquets</Card.Title>
                                        <Row className='list-out'>
                                            <Col lg={9} md={12} xs={12} className='list-box'>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item className='list-item'>Bridal Bouquets</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Bridesmaids’ Bouquets</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Vestibulum at eros</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Boutonnieres</ListGroup.Item>
                                                </ListGroup>

                                            </Col>
                                        </Row>
                                        <Card.Text className='amount'>
                                        <span className='from'>from</span><span className='number'>$399.00</span>                                            
                                        </Card.Text>
                                        <Button className='card-btn mt-2' >ORDER NOW</Button>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className='card-white'>
                                    <div className=' price-img   price-imgTwo'>
                                        <Card.Img variant="top"
                                        />
                                    </div>

                                    <Card.Body className='pt-4'>
                                        <Card.Title className='card-head'>Ceremony+<br /> Bouquets</Card.Title>
                                        <Row className='list-out'>
                                            <Col lg={9} md={12} xs={12} className='list-box'>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item className='list-item'>Bride’s & Bridemaids’ Bouquets</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Corsages & Boutonnieres</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Ceremony Main Altar</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Aisle Pew Markers</ListGroup.Item>
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                        <Card.Text className='amount'>
                                        <span className='from'>from</span><span className='number'>$399.00</span>                                            
                                        </Card.Text>
                                        <Button className='card-btn mt-2' >ORDER NOW</Button>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className='card-white'>
                                    <div className=' price-img   price-imgThree'>
                                        <Card.Img variant="top"
                                        />
                                    </div>

                                    <Card.Body className='pt-4'>
                                        <Card.Title className='card-head'> Full Package</Card.Title>
                                        <Row className='list-out'>
                                            <Col lg={9} md={12} xs={12} className='list-box'>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item className='list-item'>Bride’s & Bridemaids’ Bouquets</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Corsages & Boutonnieres</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Ceremony Decoration</ListGroup.Item>
                                                    <ListGroup.Item className='list-item'>Tables & Cake Decoration</ListGroup.Item>
                                                </ListGroup>

                                            </Col>
                                        </Row>
                                        <Card.Text className='amount'>
                                        <span className='from'>from</span><span className='number'>$399.00</span>                                            
                                        </Card.Text>
                                        <Button className='card-btn mt-2' >ORDER NOW</Button>
                                        
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
export default Prices;