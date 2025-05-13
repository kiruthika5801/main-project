import React from "react";
import "../css/OrderSuccess.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAction } from "../action/cartActions";
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';
import Thank from './Thank';



function OrderSuccess() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleContinue = () => {
        dispatch(clearAction());
        // navigate('/'); // Navigate to homepage
        // Navigate to the home page
        navigate("/", { replace: true });

        // Refresh the homepage by reloading the page after navigating
        setTimeout(() => {
            window.location.reload(); // Refresh only the homepage
        }, 100);


    };

    return (
        <div>
            <Header />
            <HeaderNav />
            <Container fluid>
                <Row className="justify-content-md-center succ-main">
                    <Col className="succ-in" xs lg={8}>
                        <Card className="p-4">
                            <h3 className="mb-4 text-center">YOUR ORDER HAS BEEN PLACED!</h3> <hr />
                            <Row>
                                <Col lg={12}>
                                    <p>Your order has been <strong>successfully processed!</strong></p>
                                    <p>You can view your order history by going to the <strong>my account</strong> page and by clicking on history.</p>
                                    <p>If your purchase has an associated download, you can go to the account downloads page to view them.</p>
                                    <p>Please direct any questions you have to the <strong>store owner</strong>.</p>
                                    <p>Thanks for shopping with us online!</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col className="d-flex justify-content-end">
                                    <button className="btn btn-success" onClick={handleContinue}>
                                        Continue
                                    </button>
                                </Col>
                            </Row>


                        </Card>




                    </Col>

                </Row>

            </Container>
            <Thank />


        </div>
    );
};
export default OrderSuccess;