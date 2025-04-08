import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import "../css/OrderSummary.css";
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser || !loggedInUser._id) {
      // navigate('/login'); // redirect if not logged in
      return;
    }

    const fetchOrderSummary = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500)); // 0.5 second delay
        const response = await fetch(`http://localhost:7000/get-order-summary/${loggedInUser._id}`);
        const data = await response.json();
        if (response.ok) {

          setOrder(data.order);
        } else {
          console.error("Order fetch error:", data.error);
        }
      } catch (err) {
        console.error("Error fetching order summary:", err);
      }
    };

    fetchOrderSummary();
  }, [loggedInUser]);

  // ✅ Calculate total amount
  const totalAmount = useMemo(() => {
    if (!order || !order.products) return 0;
    return order.products.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      return total + price * (item.quantity || 1);
    }, 0);
  }, [order]);

  if (!order) {
    return <div>Loading your order summary...</div>;
  }



  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center order-main">
        <Col className='order-in' xs lg="10" >

          <Card className="p-4">
            <h3 className="mb-4 text-center">Order Summary</h3>

            <Row>
              <Col><strong>Order ID:</strong> {order._id}</Col>
              <Col><strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}</Col>
              <Col><strong>Email:</strong> {order.email}</Col>
            </Row>

            <hr />
            <Row className='order-one'>
              <Col lg={12}>
                <Table bordered className="mt-3">
                  <thead>
                    <tr>

                      <th>Title</th>
                      <th>Product ID</th>
                      <th>Quantity</th>
                      <th>Price ($)</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((product, index) => (
                      <tr key={index}>

                        <td>{product.title}</td>
                        <td>{product.productId || "N/A"}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{(product.quantity * parseFloat(product.price)).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

              </Col>
            </Row>
            <Row className='order-down'>
              <Col lg={6}>
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
            <Row className="mt-3">
              <Col className="d-flex justify-content-end">
                <button className="btn btn-success">
                  Confirm Order
                </button>
              </Col>
            </Row>


          </Card>

        </Col>

      </Row>

    </Container>
  );
};

export default OrderSummary;
