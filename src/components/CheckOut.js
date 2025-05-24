import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container, Breadcrumb, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import add_to_cart_tick from "../assets/add-to-cart-tick.png"

import "../CSS/CheckOut.css"
import { useCart } from '../context/cartContext';

function CheckOut() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const { cart } = useCart();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    let navigate = useNavigate();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            handleShow();
        }

        setValidated(true);
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <div className='checkout-top-banner-div'>
                            <h1 style={{
                                fontSize: "45px"
                            }}>
                                Checkout
                            </h1>
                            <Breadcrumb>
                                <Breadcrumb.Item active>
                                    <Link className='breadcrumb-route-text' to="/">Home</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active >
                                    <span className='breadcrumb-route-text'>Checkout</span>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} >

                        <div className='input-total-main-field'>
                            <Row>
                                <Col>
                                    <div style={{
                                        marginTop: "20px",
                                        marginBottom: "20px"
                                    }}>
                                        <h1 style={{
                                            fontSize: "30px",
                                            fontWeight: "700"
                                        }}>
                                            Billing details
                                        </h1>
                                    </div>

                                    <div>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Row>
                                                <Col md={12}>
                                                    <Form.Group controlId="formCustomerName">
                                                        <Form.Label>Customer Name: *</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            className='form-input-field-style'
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please enter your name.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                    <Form.Group >
                                                        <Form.Label>Mobile no.: *</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="tel"
                                                            pattern="[0-9]{10}"
                                                            maxLength={10}
                                                            className='form-input-field-style'
                                                            onInput={(e) => {
                                                                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                                            }}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please enter correct mobile no.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                    <Form.Group >
                                                        <Form.Label>Email: *</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            required
                                                            className='form-input-field-style'
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please enter email.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                    <Form.Group >
                                                        <Form.Label>Address: *</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            required
                                                            className='form-input-field-style'
                                                        />

                                                        <Form.Control.Feedback type="invalid">
                                                            Please enter your Address.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Form.Group style={{
                                                marginTop: "10px"
                                            }}>
                                                <Form.Check
                                                    required
                                                    label="Agree to terms and conditions"
                                                    // feedback="You must agree before submitting."
                                                    feedbackType="invalid"
                                                />
                                            </Form.Group>
                                            <Button type="submit"
                                                style={{
                                                    backgroundColor: "#ffba43",
                                                    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
                                                    border: "0",
                                                    marginTop: "10px",
                                                    marginBottom: "20px",
                                                    marginLeft: "20px"
                                                }}>
                                                Place Order →</Button>
                                        </Form>
                                    </div>
                                </Col>

                                <Col>
                                    <div>
                                        <h1
                                            style={{
                                                fontSize: "35px",
                                                fontWeight: "700",
                                                marginTop: "30px"
                                            }}>
                                            Your Order
                                        </h1>
                                        <h3 style={{
                                            fontSize: "26px",
                                            marginTop: "20px"
                                        }}>
                                            Total: ${total.toFixed(2)}
                                        </h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >

                        <Modal.Body style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <img
                                src={add_to_cart_tick}
                                alt="Success"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                }}
                            />
                        </Modal.Body>
                        <Modal.Body style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            marginTop: "-20px"
                        }}>

                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: "700"
                            }}>Your Order is Placed Successfully</h3>

                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: "500"
                            }}>
                                {/* {selectedProduct?.name} */}
                            </h3>

                        </Modal.Body>
                        <Modal.Footer style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Link to="/" >
                                <Button variant="secondary"
                                    style={{
                                        backgroundColor: "#ffba43",
                                        boxShadow: "0 2px 40px rgba(0, 0, 0, 0.1)",
                                        border: "0"
                                    }}>
                                    Thank You
                                </Button>
                            </Link>

                            {/* <Link>
                                <Button variant="primary"
                                    onClick={handleClose}
                                    style={{
                                        backgroundColor: "#3bb77e",
                                        boxShadow: "0 2px 40px rgba(0, 0, 0, 0.1)",
                                        border: "0"
                                    }}>
                                    Continue Shopping
                                </Button>
                            </Link> */}
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container >


        </>
    )
}

export default CheckOut;