import React, { useEffect } from "react";
import "../App.css"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import imagesOne from "../images/post-imageOne.jpg";
import imagesThree from "../images/post-imageThree.jpg";
import imagesTwo from "../images/post-imageTw0.jpg";
import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Section() {

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center section">
          <Col className="sec-main" lg={9} md={11} sm={12} xs={9}>
            <Row className="sectionBox">
              <Col lg={12}  className="card-sec">
                <Carousel
                  className=" carousal-box slider-nav-round carousal-height"
                  nextIcon={<FaArrowRight size={30} color="white" className="arrow-right" />}
                  prevIcon={<FaArrowLeft size={30} color="white" className="arrow-left" />}
                >
                  <Carousel.Item className="test-item">
                    <Card>
                      <div className="content-up">
                        <div className="test-icon">
                          <img src={imagesTwo} alt="testimonial-image" className="test-image" />

                        </div>
                      </div>

                      <Card.Body>
                        <Card.Title className="content-title"><h1 className="sec-head">We are extremely excited, but everything was even more that we hoped for!</h1></Card.Title>
                        <Card.Text className="sec-para"><p className="sec-para">Kelly & Brandon Walsh,CA</p></Card.Text>
                      </Card.Body>
                    </Card>

                  </Carousel.Item>
                  <Carousel.Item className="test-item">
                    <Card>
                      <div className="content-up">
                        <div className="test-icon">
                          <img src={imagesOne} alt="testimonial-image" className="test-image" />

                        </div>
                      </div>

                      <Card.Body>
                        <Card.Title className="content-title"><h1 className="sec-head">The ceremony was amazing! We are grateful for the creative caring approach.</h1></Card.Title>
                        <Card.Text className="sec-para"><p className="sec-para">Melissa & Ryan Smith,TX</p></Card.Text>
                      </Card.Body>
                    </Card>

                  </Carousel.Item>
                  <Carousel.Item className="test-item">
                    <Card>
                      <div className="content-up">
                        <div className="test-icon">
                          <img src={imagesThree} alt="testimonial-image" className="test-image" />

                        </div>
                      </div>

                      <Card.Body>
                        <Card.Title className="content-title"><h1 className="sec-head">The wedding was truly fantastic. Thank you for making our dream come true!</h1></Card.Title>
                        <Card.Text className="sec-para"><p className="sec-para">Alison & Mark Priston,NYC</p></Card.Text>
                      </Card.Body>
                    </Card>

                  </Carousel.Item>

                </Carousel>

              </Col>

            </Row>



          </Col>

        </Row>

      </Container>

    </div >
  )
};
export default Section;