import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Green() {
    return (
        <div>
            <Container fluid >
                <Row className="justify-content-md-center green ">
                    <Col className='greenOne' xs lg="5">
                    ORDER Full Package Plan & Get -25% discount!

                    </Col>
                    <Col className='greenTwo' xs lg="2">
                       <button>send request</button>
                    </Col>
                </Row>
                
               
            </Container>


        </div>
    )
}
export default Green;