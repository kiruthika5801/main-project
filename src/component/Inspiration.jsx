import React from "react";
import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Inspiration() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="insImage"></Col>
                    <Col>2 of 2</Col>
                </Row>

            </Container>

        </div>
    )
}
export default Inspiration;