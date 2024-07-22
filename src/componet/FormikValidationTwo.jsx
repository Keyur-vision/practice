import React, { Fragment } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import logo from "../assets/images/logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  gender: Yup.string().required("Required"),
  hobbie: Yup.array().min(1).required("Required"),
  phone: Yup.string()
    .matches(
      new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/),
      "Phone number is not valid"
    )
    .required("Required"),
  city: Yup.string().required("Required"),
});

function FormikValidationTwo() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      hobbie: [],
      city: "",
    },

    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm({});
    },
  });

  return (
    <Fragment>
      <div className="main">
        <div className="container">
          <div
            className=" d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <Row className="shadow-lg w-75 bg-white">
              <Col className=" border-dark ">
                <div className="p-5 d-flex align-items-center h-100">
                  <img src={logo} alt="" className="w-100" />
                </div>
              </Col>
              <Col className="border-start  border-dark">
                <Form
                  className="bg-white p-5 rounded-3"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="text-center">
                    <h2>Register</h2>
                  </div>

                  <label htmlFor="firstName">First Name</label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-100"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder="Your FirstName"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-danger">{formik.errors.firstName}</div>
                  )}

                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="w-100"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Your Email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                  <label htmlFor="email">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-100"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    placeholder="Your Phone"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-danger">{formik.errors.phone}</div>
                  )}

                  <label htmlFor="email">password</label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="w-100"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Your Password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                  )}

                  <FormGroup>
                    <Label for="city">Select</Label>
                    <Input
                      id="city"
                      name="city"
                      type="select"
                      defaultValue="default"
                      onChange={formik.handleChange}
                    >
                      <option value="default" disabled>
                        Select
                      </option>
                      <option value="surat">Surat</option>
                      <option value="bombe">Bombe</option>
                      <option value="rajkot">Rajkot</option>
                      <option value="bhavnagar">Bhavnagar</option>
                      <option value="dwarka">Dwarka</option>
                    </Input>
                    {formik.touched.city && formik.errors.city && (
                      <div className="text-danger">{formik.errors.city}</div>
                    )}
                  </FormGroup>

                  <div className="d-flex align-items-center">
                    <label className="pe-3">Gender</label>
                    <div className="d-flex">
                      <FormGroup check>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="me-1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.gender === "male"}
                        />
                        <Label check>Male</Label>
                      </FormGroup>
                      <FormGroup check>
                        <input
                          name="gender"
                          value="female"
                          type="radio"
                          className="mx-1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.gender === "female"}
                        />
                        <Label check>Female</Label>
                      </FormGroup>
                      <FormGroup check disabled>
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          className="mx-1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.gender === "other"}
                        />
                        <Label check>Other</Label>
                      </FormGroup>
                    </div>
                  </div>

                  {formik.touched.gender && formik.errors.gender && (
                    <div className="text-danger">{formik.errors.gender}</div>
                  )}

                  <div className="d-flex align-items-center pt-3">
                    <label className="pe-3">Hobbies</label>
                    <div role="group" aria-labelledby="checkbox-group">
                      <label>
                        <input
                          type="checkbox"
                          className="ms-3"
                          name="hobbie"
                          value="reading"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values?.hobbie.includes("reading")}
                        />
                        Reading
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          className="ms-3"
                          name="hobbie"
                          value="traveling"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values?.hobbie.includes("traveling")}
                        />
                        Traveling
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          className="ms-3"
                          name="hobbie"
                          value="sleeping"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values?.hobbie.includes("sleeping")}
                        />
                        Sleeping
                      </label>
                    </div>
                  </div>
                  {formik.touched.hobbie && formik.errors.hobbie && (
                    <div className="text-danger">{formik.errors.hobbie}</div>
                  )}

                  <div className="pt-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Submit
                    </button>

                    <button
                      type="reset"
                      onClick={formik.resetForm}
                      className="btn btn-outline-primary btn-sm ms-2"
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FormikValidationTwo;
