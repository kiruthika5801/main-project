import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Updates() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center updates">
                    <Col  lg={9} md={11} xs={10} className='updates-main'>
                        <Row>
                            <Col className='up-left' lg={6} md={6} xs={12}>Stay Tuned with Updates!</Col>
                            <Col className='up-right' lg={6} md={6} xs={12}>
                            <Row className='up-rightBox'>
                                <Col lg={8} md={8} xs={7}><input type="text" class="input-box" placeholder="Enter your email" required/></Col>
                                <Col lg={4} md={4} xs={5}><button className='up-btn'>Submit</button></Col>
                            </Row>
                            
                            </Col>
                        </Row>
                        

                    </Col>

                </Row>


            </Container>


        </div>
    );
};
export default Updates;