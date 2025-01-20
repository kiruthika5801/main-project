import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import slideOne from "../images/slide1.jpg";
import divider from "../images/divider_white.webp"
import slideTwo from "../images/slide2.jpg";
import slideThree from "../images/image.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Main() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // Initialize AOS
    }, []); // Empty dependency array to ensure it runs only once
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
                                <h1 data-aos="fade-up" data-aos-delay="100">We'll make your wedding perfect</h1>
                                <img data-aos="fade-up" data-aos-delay="300" className='images' src={divider} alt="divider-logo" />

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={slideTwo}
                                style={{ width: "100%", height: "500px" }}
                                className="zoom-slide"
                                alt=" second slide" />
                            <Carousel.Caption className='captionTwo'>
                                <h1 data-aos="fade-up" data-aos-delay="400">Georgeous flower for your special event </h1>
                                <img data-aos="fade-up" data-aos-delay="500" className='images' src={divider} alt="divider-logo" />
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
                                <img className='images' src={divider} alt="divider-logo" />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>




            </Container>


        </div>


    )
};
export default Main;






