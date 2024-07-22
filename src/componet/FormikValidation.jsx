import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Col, FormGroup, Label, Row } from "reactstrap";
import logo from "../assets/images/logo.svg";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  gender: Yup.string().required("Required"),
  hobbie: Yup.array().min(1).required("required"),
  phone: Yup.string()
    .matches(
      new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/),
      "Phone number is not valid"
    )
    .required("Required"),
});

function FormikValidation() {
  return (
    <Fragment>
      <div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            gender: "",
            phone: "",
            hobbie: "",
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, resetForm }) => (
            <div className="main">
              <div className="container">
                <div
                  className=" d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <Row className="shadow-lg w-75 bg-white">
                    <Col className=" border-dark">
                      <div className="p-5 d-flex align-items-center h-100">
                        <img src={logo} alt="" className="w-100" />
                      </div>
                    </Col>
                    <Col className="border-start  border-dark">
                      <Form className="bg-white p-5 rounded-3">
                        <div className="text-center">
                          <h2>Register</h2>
                        </div>
                        <label className="pt-2">User Name</label>
                        <Field name="username" className="w-100 rounded-1" />
                        {touched.username && errors.username && (
                          <div className="text-danger">{errors.username}</div>
                        )}
                        <label className="pt-2">Email</label>
                        <Field name="email" className="w-100 rounded-1" />
                        {touched.email && errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
                        <label className="pt-2">Password</label>
                        <Field name="password" className="w-100 rounded-1" />
                        {touched.password && errors.password && (
                          <div className="text-danger">{errors.password}</div>
                        )}

                        <label className="pt-2">Phone Number</label>
                        <Field name="phone" className="w-100 rounded-1" />
                        {touched.phone && errors.phone && (
                          <div className="text-danger">{errors.phone}</div>
                        )}

                        <div className="d-flex align-items-center pt-3">
                          <label className="pe-3">Gender</label>
                          <div className="d-flex">
                            <FormGroup check>
                              <Field
                                type="radio"
                                name="gender"
                                value="mlale"
                                className="me-1"
                              />
                              <Label check>Male</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Field
                                name="gender"
                                value="female"
                                type="radio"
                                className="mx-1"
                              />
                              <Label check>Female</Label>
                            </FormGroup>
                            <FormGroup check disabled>
                              <Field
                                type="radio"
                                name="gender"
                                value="other"
                                className="mx-1"
                              />
                              <Label check>Other</Label>
                            </FormGroup>
                          </div>
                        </div>
                        {touched.gender && errors.gender && (
                          <div className="text-danger">{errors.gender}</div>
                        )}

                        <div className="d-flex align-items-center pt-3">
                          <label className="pe-3">Hobbies</label>
                          <div role="group" aria-labelledby="checkbox-group">
                            <label>
                              <Field
                                type="checkbox"
                                className="ms-3"
                                name="hobbie"
                                value="Reading"
                              />
                              Reading
                            </label>
                            <label>
                              <Field
                                type="checkbox"
                                className="ms-3"
                                name="hobbie"
                                value="Traveling"
                              />
                              Traveling
                            </label>
                            <label>
                              <Field
                                type="checkbox"
                                className="ms-3"
                                name="hobbie"
                                value="Sleeping"
                              />
                              Sleeping
                            </label>
                          </div>
                        </div>
                        {touched.hobbie && errors.hobbie && (
                          <div className="text-danger">{errors.hobbie}</div>
                        )}

                        <div className="pt-3">
                          <button type="submit " className="btn btn-success">
                            Submit
                          </button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default FormikValidation;
