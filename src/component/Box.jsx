import React from "react";
import "../App.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Box() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        1 of 3
                    </Col>
                    
                </Row>
                
            </Container>

        </div>
    )
};
export default Box;