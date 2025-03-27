import React from "react";
import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import dividers from "../images/divider_title.png";

const products = [
    { title: "Flower Decor", price: "$55.00", className: "card-sImgOne" },
    { title: "Wedding Arch", price: "$65.00", className: "card-sImgTwo" },
    { title: "Table Centerpiece", price: "$87.00", className: "card-sImgThree" },
    { title: "Wedding Bouquet", price: "$112.00", className: "card-sImgFour" },
    { title: "Wedding Candles", price: "$45.00", className: "card-sImgFive" },
    { title: "Wedding Lighted Signs", price: "$130.00", className: "card-sImgSix" },
];

function Shop() {
    return (
       
        <Container fluid>
            <Row className="justify-content-md-center shop">
                <Col lg={10} md={11} sm={9} xs={9} className="shop-main">
                    <Row className="w-head">
                        <Col className="wel-one">Shop Our Latest Styles</Col>
                    </Row>
                    <Row className="w-para">
                        <Col className="wel-two">Shop</Col>
                    </Row>
                    <Row className="w-divider">
                        <Col className="d-flex justify-content-center align-items-center">
                            <img className="d-images" src={dividers} alt="divider-title" />
                        </Col>
                    </Row>
                    <Row className="shop-boxOne ">
                        {products.slice(0, 3).map((product, index) => (
                            <Col key={index} className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                                <Card className="card-sWhite">
                                    <div className={`card-sImg ${product.className}`}></div>
                                    <Card.Body>
                                        <Card.Title className="card-Shead">{product.title}</Card.Title>
                                        <Card.Text className="card-price">{product.price}</Card.Text>
                                        <Button className="card-shopbtn" variant="primary">ADD TO CART</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className="shop-boxTwo ">
                        {products.slice(3, 6).map((product, index) => (
                            <Col key={index} className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                                <Card className="card-sWhite">
                                    <div className={`card-sImg ${product.className}`}></div>
                                    <Card.Body>
                                        <Card.Title className="card-Shead">{product.title}</Card.Title>
                                        <Card.Text className="card-price">{product.price}</Card.Text>
                                        <Button className="card-shopbtn" variant="primary">ADD TO CART</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;
