import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { hideAlert } from "../action/alertActions"; 
import '../css/Popup.css';
import { Container, Row, Col, Alert } from "react-bootstrap";
import { MdCheckCircleOutline } from "react-icons/md";

function Alerts() {
    const dispatch = useDispatch(); // Get Redux dispatch function
    const { show, productTitle } = useSelector((state) => state.alert); // Get alert state from Redux

    return (
        <div>
            {show && ( // ✅ If show is true, display alert
                <Alert className="alertsBox" variant="success" onClose={() => dispatch(hideAlert())} dismissible>
                    <Row>
                        <Col lg={12} md={12} xs={12} className="checkBox">
                            <Alert.Heading>
                                <MdCheckCircleOutline className="check" />
                            </Alert.Heading>
                        </Col>
                    </Row>
                    <Row className="h2">
                        <Col lg={12} md={12} xs={12}>Success!!</Col>
                    </Row>
                    <Row  className="paraAlert">
                        <Col lg={12} md={12} xs={12}>You have added <strong> {productTitle} </strong> to your shopping cart! </Col>
                    </Row>
                </Alert>
            )}
        </div>
    );
};

export default Alerts;
