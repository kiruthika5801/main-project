import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"; 
import Button from 'react-bootstrap/Button';
import dividers from "../images/divider_title.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Shop() {
    const products = [
        { id: 1, title: "Flower Decor", price: "$55.00",image:require("../images/product1-706x783.jpg")},
        { id: 2, title: "Wedding Arch", price: "$120.00",image:require("../images/product2-706x783.jpg")},
        { id: 3, title: "Table Centerpiece", price: "$80.00",image:require("../images/product3-706x783.jpg")},
        { id: 4, title: "Bridal Bouquet", price: "$45.00",image:require("../images/product4-706x783 (1).jpg")},
        { id: 5, title: "Fairy Lights", price: "$30.00",image:require("../images/product5-555x615.jpg")},
        { id: 6, title: "Stage Backdrop", price: "$200.00",image:require("../images/product6-555x615.jpg")},
    ];

    return (
        <Container fluid>
            <Row className="justify-content-md-center shop">
                <Col className="shop-main" xs lg={9}>
                    <Row className="w-head">
                        <Col lg={12} xs={10} className="wel-one">
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

                    {/* Product Grid */}
                    <Row className="shopBox">
                        {products.map((product) => (
                            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
                                <Card>
                                    {/* Fix: Add product.image to Card.Img */}
                                    <Card.Img  className="cardShop-img" variant="top" src={product.image} alt={product.title} />
                                    <Card.Body>
                                        <Card.Title className="cardShop-title">{product.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted cardShop-price">{product.price}</Card.Subtitle>
                                        <Button className="shopBtn" variant="primary">ADD TO CART</Button>
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
