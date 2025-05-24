import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import add from "../assets/home.svg";
import mail from "../assets/mail.svg";
import food from "../assets/foodsto.png";
import call from "../assets/call.svg";
import face from "../assets/facebook.svg";
// import "../CSS/nav.css"

function Footget() {
    return (
        <footer>
            <Container fluid>
                <Row id="one">
                    <Col>
                        <Row>

                            <Col>
                                <br></br>
                                <br></br>
                                <img src={food} />
                                <br></br>
                                <br></br>
                                <p>
                                    Subscribe to our newsletter <br></br> and <br></br>get 10% off
                                    your first purchase.
                                </p>
                                <img src={face} />
                            </Col>
                            <Col>
                                <br></br>
                                <br></br>
                                <h3 style={{ marginLeft: "10%" }}>Link</h3>
                                <br></br>

                                <ul style={{ listStyleType: "none" }}>
                                    <li>My Account</li>
                                    <br></br>

                                    <li>Checkout</li>
                                    <br></br>
                                    <li>Wishlist</li>
                                    <br></br>
                                    <li>Shopping Cart</li>
                                </ul>
                            </Col>
                            <Col>
                                <br></br>
                                <br></br>
                                <h3 style={{ marginLeft: "10%" }}>Information</h3>
                                <br></br>
                                <ul style={{ listStyleType: "none" }}>
                                    <li>My Account</li>
                                    <br></br>
                                    <li>Checkout</li>
                                    <br></br>
                                    <li>Wishlist</li>
                                    <br></br>
                                    <li>Shopping Cart</li>
                                </ul>
                            </Col>
                            <Col>
                                <br></br>
                                <br></br>
                                <h3>Quick Contact</h3>
                                <br></br>
                                <table>
                                    <tr>
                                        <td>
                                            <img src={add} style={{ padding: "10px" }} />
                                        </td>
                                        <td>1234 North Avenue Luke Lane, South Bend, IN 360001</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img src={mail} style={{ padding: "10px" }} />
                                        </td>
                                        <td>Jondoe@demo.com</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={call} style={{ padding: "10px" }} />
                                        </td>
                                        <td>+0123456789</td>
                                    </tr>
                                </table>
                            </Col>
                            <hr></hr>
                            <Col md={12}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <p >
                                    Copyright 2025 foodsto All Rights Reserved.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}

export default Footget;