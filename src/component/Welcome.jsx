import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dividers from "../images/divider_title.png";
import imgOne from "../images/img1-370x240.jpg";
import imgTwo from "../images/img2-370x240.jpg";
import imgThree from "../images/img3-370x240.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Welcome() {
    return (
        <div>
            <Container fluid >

                <Row className="justify-content-md-center box ">
                    <Col className='wel-main' xs={9} lg={11} md={12} >
                        <Row className='w-head'>
                            <Col lg={12} xs={10} className='wel-one'>Let's Plan Your Perfect Wedding</Col>
                        </Row>
                        <Row className='w-para'>
                            <Col lg={12} xs={12} className='wel-two'>welcome</Col>
                        </Row>
                        <Row className='w-divider' >
                            <Col className='d-flex justify-content-center align-items-center' ><img className='d-images' src={dividers} alt="divider-title" /></Col>
                        </Row>
                        <Row className='cardBox'>
                           
                            <Col lg={4} md={4} sm={4}>
                                <Card className='card-white '>
                                    <Card.Img className='card-img' variant="top" src={imgOne} />
                                    <Card.Body className='pt-4'>
                                        <Card.Title className='card-head'>Bouquets & Style</Card.Title>
                                       
                                        <Button className='card-btn mt-4' >ORDER NOW</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className='card-white'>
                                    <Card.Img className='card-img' variant="top" src={imgTwo} />
                                    <Card.Body className='pt-4'>
                                        <Card.Title className='card-head'>Wedding Planning</Card.Title>
                                       
                                        <Button className='card-btn mt-4' >SHOP NOW</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className='card-white'>
                                    <Card.Img className='card-img' variant="top" src={imgThree} />
                                    <Card.Body className='pt-4'>
                                        <Card.Title className='card-head'>Catering & Decoration</Card.Title>
                                       
                                        <Button className='card-btn mt-4' >SHOP NOW</Button>
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
export default Welcome;