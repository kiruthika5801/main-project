import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaShoppingCart, FaMoneyBillWave, FaUsers, FaBoxOpen } from "react-icons/fa";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalUsers: 0,
    totalProducts: 0,
  });

  useEffect(() => {
    fetch("http://localhost:8000/dashboard-summary")
      .then((res) => res.json())
      .then((data) => setDashboardData(data))
      .catch((err) => console.error("Failed to load dashboard data:", err));
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center dash-main">
          <Col xs lg={11} className="dash-in">
            <Row className="dash-box">

              {/* Total Orders */}
              <Col lg={6} className="mb-4">
                <Card className="text-white tile-card p-3">
                  <Card.Header className="fw-bold fs-5">Total Orders</Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <FaShoppingCart size={30} />
                      <h2>{dashboardData.totalOrders}</h2>
                    </div>
                    <p className="mb-3 text-center">
                      Total number of customer purchases made so far.<br />
                      Each order reflects a step closer to a perfect celebration.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Total Sales */}
              <Col lg={6} className="mb-4">
                <Card className="text-white tile-card p-3">
                  <Card.Header className="fw-bold fs-5">Total Sales</Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <FaMoneyBillWave size={30} />
                      <h2>${dashboardData.totalRevenue}</h2>
                    </div>
                    <p className="mt-3 text-center">
                      Total revenue earned from product sales.<br />
                      Helps track business growth and earnings.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Total Customers */}
              <Col lg={6} className="mb-4">
                <Card className="text-white tile-card p-3">
                  <Card.Header className="fw-bold fs-5">Total Customers</Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <FaUsers size={30} />
                      <h2>{dashboardData.totalUsers}</h2>
                    </div>
                    <p className="mt-3 text-center">
                      Number of users who shopped with us.<br />
                      Represents our trusted and happy buyers.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Total Products */}
              <Col lg={6} className="mb-4">
                <Card className="text-white tile-card p-3">
                  <Card.Header className="fw-bold fs-5">Total Products</Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <FaBoxOpen size={30} />
                      <h2>{dashboardData.totalProducts}</h2>
                    </div>
                    <p className="mt-3 text-center">
                      Total items listed for wedding and event needs.<br />
                      From gifts to decor — everything under one roof.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;


