import React, { useEffect } from 'react';
import { Container, Row, Col,Link } from 'react-bootstrap';
import dividers from "../images/divider_title.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiLink } from "react-icons/hi";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Blog() {
    return (
        <div>
            <Container fluid >
                <Row className="justify-content-md-center blog-box ">
                    <Col className='blog-main' lg={11}  md={11} xs={9} >
                        <Row className='w-head'>
                            <Col lg={12} xs={10} className='wel-one'> Articles from the Blog</Col>
                        </Row>
                        <Row className='w-para'>
                            <Col lg={12} xs={12} className='wel-two'>BLOG</Col>
                        </Row>
                        <Row className='w-divider' >
                            <Col className='d-flex justify-content-center align-items-center' ><img className='d-images' src={dividers} alt="divider-title" /></Col>
                        </Row>
                        <Row className='blogBox '>
                            <Col lg={4} md={4} sm={4} >
                                <Card className='card-white '>
                                    <div className=' card-img  blog-imgOne'>
                                        <div className='linkHover'>
                                            <HiLink className="linkIcon" />
                                        </div>
                                        <Card.Img variant="top"
                                        />

                                    </div>

                                    <Card.Body className='pt-4'>
                                    <Card.Link className='card-paraOne' href="#">Jul 27, 2016</Card.Link>
                                    <Card.Title className='card-paraTwo'>An occasion that joins two hearts in a symphony</Card.Title>
                                    <Card.Title className='card-paraThree'><span className='last'>By <Card.Link className='last' href="#">Cindy Jefferson  </Card.Link></span><span className='last'>  | 3 comments</span></Card.Title>


                                      
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className='card-white'>
                                    <div className=' card-img  blog-imgTwo'>
                                        <div className='linkHover'>
                                            <HiLink className="linkIcon" />
                                        </div>
                                        <Card.Img variant="top"
                                        />

                                    </div>


                                    <Card.Body className='pt-4'>
                                    <Card.Link className='card-paraOne' href="#">Jul 18, 2016</Card.Link>
                                    <Card.Title className='card-paraTwo'>The role of your bouquette in wedding compositions</Card.Title>
                                    <Card.Title className='card-paraThree'><span className='last'>By <Card.Link className='last' href="#">Cindy Jefferson  </Card.Link></span><span className='last'>  | 1 comments</span></Card.Title>
                                        

                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <Card className='card-white'>
                                    <div className=' card-img  card-imgThree'>
                                        <div className='linkHover'>
                                            <HiLink className="linkIcon" />
                                        </div>
                                        <Card.Img variant="top"
                                        />

                                    </div>

                                    <Card.Body className='pt-4'>
                                    <Card.Link className='card-paraOne' href="#">Jul 9, 2016</Card.Link>
                                    <Card.Title className='card-paraTwo'>10 reasons why you should hire a wedding planner</Card.Title>
                                    <Card.Title className='card-paraThree'><span className='last'>By <Card.Link className='last' href="#">Cindy Jefferson  </Card.Link></span><span className='last'>  | 2 comments</span></Card.Title>


                                        
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
export default Blog;