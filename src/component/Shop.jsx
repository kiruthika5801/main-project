import React from "react";
import "../App.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dividers from "../images/divider_title.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Shop() {
    const products = [
        { id: 1, title: "Flower Decor", price:"$55.00" , image: "https://via.placeholder.com/150" },
        { id: 2, title: "Product 2", description: "This is product 2", image: "https://via.placeholder.com/150" },
        { id: 3, title: "Product 3", description: "This is product 3", image: "https://via.placeholder.com/150" },
        { id: 4, title: "Product 4", description: "This is product 4", image: "https://via.placeholder.com/150" },
        { id: 5, title: "Product 5", description: "This is product 5", image: "https://via.placeholder.com/150" },
        { id: 6, title: "Product 6", description: "This is product 6", image: "https://via.placeholder.com/150" },
      ];
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center shop">
                    <Col className="shop-main"   xs lg={9}>
                    <Row className='w-head'>
                            <Col   lg={12} xs={10} className='wel-one'> Shop Our Latest Styles</Col>
                        </Row>
                        <Row className='w-para'>
                            <Col lg={12} xs={12} className='wel-two'>shop</Col>
                        </Row>
                        <Row className='w-divider' >
                            <Col className='d-flex justify-content-center align-items-center' ><img className='d-images' src={dividers} alt="divider-title" /></Col>
                        </Row>
                        <Row className='shopBox'>


                        </Row>

                       
                    </Col>
                    
                    
                </Row>
                
            </Container>

        </div>
    )
};
export default Shop;