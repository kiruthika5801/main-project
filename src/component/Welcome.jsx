import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dividers from "../images/divider_title.png";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Welcome() {
    return (
        <div>
            <Container fluid >

                <Row className="justify-content-md-center box ">
                    <Col className='wel-main' xs lg="9">
                        <Row className='w-head'>
                            <Col className='wel-one'>Let's Plan Your Perfect Wedding</Col>
                        </Row>
                        <Row className='w-para'>
                            <Col className='wel-two'>welcome</Col>
                        </Row>
                        {/* <Row className='w-divider' >
                            <Col className='d-flex justify-content-center align-items-center' ><img  className='images' src={dividers} alt="divider-title" /></Col>
                        </Row> */}
                        
                    </Col>

                </Row>


            </Container>

        </div>

    )
};
export default Welcome;