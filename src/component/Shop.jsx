import React from "react";
import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import dividers from "../images/divider_title.png";


function Shop() {
   

    return (
        <Container fluid>
            <Row className="justify-content-md-center shop">
                <Col lg={10} md={11} sm={9} xs={9} className="shop-main">
                    {/* Header Section */}
                    <Row className="w-head">
                        <Col lg={12} xs={12} className="wel-one">
                            Shop Our Latest Styles
                        </Col>
                    </Row>
                    <Row className="w-para">
                        <Col lg={12} xs={12} className="wel-two">Shop</Col>
                    </Row>
                    <Row className="w-divider">
                        <Col className="d-flex justify-content-center align-items-center">
                            <img className="d-images" src={dividers} alt="divider-title" />
                        </Col>
                    </Row>
                    <Row className="shop-boxOne ">
                        <Col className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                            <Card className="card-sWhite">
                                <div className="card-sImg card-sImgOne">
                                
                                </div>
                               
                                <Card.Body>
                                    <Card.Title className="card-head">Flower Decor</Card.Title>
                                    <Card.Text className="card-price"> $55.00 </Card.Text>
                                    <Button className="card-shopbtn" variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                            <Card className="card-sWhite">
                                <div className="card-sImg card-sImgTwo">
                               
                                </div>
                               
                                <Card.Body>
                                    <Card.Title className="card-head">Wedding Arch</Card.Title>
                                    <Card.Text className="card-price"> $65.00 </Card.Text>
                                    <Button className="card-shopbtn"  variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="d-flex justify-content-center" lg={4} md={4} sm={4} >
                            <Card className="card-sWhite" >
                                <div className="card-sImg card-sImgThree">
                                
                                </div>
                                
                                <Card.Body>
                                    <Card.Title className="card-head">Table Centerpiece</Card.Title>
                                    <Card.Text className="card-price"> $87.00 </Card.Text>
                                    <Button className="card-shopbtn" variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Row className="shop-boxTwo mt-3 ">
                        <Col className="d-flex justify-content-center" lg={4} md={4} sm={4} >
                            <Card className="card-sWhite">
                                <div className="card-sImg card-sImgFour">
                                
                                </div>
                               
                                <Card.Body>
                                    <Card.Title className="card-head">Wedding Bouquet</Card.Title>
                                    <Card.Text className="card-price"> $112.00 </Card.Text>
                                    <Button className="card-shopbtn" variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center" lg={4} md={4} sm={4} >
                            <Card className="card-sWhite">
                                <div className="card-sImg card-sImgFive">
                                
                                </div>
                               
                                <Card.Body>
                                    <Card.Title className="card-head">Wedding Candles</Card.Title>
                                    <Card.Text className="card-price"> $45.00 </Card.Text>
                                    <Button className="card-shopbtn"  variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                            <Card className="card-sWhite" >
                                <div className="card-sImg card-sImgSix">
                               
                                </div>
                                
                                <Card.Body>
                                    <Card.Title className="card-head">Wedding Lighted Signs</Card.Title>
                                    <Card.Text className="card-price"> $130.00 </Card.Text>
                                    <Button className="card-shopbtn" variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>





                </Col>
            </Row>
        </Container>
    );
}

export default Shop;
