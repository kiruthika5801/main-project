import React from "react";
import "../App.css";
import Alerts from "./Alerts";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HiLink } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import productOne from "../images/product1-706x783.jpg";
import productTwo from "../images/product2-706x783.jpg";
import productThree from "../images/product3-706x783.jpg";
import productFour from "../images/product4-706x783 (1).jpg";
import productFive from "../images/product5-555x615.jpg";
import productSix from "../images/product6-555x615.jpg";

import dividers from "../images/divider_title.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../action/cartActions";
import { showAlert } from "../action/alertActions";

const products = [
    {id:"1", title: "Flower Decor", price: "$55.00", className: "card-sImgOne", image:productOne, rewardPoints: 55},
    {id:"2", title: "Wedding Arch", price: "$65.00", className: "card-sImgTwo", image: productTwo, rewardPoints: 65 },
    { id:"3", title: "Table Centerpiece", price: "$87.00", className: "card-sImgThree", image: productThree, rewardPoints: 87 },
    { id:"4", title: "Wedding Bouquet", price: "$112.00", className: "card-sImgFour", image: productFour, rewardPoints: 112 },
    { id:"5", title: "Wedding Candles", price: "$45.00", className: "card-sImgFive", image: productFive, rewardPoints: 45 },
    { id:"6", title: "Wedding Lighted Signs", price: "$130.00", className: "card-sImgSix", image: productSix, rewardPoints: 130 }
];

function Shop() {
    const dispatch = useDispatch(); 
    const loggedInUser = useSelector((state) => state.user.loggedInUser);


    const handleAddToCart = (product) => {
        if (!product.id) {
            console.error("Error: Missing 'id' in product", product);
            return; // Prevent adding items without an ID
        }
    
        console.log("Adding to cart:", product); 
        dispatch(addToCart(product)); // Dispatch product with ID
        dispatch(showAlert(product.title));  // Show alert with product title
        console.log("showAlert:", product.title);
    };

    const handleAddOrder = async (product) => {
        if (!loggedInUser || !loggedInUser._id) {
            alert("Please login first!");
            return;
        }
    
        try {
            console.log("Sending order request:", {  
                userId: loggedInUser._id,
                productId: product.id,
                title: product.title,
                quantity: 1,
                price: product.price
            });
    
            const response = await fetch('http://localhost:7000/add-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: loggedInUser._id,
                    productId: product.id,
                    title: product.title,
                    quantity: 1,
                    price: product.price
                })
            });
    
            const result = await response.json();
            console.log("API Response:", result); 
    
            if (response.ok && result.success) {
                alert("Order placed successfully!");
            } else {
                alert(result.error || " Failed to place order.");
            }
        } catch (error) {
            console.error("Error placing order:", error);
            alert(" An error occurred while placing the order.");
        }
    };
    
    
    return (

        <Container fluid>
            <Row className="justify-content-md-center shop">
                <Col lg={10} md={11} sm={9} xs={9} className="shop-main">
                    <Row className="shop-head">
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
                                    <div className={`card-sImg ${product.className}`}>
                                        <div className='shopHover'>
                                            <HiLink className="shopIcon" />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-Shead">{product.title}</Card.Title>
                                        <Card.Text className="card-price">{product.price}</Card.Text>
                                        <Button className="card-shopbtn" variant="primary" onClick={() => handleAddToCart(product)}>ADD TO CART</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className="shop-boxTwo ">
                        {products.slice(3, 6).map((product, index) => (
                            <Col key={index} className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                                <Card className="card-sWhite">
                                    <div className={`card-sImg ${product.className}`}>
                                        <div className='shopHover'>
                                            <HiLink className="shopIcon" />
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-Shead">{product.title}</Card.Title>
                                        <Card.Text className="card-price">{product.price}</Card.Text>
                                        <Button 
                                        className="card-shopbtn"
                                         variant="primary" 
                                         onClick={() =>{
                                            handleAddToCart(product);
                                            handleAddOrder(product);
                                        }} 
                                        >
                                            ADD TO CART
                                            </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Alerts/>
        </Container>
    );
}

export default Shop;
