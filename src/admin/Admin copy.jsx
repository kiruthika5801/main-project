import React from "react";
import "../css/Admin.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link,Outlet  } from "react-router-dom";
import { FaBars, FaThLarge, FaBoxOpen, FaClipboardList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";


function Admin() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center admin-main">
                    <Col xs lg={12} className="admin-in">
                        <Row>
                            <Col className="ad-left" lg={2}>
                                <Row>
                                    <Col className="ad-one" lg={12}>
                                        <span><FaBars className="add-bars" /></span>
                                        Navigation
                                    </Col>
                                    <Col className="ad-links" lg={12}>
                                        <Nav className="flex-column admin-nav">
                                            <Nav.Link as={Link} to="/admin/dashboard" className="admin-link">
                                                <FaThLarge className="admin-icon" /> Dashboard
                                            </Nav.Link>
                                            {/* <Nav.Link as={Link} to="/admin/catalog" className="admin-link">
                                                <FaBoxOpen className="admin-icon" /> Catalog
                                            </Nav.Link> */}
                                            <Nav.Link as={Link} to="/admin/user" className="admin-link">
                                                <FaUsers className="admin-icon" /> User
                                            </Nav.Link>
                                            <Nav.Link as={Link} to="/admin/orders" className="admin-link">
                                                <FaClipboardList className="admin-icon" /> Orders
                                            </Nav.Link>
                                            <Nav.Link as={Link} to="/admin/Settings" className="admin-link">
                                                <FaClipboardList className="admin-icon" /> Settings
                                            </Nav.Link>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ad-right" lg={10}>
                                <Outlet />

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Admin;
