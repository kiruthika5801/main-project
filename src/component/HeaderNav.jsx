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
            <Col className="bar-out" md={10}>
              <Navbar expand="lg" className="mb-3">
                <Container fluid>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                  >
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 ps-5">
                        <Nav.Link as={Link} className='borde' to="/home">HOME </Nav.Link>
                        <Nav.Link as={Link} className='borde' to="/about">ABOUT </Nav.Link>
                        <Nav.Link as={Link} className='borde' to="/features">FEATURES</Nav.Link>
                        <Nav.Link as={Link} className='borde' to="/shop">SHOP</Nav.Link>
                        <Nav.Link as={Link} className='borde' to="/team">TEAM</Nav.Link>
                        <Dropdown>
                          <Dropdown.Toggle as={Nav.Link} to="/services/our-services" className="borde dropdown-toggle" style={{ textDecoration: 'none', color: 'white' }}>
                            SERVICES
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} className='dropOne' to="/services/our-services">OUR SERVICES</Dropdown.Item>
                            <Dropdown.Item as={Link} className='dropTwo' to="/services/single-services">SINGLE SERVICES</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={Link} className='borde' to="/blog">BLOG</Nav.Link>
                        <Nav.Link as={Link} className='borde' to="/contact">CONTACT</Nav.Link> 
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


