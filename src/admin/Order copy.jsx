import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";

function Order() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:8000/get-orders');
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

    // Pagination logic for when there are more than 5 orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Condition to check if pagination is required (more than 5 orders)
    const totalPages = Math.ceil(orders.length / ordersPerPage);

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
                                            <th>Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.length <= 5 ? (
                                            // Display all orders if there are 5 or fewer
                                            orders.map((order, index) => {
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
                                                        <td>${totalAmount.toFixed(2)}</td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            // Display paginated orders when there are more than 5
                                            currentOrders.map((order, index) => {
                                                const totalAmount = order.products.reduce((sum, product) => {
                                                    return sum + (product.quantity * product.price);
                                                }, 0);

                                                return (
                                                    <tr key={order._id}>
                                                        <td>{index + 1 + (currentPage - 1) * ordersPerPage}</td>
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
                                                        <td>${totalAmount.toFixed(2)}</td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </Table>

                                {/* Pagination Controls (only visible when there are more than 5 orders) */}
                                {orders.length > 5 && (
                                    <div className="pagination-controls">
                                        <Button
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                        >
                                            Previous
                                        </Button>
                                        <span> Page {currentPage} of {totalPages} </span>
                                        <Button
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage(currentPage + 1)}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Order;





