import { useForm } from "react-hook-form";
import './App.css';
import { Col, Container, Row ,Button} from 'react-bootstrap';



function Validate() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });       //firstName:{messege}
    const handleRegistration = (data) => { console.log(data) };
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)} noValidate >
                <Container fluid>

                    <div>
                        <Row className="box">
                            <Col className="box-in" lg={8}>
                                <Row className="bg-white form w-75 mx-auto mt-5 ps-4">
                                    <Row className=" head-one ">
                                        <Col className="  text-capitalize" lg={12}>
                                            <h3 className="mb-5 mt-2  ">registration</h3>
                                        </Col>
                                    </Row>
                                    <Row className="in-one mh-25  ">
                                        <Col lg={6}>
                                            <label htmlFor="firstName"> First Name</label>
                                            <input type="text" class="form-control w-75 mt-3 h-25 p-3 " name="firstName" {...register("firstName", { 
                                                required: "firstName is required",
                                                pattern: {
                                                    value: /^[A-Za-z]{2,30}$/,
                                                    message: "Invalid first name"
                                                }
                                                 })} />
                                            <p style={{ color: "red" }}> {errors?.firstName && errors.firstName.message}</p>

                                        </Col>
                                        <Col lg={6}>
                                            <label htmlFor="lastName"> Last Name</label>
                                            <input type="text"  class="form-control w-75 mt-3  h-25 p-3" name="lastName" {...register("lastName", {
                                                 required: "lastName is required" ,
                                                 pattern: {
                                                    value: /^[A-Za-z]{2,30}$/,
                                                    message: "Invalid last name"
                                                }
                                                 })} />
                                            <p style={{ color: "red" }}> {errors?.lastName && errors.lastName.message}</p>


                                        </Col>
                                    </Row>
                                    <Row className="mh-25">
                                        <Col lg={6}>
                                            <label>Email Address</label>
                                            <input type="email"  class="form-control w-75 mt-3  h-25 p-3" name="email" {...register('email',
                                                {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: "please enter the valid email address"
                                                    }


                                                })} />
                                            <p style={{ color: "red" }}> {errors?.email && errors.email.message}</p>



                                        </Col>
                                        <Col lg={6}>

                                            <label>Password</label>
                                            <input type="password"  class="form-control w-75 mt-3  h-25 p-3" name="password" {...register('password',
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

                                    <Row>
                                        <Col lg={6}>
                                            <label>Pincode</label>
                                            <input type="number"  class="form-control w-75 mt-3 h-25 p-3" name="pincode" {...register("pincode", {
                                                required: "please enter the Pincode",
                                                pattern: {
                                                    value: /^\d{6}$/,
                                                    message: "please enter the valid pincode"
                                                }

                                            })} />
                                            <p style={{ color: "red" }}> {errors?.pincode && errors.pincode.message}</p>


                                        </Col>
                                        <Col lg={6}>
                                        <label class="form-label">City</label>
                                            <select className="input" class="form-select w-75 h-25 ps-2 mt-3 " {...register("city",
                                                { required: "please select the city" })}>

                                                <option value={""}>city</option>
                                                <option value={"coimbatore"}>coimbatore</option>
                                                <option value={"chennai"}>chennai</option>
                                                <option value={"tirupur"}>tirupur</option>
                                                <option value={"madurai"}>madurai</option>

                                            </select>
                                            <p style={{ color: "red" }}>{errors?.city && errors.city.message}</p>



                                        </Col>


                                    </Row>

                                    <Row>
                                        <Col lg={6}>
                                        <label class="form-label">Country</label>
                                            <select className="input" class="form-select w-75  h-25 ps-2 mt-3"   {...register("country",
                                                { required: "please select the country" })}>

                                                <option value={""}>country</option>
                                                <option value={"india"}>india</option>
                                                <option value={"united states"}>united states</option>
                                                <option value={"germany"}>germany</option>
                                                <option value={"australia"}>australia</option>

                                            </select>
                                            <p style={{ color: "red" }}>{errors?.country && errors.country.message}</p>


                                        </Col>
                                        <Col lg={6}>
                                        <label className="form-check-label mb-3" >Gender</label><br />

                                            <label>
                                                <input type="radio" className="form-check-input me-2"   name="male"
                                                    {...register("gender", {
                                                        required: "please select the gender"
                                                    })}
                                                />
                                               Male
                                            </label><br />


                                            <label>
                                                <input type="radio"  className="form-check-input me-2" name="female"
                                                    {...register("gender", {
                                                        required: "please select the gender"
                                                    })}
                                                />
                                               Female
                                            </label><br />

                                            <label>
                                                <input type="radio" className="form-check-input me-2" name="others"
                                                    {...register("gender", {
                                                        required: "please select the gender"
                                                    })}
                                                />
                                               Prefer Not to say
                                            </label>

                                            <p style={{ color: "red" }}>
                                                {errors?.gender && errors.gender.message}
                                            </p>



                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input mt-1 me-3"  {...register("checkbox", {
                                                    required: "Agree to terms and conditions "

                                                })} /> I agree to the terms and conditions
                                                <p style={{ color: "red" }}>{errors?.checkbox && errors.checkbox.message}</p>

                                            </label>


                                        </Col>


                                    </Row>


                                    <Row >
                                        <Col lg={12}>

                                        <Button type="submit" className="btn">Submit</Button>
                                        {/* <button>Submit</button> */}

                                        
                                        </Col>
                                    </Row>

                                </Row>




                            </Col>
                        </Row>
                    </div>

                </Container>
            </form>

        </div>
    )
};
export default Validate;
