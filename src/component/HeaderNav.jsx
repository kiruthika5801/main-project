import React from 'react';
import { Row, Col, Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HeaderNav() {
  return (
    <div>
      <Container fluid>
        <Row className="bar">
          <Col className="bar-out" md={7}>
            {/* Navbar with expand="lg" */}
            <Navbar expand="lg" className="mb-3">
              <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="start"
                >
                  {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header> */}
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 ps-5">
                      <Nav.Link as={Link} to="#home">HOME </Nav.Link>
                      <Nav.Link as={Link} to="#link">ABOUT </Nav.Link>
                      <Nav.Link as={Link} to="#home">FEATURES</Nav.Link>
                      <Nav.Link as={Link} to="#link">SHOP</Nav.Link>
                      <Nav.Link as={Link} to="#home">TEAM</Nav.Link>
                      <Nav.Link as={Link} to="#link">SERVICES</Nav.Link>
                      <Nav.Link as={Link} to="#link">SHOP</Nav.Link>
                      <Nav.Link as={Link} to="#link">CONTACTS</Nav.Link>

                    </Nav>

                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderNav;
