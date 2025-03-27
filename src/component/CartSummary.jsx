import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideCartSummary } from "../action/cartSummaryActions";
import { removeFromCart } from "../action/cartSummaryActions"; // Import remove action
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import "../css/Summary.css";
import { Row, Col, Alert, Button } from "react-bootstrap";

function CartSummary() {
    const navigate = useNavigate(); // Create navigate function
    const dispatch = useDispatch();

    const handleNavigate = (e) => {
        e.preventDefault(); 
        navigate("/cart");
    };
     const handleCheckout = (e) => {
        e.preventDefault(); 
        navigate("/checkOut");
    };

    const cartItems = useSelector(state => state.cartSummary?.cartItems) || [];
    const show = useSelector(state => state.cartSummary?.show);

    const totalAmount = useMemo(() =>
        cartItems.reduce((total, item) => {
            const price = parseFloat(String(item.price).replace("$", "")) || 0;
            return total + price * (item.quantity || 1);
        }, 0),
        [cartItems]);

    return (
        <>
            {show && (
                <Alert className="cartBox" variant="success" >
                    <Row className="d-flex justify">
                        <Col lg={12} md={12} xs={12} >
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <Row key={item.id} className="sumOne align-items-center position-relative">
                                        {/* Remove Button */}
                                        <Button
                                            className="remove-btn"
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        >
                                            ×
                                        </Button>

                                        <Col lg={4} md={4} xs={4} className="text-center">
                                            <img src={item.image} alt={item.title} className="cart-img" />

                                        </Col>
                                        <Col lg={7} md={7} xs={8}>
                                            <Row className="sumRight">
                                                <Col className="sumRightOne" lg={12} md={12} xs={12}><strong>{item.title}</strong></Col>
                                                <Col className="sumRightTwo" lg={12} md={12} xs={12}>{item.quantity} × {item.price}</Col>
                                            </Row>
                                        </Col>

                                    </Row>
                                ))
                            ) : (
                                <Row className="text-center">
                                    <Col lg={12} md={12} xs={12}><strong>Cart is empty</strong></Col>
                                </Row>
                            )}
                            <Row>
                                <Col lg={12} md={12} xs={12}>
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <td className="text-right"><strong>Sub-Total:</strong></td>
                                                <td className="text-right">${totalAmount.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right"><strong>Total:</strong></td>
                                                <td className="text-right">${totalAmount.toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </Col>
                            </Row>



                            <div className="text-center cart-buttons">
                                <Button variant="primary" href="/cart" onClick={handleNavigate}>View Cart</Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="primary" href="/checkout" onClick={handleCheckout}>Checkout</Button>
                            </div>
                        </Col>
                    </Row>
                </Alert>
            )}
        </>
    );
}

export default CartSummary;



