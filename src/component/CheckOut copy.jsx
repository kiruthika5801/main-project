import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../css/Checkout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CheckOut() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });
    const handleRegistration = (data) => { console.log(data) };

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/Register");
    };
    return (
        <Container fluid>
            <Row className="justify-content-md-center checkoutBox">
                <Col className='checkout-main' lg={10}>
                    <Row className='cHeadbox'><Col lg={12} className='checkHead'>CHECKOUT</Col></Row><hr />
                    <Row>
                        <Col lg={12}>



                            <Row className='CheckOption '>
                                <Col  className='newCos'>
                                    <h2 className='c-headOne'>New Customer</h2>
                                    <p className='c-paraOne'>Checkout Options:</p>
                                    <label>
                                        <input
                                            type="radio"
                                            className="form-check-input  me-2"
                                            name="account"
                                            {...register("account")}
                                            value="register"
                                            defaultChecked
                                        />
                                        <span className='regCheck'>Register Account</span>
                                    </label>
                                    <p className='c-paraTwo'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of your previous orders.</p>
                                    <Button variant="primary" onClick={handleRegister}>Continue</Button>
                                </Col>
                                <Col className='returnCos'>
                                    <h2 className='c-headOne'>Returning Customer</h2>
                                    <p className='c-paraOne'>I am a returning customer</p>
                                    <Row className='logBox'>
                                        <form onSubmit={handleSubmit(handleRegistration)} noValidate >
                                            <Row className='fOne'>
                                                <Col lg={12}>

                                                    <label className='formClass'>Email Address</label>
                                                    <input type="email" class="form-control w-100 mt-3  h-25 p-3" name="email" {...register('email',
                                                        {
                                                            required: 'Email is required',
                                                            pattern: {
                                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                                message: "please enter the valid email address"
                                                            }


                                                        })} />
                                                    <p style={{ color: "red" }}> {errors?.email && errors.email.message}</p>


                                                </Col>
                                            </Row>

                                            <Row className='fTwo'>
                                                <Col lg={12}>
                                                    <label className='formClass'>Password</label>
                                                    <input type="password" class="form-control w-100 mt-3 h-25 p-3" name="password" {...register('password',
                                                        {
                                                            required: "password is required",
                                                            minLength: {
                                                                value: 8,
                                                                message: "Password must be at least 8 characters"
                                                            },
                                                            maxLength: {
                                                                value: 12,
                                                                message: "Password cannot exceed 12 characters"
                                                            },
                                                            pattern: {
                                                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,
                                                                message: "please enter the valid password"
                                                            }

                                                        })} />
                                                    <p style={{ color: "red" }}> {errors?.password && errors.password.message}</p>

                                                </Col>

                                            </Row>
                                            <Row className='fButton'>
                                                <Col lg={12}>

                                                    <Button type="submit" className="btn">login</Button>



                                                </Col>
                                            </Row>

                                        </form>



                                    </Row>

                                </Col>
                            </Row>


                        </Col>

                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

export default CheckOut;