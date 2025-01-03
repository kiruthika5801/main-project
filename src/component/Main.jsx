import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import slideOne from "../images/slide1.jpg";
import divider from "../images/divider_white.webp"
import slideTwo from "../images/slide2.jpg";
import slideThree from "../images/image.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Main() {
    return (
        <div>
            <Container fluid className='welcome'>
                <div>
                    <Carousel >
                        <Carousel.Item>
                            <img
                                src={slideOne}
                                style={{ width: "100%", height: "500px" }}
                                alt=" first slide"
                                className="zoom-slide"
                            />
                            <Carousel.Caption className='captionOne'>
                                <h1>We'll make your wedding perfect</h1>
                                <img className='images'  src={divider} alt="divider-logo" />
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={slideTwo}
                                style={{ width: "100%", height: "500px" }}
                                className="zoom-slide"
                                alt=" second slide" />
                            <Carousel.Caption className='captionTwo'>
                                <h1>Georgeous flower for your special event </h1>
                                <img className='images'  src={divider} alt="divider-logo" />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={slideThree}
                                style={{ width: "100%", height: "500px" }}
                                className="zoom-slide"
                                alt=" third slide" />
                            <Carousel.Caption className='captionThree'>
                                <h1>Hand Tied Boutiquets</h1>
                                <img className='images'  src={divider} alt="divider-logo" />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>


                </div>






            </Container>


        </div>
    )
};
export default Main;






