import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/Registration.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../action/userAction";
import { Col, Container, Row, Button,Alert  } from 'react-bootstrap';

function Registration() {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({ mode: "onSubmit" });
     const [successMessage, setSuccessMessage] = useState("");
     const dispatch = useDispatch();
     const navigate = useNavigate();


    const handleRegistration = (data) => {
        console.log("Dispatching Data:", data); // Check data
        dispatch(registerUser(data));
        console.log("Dispatched REGISTER_USER");
        setSuccessMessage("Registered Successfully!");
    reset(); // Reset form after submission
     navigate("/profile");

    };
    const password = watch("password", "");

    return (
        <div>
             {successMessage && <Alert variant="success" onClose={() => setSuccessMessage("")} dismissible>{successMessage}</Alert>}
            <form onSubmit={handleSubmit(handleRegistration)} noValidate>
                <Container fluid>
                    <Row className="justify-content-md-center reg">
                        <Col lg={9} className="reg-main mx-auto">
                            <Row className="bg-white Reg-form w-100 mx-auto mt-5 ps-4">
                                <Row className="Rhead">
                                    <Col lg={6}>
                                        <h3 className="RheadOne mt-2">Your Personal Details</h3>
                                        <hr />
                                    </Col>
                                    <Col lg={6}>
                                        <h3 className="RheadOne mt-2">Your Address</h3>
                                        <hr />
                                    </Col>
                                </Row>

                                {/* First Name and Last Name */}
                                <Row className="mt-3">
                                    <Col lg={6}>
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control w-100 mt-3 h-25 p-3"
                                            {...register("firstName", {
                                                required: "First name is required",
                                                pattern: {
                                                    value: /^[A-Za-z]{2,30}$/,
                                                    message: "Invalid first name"
                                                }
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.firstName?.message}</p>
                                    </Col>

                                    <Col lg={6}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control w-100 mt-3 h-25 p-3"
                                            {...register("lastName", {
                                                required: "Last name is required",
                                                pattern: {
                                                    value: /^[A-Za-z]{2,30}$/,
                                                    message: "Invalid last name"
                                                }
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.lastName?.message}</p>
                                    </Col>
                                </Row>

                                {/* Email and Telephone */}
                                <Row className="mt-3">
                                    <Col lg={6}>
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control w-100 mt-3 h-25 p-3"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Please enter a valid email address"
                                                }
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.email?.message}</p>
                                    </Col>

                                    <Col lg={6}>
                                        <label>Telephone</label>
                                        <input
                                            type="tel"
                                            className="form-control w-100 mt-3 h-25 p-3"
                                            {...register("telephone", {
                                                required: "Please enter your telephone number",
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: "Please enter a valid 10-digit telephone number"
                                                }
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.telephone?.message}</p>
                                    </Col>
                                </Row>
                                {/* Password and Confirm Password */}
                                <Row className="mt-3">
                                    <Col lg={6}>
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control w-100 mt-3 h-25 p-3"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters"
                                                }
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.password?.message}</p>
                                    </Col>

                                    <Col lg={6}>
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control w-100 mt-3 h-25 p-3"
                                            {...register("confirmPassword", {
                                                required: "Please confirm your password",
                                                validate: (value) => value === password || "Passwords do not match"
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.confirmPassword?.message}</p>
                                    </Col>
                                </Row>
                                <Row className="mt-3 mh-25">
                                    <Col lg={6}>
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            className="form-control w-100 mt-3 h-25 p-3"
                                            {...register("address", {
                                                required: "Address is required",
                                                minLength: {
                                                    value: 5,
                                                    message: "Address must be at least 5 characters"
                                                }
                                            })}
                                        />
                                        <p style={{ color: "red" }}>{errors?.address && errors.address.message}</p>
                                    </Col>
                                    <Col lg={6}>
                                        <label class="form-label"> Select City</label>
                                        <select className="input form-select w-100 h-25 pb-1  mt-2 " {...register("city",
                                            { required: "please select the city" })}>

                                            <option value={""}>Select City</option>
                                            <option value={"coimbatore"}>coimbatore</option>
                                            <option value={"chennai"}>chennai</option>
                                            <option value={"tirupur"}>tirupur</option>
                                            <option value={"madurai"}>madurai</option>

                                        </select>
                                        <p style={{ color: "red" }}>{errors?.city && errors.city.message}</p>


                                    </Col>
                                </Row>
                                <Row className="mt-3 mh-25">
                                    <Col lg={6}>
                                        <label class="form-label"> Select Country</label>
                                        <select className="input form-select w-100  pb-1 mt-2 "  
                                        style={{ height: "50px" }}
                                        {...register("country",
                                            { required: "please select the country" })}>

                                            <option value={""}>Select Country</option>
                                            <option value={"india"}>india</option>
                                            <option value={"united states"}>united states</option>
                                            <option value={"germany"}>germany</option>
                                            <option value={"australia"}>australia</option>

                                        </select>
                                        <p style={{ color: "red" }}>{errors?.country && errors.country.message}</p>
                                    </Col>
                                    <Col lg={6}><label className="form-label">Select State</label>
                                        <select
                                            className="input form-select w-100  pb-1 mt-2"
                                            style={{ height: "50px" }}
                                            {...register("state", { required: "Please select the state" })}
                                        >
                                            <option value="">Select State</option>
                                            <option value="tamil nadu">Tamil Nadu</option>
                                            <option value="kerala">Kerala</option>
                                            <option value="karnataka">Karnataka</option>
                                            <option value="maharashtra">Maharashtra</option>
                                        </select>
                                        <p style={{ color: "red" }}>{errors?.state && errors.state.message}</p></Col>
                                </Row>


                                {/* Submit Button */}
                                <Row className="mt-4">
                                    <Col className="text-center">
                                        <Button type="submit" variant="primary" className="px-5" >Register</Button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    );
};

export default Registration;
