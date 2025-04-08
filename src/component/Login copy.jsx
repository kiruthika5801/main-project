import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../action/userAction";
import "../css/Login.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (data) => {
        try {
            
            const response = await fetch('http://localhost:7000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                dispatch(loginUser(result.user));
                navigate('/profile'); // Adjust to your actual dashboard route
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <Container fluid>
                <form onSubmit={handleSubmit(handleLogin)} noValidate >

                    <Row className="justify-content-md-center login">
                        <Col xs lg={4} className='login-main'>
                            <Row className='login-one'>
                                <Col lg={12}>
                                    <h2 className='login-head'>LOGIN</h2>
                                </Col>
                            </Row>
                            <Row className='lOne'>
                                <Col lg={12}>
                                    <label className='loginClass'>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control w-100 mt-2 h-25 p-3"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Please enter a valid email address"
                                            }
                                        })}
                                    />
                                    <p style={{ color: "red" }}>{errors?.email && errors.email.message}</p>
                                </Col>
                            </Row>
                            <Row className='lTwo'>
                                <Col lg={12} >
                                    <label className='loginClass'>Password</label>
                                    <input
                                        type="password"
                                        className="form-control w-100 mt-2 h-25 p-3"
                                        {...register('password', {
                                            required: "Password is required",
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
                                                message: "Please enter a valid password"
                                            }
                                        })}
                                    />
                                    <p style={{ color: "red" }}>{errors?.password && errors.password.message}</p>
                                </Col>
                            </Row>
                            <Row className='lButton text-center'>
                                <Col lg={12}>
                                    <Button type="submit" variant="primary" className='loginbtn'>Login</Button>
                                </Col>
                            </Row>
                            <Row className="loginLast" >
                                <Col lg={12}> <p className="mt-1">New user? <Link to="/Register" className="text-decoration-none" >Create an account</Link></p></Col>
                            </Row>
                        </Col>
                    </Row>

                </form>
            </Container>
        </div>
    );
}

export default Login;