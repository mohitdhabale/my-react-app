



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import { useCart } from '../context/cartContext';

import "../CSS/Cart.css"

const CartPage = () => {
    const { cart, removeFromCart, addQuantity, subQuantity } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <div className='cart-top-banner-div'>
                            <h1 style={{
                                fontSize: "45px"
                            }}>
                                Cart
                            </h1>
                            <Breadcrumb>
                                <Breadcrumb.Item active>
                                    <Link className='breadcrumb-route-text' to="/">Home</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active >
                                    <span className='breadcrumb-route-text'>Cart</span>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div>

                            {cart.length === 0

                                ? (

                                    <>
                                        <Row>
                                            <Col md={{ span: 10, offset: 1 }}>
                                                <div className='cart-product-table-main'>
                                                    <p style={{
                                                        fontSize: "26px",
                                                        fontWeight: "700"
                                                    }}>
                                                        Your cart is empty.
                                                    </p>
                                                    <Link to="/">
                                                        <Button className='cart-checkout-btn'>Return To Shop</Button>
                                                    </Link>

                                                </div>
                                            </Col>
                                        </Row>
                                    </>
                                )

                                : (
                                    <>
                                        <Row>
                                            <Col md={{ span: 10, offset: 1 }}>
                                                <div className='cart-product-table-main'>

                                                    <Table responsive bordered >
                                                        <thead>
                                                            <tr>
                                                                <th style={{ textAlign: "center" }}>Products</th>
                                                                <th style={{ textAlign: "center" }}>Quantity</th>
                                                                <th style={{ textAlign: "center" }}>Subtotal</th>
                                                                <th style={{ textAlign: "center" }}>Click to Remove</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {cart.map((item) => (
                                                                <tr key={item.id}>
                                                                    <td>
                                                                        <div style={{ display: "flex" }}>
                                                                            <img src={item.product_image} alt={item.name} width="80" height="80" className="me-3" />
                                                                            <div>
                                                                                <strong>{item.name}</strong><br />
                                                                                <span>Price: ₹{item.price.toFixed(2)}</span><br />
                                                                                {/* <Button variant="link" size="md" style={{color:"#3bb77e",textDecoration:"none", fontWeight:"600"}} onClick={() => removeFromCart(item.id)}>Remove</Button> */}
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                            <Button variant="secondary" size="sm" style={{ backgroundColor: "#3bb77e", border: "none", marginTop: "20px" }} onClick={() => subQuantity(item)}>-</Button>
                                                                            <Form.Control
                                                                                style={{ width: "60px", marginTop: "16px", marginLeft: "10px", marginRight: "10px", textAlign: "center", backgroundColor: "#e2f9ee" }}
                                                                                value={item.quantity}
                                                                            />
                                                                            <Button variant="secondary" size="sm" style={{ backgroundColor: "#3bb77e", border: "none", marginTop: "20px" }} onClick={() => addQuantity(item)}>+</Button>
                                                                        </div>
                                                                    </td>

                                                                    <td >
                                                                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                                                            ${(item.price * item.quantity).toFixed(2)}
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>

                                                                            <Button variant="link" size="md" style={{ color: "#3bb77e", textDecoration: "none", fontWeight: "600" }}
                                                                                onClick={() => removeFromCart(item.id)}>
                                                                                Remove
                                                                            </Button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>

                                                    <Row>
                                                        <Col>
                                                            <div style={{
                                                                borderTop: "1px solid black",
                                                                marginTop: "40px"
                                                            }}>
                                                                <div>
                                                                    <span style={{
                                                                        fontSize: "30px",
                                                                        fontWeight: "700",
                                                                        marginLeft: "2px",
                                                                    }}>
                                                                        Cart Totals
                                                                    </span>
                                                                </div>

                                                                <div
                                                                    style={{
                                                                        paddingLeft: "10px"
                                                                    }}>
                                                                    <h1
                                                                        style={{
                                                                            marginTop: "5px",
                                                                            fontSize: "20px",
                                                                            marginTop: "20px"
                                                                        }}>
                                                                        <strong>Total:</strong> ${total.toFixed(2)}
                                                                    </h1>

                                                                    <Link to="/checkOut">
                                                                        <Button variant="secondary" size="md" className='cart-checkout-btn'>
                                                                            Proceed to Checkout →
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </>
                                )
                            }
                        </div>

                    </Col>
                </Row>
            </Container >
        </>
    );
}


export default CartPage;