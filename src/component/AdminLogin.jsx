import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        try {
            const response = await fetch("http://localhost:8000/admin-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setLoginError("Admin login successful");  // Success message displayed here
                setTimeout(() => {
                    navigate('/admin');  // Delay navigation to show success message
                }, 2000);  // Adjust delay as needed
            } else {
                setLoginError(result.error);  // Show error message
            }
        } catch (error) {
            console.error("Error:", error);
            setLoginError("Something went wrong. Please try again later.");
        }
    };

    return (
        <div>
            <Container fluid>
                <form onSubmit={handleSubmit(handleLogin)} noValidate>
                    <Row className="justify-content-md-center login">
                        <Col xs lg={4} className='login-main'>
                            <Row className='login-one'>
                                <Col lg={12}>
                                    <h2 className='login-head'> ADMIN LOGIN</h2>
                                </Col>
                            </Row>

                            <Row className='lOne'>
                                <Col lg={12}>
                                    <label className='loginClass'>User Name</label>
                                    <input
                                        type="text"
                                        className="form-control w-100 mt-2 h-25 p-3"
                                        {...register('username', {
                                            required: 'Username is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9_]{3,20}$/,
                                                message: "Username must be 3-20 characters"
                                            }
                                        })}
                                    />
                                    <p style={{ color: "red" }}>{errors?.username && errors.username.message}</p>
                                </Col>
                            </Row>

                            <Row className='lTwo'>
                                <Col lg={12}>
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
                                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,12}$/,
                                                message: "Please enter a valid password"
                                            }
                                        })}
                                    />
                                    <p style={{ color: "red" }}>{errors?.password && errors.password.message}</p>
                                </Col>
                            </Row>

                            {/* Login error or success message */}
                            {loginError && (
                                <Row className="loginError">
                                    <Col lg={12}>
                                        <p style={{ 
                                            color: loginError === "Admin login successful" ? "green" : "red", 
                                            textAlign: "center" 
                                        }}>
                                            {loginError}
                                        </p>
                                    </Col>
                                </Row>
                            )}

                            <Row className='lButton text-center'>
                                <Col lg={12}>
                                    <Button type="submit" variant="primary" className='loginbtn'>Login</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
}

export default AdminLogin;

