// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function Copy() {
//   return (
//     <>
//       {[ 'lg'].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="start"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default Copy;

// import React from 'react';
// import { Nav,  NavDropdown } from 'react-bootstrap';

// function Copy() {
//   return (
//     <Nav className="justify-content-end flex-grow-1 ps-5">
//     <Nav.Link href="#home">HOME</Nav.Link>
//     <Nav.Link href="#link">ABOUT</Nav.Link>
//     <Nav.Link href="#home">FEATURES</Nav.Link>
//     <Nav.Link href="#link">SHOP</Nav.Link>
//     <Nav.Link href="#home">TEAM</Nav.Link>
//     {/* Dropdown for Services */}
//     <NavDropdown title="SERVICES" id="nav-dropdown-services">
//       <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
//       <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
//       <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
//     </NavDropdown>
//     <Nav.Link href="#link">CONTACTS</Nav.Link>
//   </Nav>
//   );
// }
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function Copy(){
//   return(
//     <div>
//        <Carousel interval={5000} controls={false}>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     </div>
//   )
// };
// export default Copy;

import React from 'react';
import slideOne from "../images/slide1.jpg";
import slideTwo from "../images/slide2.jpg";
import slideThree from "../images/image.png";

function Main() {
    return (
        <div className="swiffy-slider slider-nav-autoplay slider-indicators-round slider-nav-animation slider-nav-animation-appear" data-slider-nav-autoplay-interval="5000">
            <ul className="slider-container">
                <li>
                    <img src={slideOne} style={{ width: "100%", height: "500px" }} alt="First slide" />
                    <div className="slider-content">
                        <h3>First Slide Label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </li>
                <li>
                    <img src={slideTwo} style={{ width: "100%", height: "500px" }} alt="Second slide" />
                    <div className="slider-content">
                        <h3>Second Slide Label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>
                <li>
                    <img src={slideThree} style={{ width: "100%", height: "500px" }} alt="Third slide" />
                    <div className="slider-content">
                        <h3>Third Slide Label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </li>
            </ul>
            <button type="button" className="slider-nav"></button>
            <button type="button" className="slider-nav slider-nav-next"></button>
           
        </div>
    );
}

export default Main;

