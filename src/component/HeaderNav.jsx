import React from 'react';
import { Row, Col, Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas, DropdownMenu } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HeaderNav() {
  return (
    <div>
      <Container fluid>
        <Row className="bar">
          <Col className="bar-out" md={9}>
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
                      <Nav.Link as={Link} className='borde' to="#home">HOME </Nav.Link>
                      <Nav.Link as={Link} className='borde' to="#about">ABOUT </Nav.Link>
                      <Nav.Link as={Link} className='borde' to="#features">FEATURES</Nav.Link>
                      <Nav.Link as={Link} className='borde' to="#shop">SHOP</Nav.Link>
                      <Nav.Link as={Link} className='borde' to="#team">TEAM</Nav.Link>
                      <Dropdown>
                        <Dropdown.Toggle as={Nav.Link} className="borde dropdown-toggle">
                          <Link to="#services" style={{ textDecoration: 'none', color: 'inherit' }}>
                            SERVICES
                          </Link>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item className='dropOne' href="#/service-one">OUR SERVICES</Dropdown.Item>
                          <Dropdown.Item className='dropTwo' href="#/service-two">SINGLE SERVICES</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Nav.Link as={Link} className='borde' to="#shop">SHOP</Nav.Link>
                      <Nav.Link as={Link} className='borde' to="#contact">CONTACTS</Nav.Link>

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


