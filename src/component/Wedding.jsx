import React, { useEffect } from 'react';
import { Container, Row, Col, Link } from 'react-bootstrap';
import dividers from "../images/divider_title.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiLink } from "react-icons/hi";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Wedding() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center wed ">
                    <Col className='wed-main' lg={12} md={12} xs={12}>
                        <Row className='wedding-one'>
                            <Col className='wedding-para' lg={12} md={12} sm={12}>Let Us Make Your Wedding Flawless</Col>
                        </Row>
                        <Row className='wed-sub'>
                            <Col className='blog-outer' lg={12} md={12} sm={12}>
                                <button className='wed-inBtn'>Send Request</button>
                            </Col>
                        </Row>


                    </Col>


                </Row>


            </Container>



        </div>

    );
};
export default Wedding;