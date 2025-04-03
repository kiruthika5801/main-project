import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/Registration.css";
import { useDispatch,useSelector } from "react-redux";
import { registerUser } from "../action/userAction";
import { Col, Container, Row, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Registration() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({ mode: "onSubmit" });
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartSummary.cartItems)

  const handleRegistration = async (userData) => {
    // Ensure that products array is populated with necessary details
    if (cartItems.length === 0) {
      return alert("No products in cart. Please add products before registration.");
    }
  
    const products = cartItems.map(item => ({
      productId: item.id, 
      title: item.title,
      quantity: item.quantity,
      price: String(item.price) // ✅ Convert price to string
    }));
    console.log("Products data before sending:", products); // Debugging
  
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.telephone || !userData.password) {
      return alert('All fields are required');
    }
  
    try {
      const response = await fetch('http://localhost:7000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, products }),
      });
  
      const result = await response.json();
      if (response.ok) {
        dispatch(registerUser(userData)); // Dispatch after successful registration
        setSuccessMessage(result.message || "Registered Successfully!");
        reset();
        navigate("/profile");
      } else {
        alert(result.error || "Registration failed");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Something went wrong. Please try again.");
    }
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
                  <Col lg={6}><h3>Your Personal Details</h3></Col>
                  <Col lg={6}><h3>Your Address</h3></Col>
                </Row>

                {/* First Name and Last Name */}
                <Row>
                  <Col lg={6}><label>First Name</label>
                    <input {...register("firstName", { required: "First name is required" })} className="form-control"/>
                    <p style={{ color: "red" }}>{errors.firstName?.message}</p>
                  </Col>

                  <Col lg={6}><label>Last Name</label>
                    <input {...register("lastName", { required: "Last name is required" })} className="form-control"/>
                    <p style={{ color: "red" }}>{errors.lastName?.message}</p>
                  </Col>
                </Row>

                {/* Email and Telephone */}
                <Row>
                  <Col lg={6}><label>Email</label>
                    <input {...register("email", { required: "Email is required" })} className="form-control"/>
                    <p style={{ color: "red" }}>{errors.email?.message}</p>
                  </Col>
                  <Col lg={6}><label>Telephone</label>
                    <input {...register("telephone", { required: "Telephone is required" })} className="form-control"/>
                    <p style={{ color: "red" }}>{errors.telephone?.message}</p>
                  </Col>
                </Row>

                {/* Password and Confirm Password */}
                <Row>
                  <Col lg={6}><label>Password</label>
                    <input type="password" {...register("password", { required: "Password is required" })} className="form-control"/>
                    <p style={{ color: "red" }}>{errors.password?.message}</p>
                  </Col>
                  <Col lg={6}><label>Confirm Password</label>
                    <input type="password" {...register("confirmPassword", { validate: (value) => value === password || "Passwords do not match" })} className="form-control"/>
                    <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
                  </Col>
                </Row>

                {/* Address */}
                <Row>
                  <Col lg={6}><label>Address</label>
                    <input {...register("address", { required: "Address is required" })} className="form-control"/>
                    <p style={{ color: "red" }}>{errors.address?.message}</p>
                  </Col>

                  <Col lg={6}><label>City</label>
                    <select {...register("city", { required: "City is required" })} className="form-select">
                      <option value="">Select City</option>
                      <option value="coimbatore">Coimbatore</option>
                      <option value="chennai">Chennai</option>
                      <option value="madurai">Madurai</option>
                    </select>
                    <p style={{ color: "red" }}>{errors.city?.message}</p>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6}><label>State</label>
                    <select {...register("state", { required: "State is required" })} className="form-select">
                      <option value="">Select State</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Kerala">Kerala</option>
                    </select>
                    <p style={{ color: "red" }}>{errors.state?.message}</p>
                  </Col>
                  <Col lg={6}><label>Country</label>
                    <select {...register("country", { required: "Country is required" })} className="form-select">
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="germany">Germany</option>
                    </select>
                    <p style={{ color: "red" }}>{errors.country?.message}</p>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col className="text-center">
                    <Button type="submit" variant="primary">Register</Button>
                    <p className="mt-3">Already have an account? <Link to="/login" className="text-decoration-none"> Login</Link></p>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default Registration;