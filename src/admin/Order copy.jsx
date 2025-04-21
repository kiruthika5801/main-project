import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import { Container, Row, Col, Table, Card } from "react-bootstrap";

function Order() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:7000/get-orders');
                const data = await response.json();
                if (response.ok) {
                    setOrders(data.orders);
                } else {
                    console.error('Error fetching orders:', data.error);
                }
            } catch (err) {
                console.error('Error fetching orders:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading orders...</div>;
    }

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center order-main">
                    <Col xs lg={12} className="order-in">
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center mb-4">Order Details</Card.Title>
                                <Table bordered responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Order ID</th>
                                            <th>User ID</th>
                                            <th>Email</th>
                                            <th>Products</th>
                                            <th>Order Date</th>
                                            <th>Total Amount</th> {/* Add Total Amount Column */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order, index) => {
                                            // Calculate total amount for each order
                                            const totalAmount = order.products.reduce((sum, product) => {
                                                return sum + (product.quantity * product.price);
                                            }, 0);

                                            return (
                                                <tr key={order._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{order._id}</td>
                                                    <td>{order.userId}</td>
                                                    <td>{order.email}</td>
                                                    <td>
                                                        <ul>
                                                            {order.products.map((product, idx) => (
                                                                <li key={idx}>
                                                                    {product.title} (Qty: {product.quantity}, {product.price})
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                                    <td>${totalAmount}</td> {/* Display Total Amount */}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Order;




