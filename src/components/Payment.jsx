import React, { useState } from "react";
import {Container, Row, Col, Button, Form, FloatingLabel, Modal,} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import paypal from "../Assets/paypal.png";
import visa from "../Assets/visa.png";
import mastercard from "../Assets/mastercard.png";
import maestro from "../Assets/maestro.png";
import discover from "../Assets/discover.png";
import ideal from "../Assets/ideal.png";

import inpost from "../Assets/inpost.png";
import dpd from "../Assets/dpd.png";
import dhl from "../Assets/dhl.png";
import fedex from "../Assets/fedex.png";

import tshirt from "../Assets/tshirt.png";
import tshirt2 from "../Assets/tshirt2.png";

const Payment = () => {
  const notify = () => toast("Form Submitted");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const submitClose = () => {
    notify();
    handleClose();
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col className="d-flex align-items-center">
            <h4 className="m-0 me-2 me-md-0">Shipping and Payment</h4>
            <div className="d-flex ms-auto">
              <Icon.Cart size={28} className="icon-cart me-2" />
              <Icon.ArrowRight size={28} className="icon-right" />
              <Icon.Truck size={28} className="icon-truck ms-2" />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={5} className="mb-3 mb-md-0" data-aos="fade-up">
            <div className="d-flex">
              <Button className="btn-login me-3" onClick={handleShow}>
                LOG IN
              </Button>
              <Button className="btn-signup">SIGN UP</Button>
            </div>
            <div className="mt-3">
              <h5>Shipping Information</h5>
              <Form>
                <div className="d-flex mb-3 mt-3">
                  <FloatingLabel label="First Name" className="me-3">
                    <Form.Control type="name" placeholder="First Name" />
                  </FloatingLabel>
                  <FloatingLabel label="Last Name">
                    <Form.Control type="name" placeholder="Last Name" />
                  </FloatingLabel>
                </div>

                <div className="d-flex mb-3">
                  <FloatingLabel label="Email" className="me-3">
                    <Form.Control type="email" placeholder="Email" />
                  </FloatingLabel>
                  <FloatingLabel label="Mobile Number">
                    <Form.Control type="tel" placeholder="Mobile Number" />
                  </FloatingLabel>
                </div>

                <div className="mb-3">
                  <FloatingLabel label="Address">
                    <Form.Control type="text" placeholder="Address" />
                  </FloatingLabel>
                </div>

                <div className="d-flex mb-3">
                <FloatingLabel controlId="floatingSelectGrid" label="City" className="me-3 w-50">
                    <Form.Select aria-label="Floating label select example">
                      <option>select</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Banglore">Banglore</option>
                      <option value="Noida">Noida</option>
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel label="Postal Code" className="me-3">
                    <Form.Control type="name" placeholder="Postal Code" />
                  </FloatingLabel>
                 
                </div>
              </Form>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0" data-aos="fade-up">
            <div className="paywrap mb-4 mb-md-0">
              <h5>Payment method</h5>
              <Form>
                <div className="d-flex mb-3 mt-3">
                  <label class="me-3" for="btnradio1">
                    <input type="radio"class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                    <img
                      src={paypal}
                      width={90}
                      alt="30x30"
                      className="img-fluid"
                    />
                  </label>

                  <label class="me-3" for="btnradio2">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autocomplete="off"
                    />
                    <img
                      src={visa}
                      width={90}
                      alt="30x30"
                      className="img-fluid"
                    />
                  </label>

                  <label class="me-3" for="btnradio3">
                    <input
                      type="radio"
                      name="btnradio"
                      id="btnradio3"
                      autocomplete="off"
                    />
                    <img
                      src={mastercard}
                      width={90}
                      alt="30x30"
                      className="img-fluid"
                    />
                  </label>
                </div>

                <div className="d-flex">
                  <label class="me-3" for="btnradio4">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio4"
                      autocomplete="off"
                    />
                    <img src={maestro} width={90} height={35} alt="30x30" />
                  </label>

                  <label class="me-3" for="btnradio5">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio5"
                      autocomplete="off"
                    />
                    <img
                      src={discover}
                      width={90}
                      alt="30x30"
                      className="img-fluid"
                    />
                  </label>

                  <label class="me-3" for="btnradio6">
                    <input
                      type="radio"
                      name="btnradio"
                      id="btnradio6"
                      autocomplete="off"
                    />
                    <img
                      src={ideal}
                      width={90}
                      alt="30x30"
                      className="img-fluid"
                    />
                  </label>
                </div>
              </Form>
            </div>

            <div className="delvwrap mt-4">
              <h5>Delivery method</h5>
              <Form>
                <div className="d-flex mb-3 mt-3">
                  <div className="me-3">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio7"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-primary btn-del"
                      for="btnradio7"
                    >
                      <img
                        src={inpost}
                        width={40}
                        alt="30x30"
                        className="img-fluid me-2"
                      />
                      $ 20.00
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio8"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-primary btn-del"
                      for="btnradio8"
                    >
                      <img
                        src={dpd}
                        width={40}
                        alt="30x30"
                        className="img-fluid me-2"
                      />
                      $ 12.00
                    </label>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-3">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio9"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-primary btn-del"
                      for="btnradio9"
                    >
                      <img
                        src={dhl}
                        width={40}
                        alt="30x30"
                        className="img-fluid me-2"
                      />
                      $ 15.00
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio10"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-primary btn-del"
                      for="btnradio10"
                    >
                      <img
                        src={fedex}
                        width={40}
                        alt="30x30"
                        className="img-fluid me-2"
                      />
                      $ 10.00
                    </label>
                  </div>
                </div>
              </Form>
            </div>
          </Col>

          <Col md={3} className="mb-3 mb-md-0" data-aos="fade-up">
            <h5>Your Cart</h5>
            <Row className="mt-3">
              <Col className="d-flex align-items-center">
                <img
                  src={tshirt2}
                  width={35}
                  height={35}
                  alt="30x30"
                  className="me-3"
                />
                <div>
                  <p className="mb-2">T-Shirt Summer Vibes</p>{" "}
                  <p className="code">#23565</p>
                </div>
              </Col>

              <Col className='text-end'>
                <p>$89.99</p>
              </Col>
            </Row>

            <Row className="d-flex mt-3">
              <Col className="d-flex align-items-center">
                <img
                  src={tshirt}
                  width={35}
                  height={35}
                  alt="30x30"
                  className="me-3"
                />
                <div>
                  <p className="mb-2">
                    Basic Slim Fit T-shirt
                  </p>
                  <p className="code">#23565</p>
                </div>
              </Col>

              <Col className='text-end'>
                <p>$69.99</p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs={10} className="total bg-light">
                <p className="totaltext m-0">Total cost</p>
                <p className="tatalno m-0">$159,98</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Third Row for Back annd Proceed footer */}
        <Row className="mt-4 flex-column-reverse flex-md-row" data-aos="fade-up" data-aos-offset="50">
          <Col md={6}>
          <Button className="btn-back"><Icon.ArrowLeft className="me-2"/>Back</Button>
          </Col>

          <Col  md={6} className='text-md-end text-center mb-3 mb-md-0'>
              <Button className="btn-continue me-3 mb-3 mb-md-0">CONTINUE SHOPPING</Button>
              <Button className="btn-proceed">PROCCED TO CHECKOUT</Button>
          </Col>
        
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Icon.PersonCircle className="me-2" />
            Login Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>

              <Form.Control type="name" name="name" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                name="email"
                placeholder="Enter Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" onClick={submitClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Payment;
