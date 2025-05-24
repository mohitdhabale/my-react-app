import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../CSS/product.css'

import product_1 from '../assets/chips.jpeg'
import product_2 from '../assets/side dish.jpeg'
import product_3 from '../assets/bread-breakfast.jpeg'
import product_4 from '../assets/boulthouse.png'

import product_5 from '../assets/green machine.jpeg'
import product_6 from '../assets/heinz ketchup.jpeg'
import product_7 from '../assets/nestle fitness.jpeg'
import product_8 from '../assets/grapes.jpeg'

import product_9 from '../assets/veg salad.jpeg'
import product_10 from '../assets/mint.jpeg'
import product_11 from '../assets/brocoli.jpeg'
import product_12 from '../assets/mix ved salad.png'

import add_to_cart_tick from "../assets/add-to-cart-tick.png"
import { useCart } from '../context/cartContext';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Products = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);


    const products = [
        { id: 1, name: "Chips", price: 10, discription: "Breakfast Cereals, Snacks", product_image: product_1 },
        { id: 2, name: "Side Dish", price: 8, discription: "Breakfast Cereals, Snacks", product_image: product_2 },
        { id: 3, name: "Bread Breakfast", price: 7.50, discription: "Breakfast Cereals, Snacks", product_image: product_3 },
        { id: 4, name: "Boulthouse", price: 100, discription: "Breakfast Cereals, Snacks", product_image: product_4 },

        { id: 5, name: "Green Machine", price: 40, discription: "Bakery, Breakfast, Cereals", product_image: product_5 },
        { id: 6, name: "Heinz Ketchup", price: 25, discription: "Bakery, Breakfast, Cereals", product_image: product_6 },
        { id: 7, name: "Nestle-Fitness", price: 300, discription: "Bakery, Breakfast, Cereals", product_image: product_7 },
        { id: 8, name: "Grapes", price: 200, discription: "Fruit, Yoghurt", product_image: product_8 },

        { id: 9, name: "Vegetable Salad", price: 219, discription: "Salads, Soups", product_image: product_9 },
        { id: 10, name: "Mint", price: 219, discription: "Salads, Vegetables", product_image: product_10 },
        { id: 11, name: "Brocoli", price: 219, discription: "Salads, Soups", product_image: product_11 },
        { id: 12, name: "Mix Vegetable Salad", price: 219, discription: "Salads", product_image: product_12 }

    ]
    return (
        <>
            {/* <Container fluid>
                <Row>
                    <Col xs={12} md={12} className='organic-add-ons-sub-head'>
                        Produced
                    </Col>
                </Row>
                <Row>
                    <Col xxs={12} md={12} className='organic-add-ons-head'>
                        Related products
                    </Col>
                </Row>
            </Container> */}

            <Container>
                <Row>
                    {products.map((product) => (

                        <Col xs={12} md={3} key={product.id}>
                            <Card style={{ boxShadow: "0 2px 40px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }} >
                                <Card.Img variant="top" src={product.product_image} className="product-logo" />
                                <Card.Body>
                                    <Card.Subtitle className='product-top-head'>{product.discription}</Card.Subtitle>
                                    <Card.Title className='product-name'>
                                        {product.name}
                                    </Card.Title>
                                    <Card.Subtitle className='product-price'>${product.price}</Card.Subtitle>
                                    <Button variant="primary" className='home-add-to-cart-btn'

                                        onClick={() => {
                                            addToCart(product);
                                            setSelectedProduct(product)
                                            handleShow();
                                        }}>
                                        Add To Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

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
                            }}>Added To Cart</h3>

                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: "500"
                            }}>
                                {selectedProduct?.name}
                            </h3>

                        </Modal.Body>
                        <Modal.Footer style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Link to="/cartPage" >
                                <Button variant="secondary"
                                    style={{
                                        backgroundColor: "#ffba43",
                                        boxShadow: "0 2px 40px rgba(0, 0, 0, 0.1)",
                                        border: "0"
                                    }}>
                                    Checkout
                                </Button>
                            </Link>

                            <Link>
                                <Button variant="primary"
                                    onClick={handleClose}
                                    style={{
                                        backgroundColor: "#3bb77e",
                                        boxShadow: "0 2px 40px rgba(0, 0, 0, 0.1)",
                                        border: "0"
                                    }}>
                                    Continue Shopping
                                </Button>
                            </Link>
                        </Modal.Footer>
                    </Modal>

                </Row>
            </Container >
        </>
    )
}

export default Products;