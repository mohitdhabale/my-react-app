import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import '../CSS/home.css'

import grocery_png1 from '../assets/grocery-png.svg'
import grocery_png2 from '../assets/salads.png'
import grocery_png3 from '../assets/cart.png'
import grocery_png4 from '../assets/support.png'

// import leaf_1 from "../assets/"
import everyday_fresh_img from "../assets/wasteeee.jpg"

import Products from './product';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Container fluid className='home-banner'>
                <Row>
                    <Col xs={12} lg={6} md={6}>
                        <div className='banner-div1-fresh-grocery-head'>
                            <h1 className="fresh-grocery-main-head">Fresh <span style={{ color: "#3bb77e" }}>Grocery</span><br />Shopping </h1>
                            <p className='home-fresh-grocery-para' style={{ fontSize: "15px", fontWeight: "400", textAlign: "justify", marginLeft: "4px", marginTop: "18px", letterSpacing: "1px" }}>It is a long established fact that the reader will be the readable content of the page</p>
                            <Button variant="secondary" id='div1-btn-view-more'> VIEW MORE →</Button>
                        </div>
                    </Col>

                    <Col xs={12} lg={6} md={6}>
                        <div className='home-logo-div'>

                        </div>
                    </Col>

                    {/* <img id='home-banner-leaf1' src={leaf_1} /> */}
                </Row>
            </Container>

            <Container className='home-banner-bottom-div'>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col xs={12} md={3} className='png-logo-div'>
                                <img src={grocery_png1} className="logo-png" alt="logo" />
                            </Col>
                            <Col xs={12} md={9}>
                                <p className='logo-png-head'>Grocery</p>
                                <p className='logo-png-sub-head'>Fresh grocery delivered    </p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={3}>
                        <Row>
                            <Col md={3} className='png-logo-div'>
                                <img src={grocery_png2} className="logo-png" alt="logo" />
                            </Col>
                            <Col md={9}>
                                <p className='logo-png-head'>Salads</p>
                                <p className='logo-png-sub-head'>Order nutritious salads</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={3}>
                        <Row>
                            <Col md={3} className='png-logo-div'>
                                <img src={grocery_png3} className="logo-png" alt="logo" />
                            </Col>
                            <Col md={9}>
                                <p className='logo-png-head'>Cart Value</p>
                                <p className='logo-png-sub-head'>Cart value review your cart</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={3}>
                        <Row>
                            <Col md={3} className='png-logo-div'>
                                <img src={grocery_png4} className="logo-png" alt="logo" />
                            </Col>
                            <Col md={9}>
                                <p className='logo-png-head'>Support</p>
                                <p className='logo-png-sub-head'>Concerns and queries</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <Container >
                <Row>
                    <Col>
                        <Row>
                            <Col xs={12} md={4}>
                                <Card className='card-main-div' id='card1-animate'>
                                    <Card.Body>
                                        <Card.Subtitle className='card-top-head'>Organically Produce</Card.Subtitle>
                                        <Card.Title className="card-main-head">Vegetables</Card.Title>
                                        <Button variant="secondary" className='card-btn'>
                                            Shop Now
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className='card-main-div' id='card2-animate'>
                                    <Card.Body>
                                        <Card.Subtitle className='card-top-head'>Flat 30% off</Card.Subtitle>
                                        <Card.Title className="card-main-head">Fresh Foods</Card.Title>
                                        <Button variant="secondary" className='card-btn'>
                                            Shop Now
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className='card-main-div' id='card3-animate'>
                                    <Card.Body>
                                        <Card.Subtitle className='card-top-head'>Gluten-free</Card.Subtitle>
                                        <Card.Title className="card-main-head">Super Salads</Card.Title>
                                        <Button variant="secondary" className='card-btn'>
                                            Shop Now
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col xs={12} md={12} className='organic-add-ons-sub-head'>
                        Organically Produced
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className='organic-add-ons-head'>
                        New Organic Add-ons
                    </Col>
                </Row>
            </Container>


            <Container>
                <Products />
            </Container>

            <Container fluid >
                <Row>
                    <Col md={12}
                        className='everyday-fresh-clean-img'>

                        <h1 style={{
                            color: "white",
                            fontSize: "20px",
                            fontFamily: "cursive",
                            fontWeight: "600",
                            textAlign: "center"
                        }}>
                            Organic Products</h1>

                        <h1 style={{
                            color: "white",
                            fontSize: "40px",
                            fontWeight: "700",
                            textAlign: "center"
                        }}>
                            Everyday Fresh & Clean</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12}
                        className='home-weekend-offer'>
                        <h1 style={{
                            color: "#3bb77e",
                            fontSize: "20px",
                            fontFamily: "cursive",
                            fontWeight: "500",
                            zIndex: "2",
                            textAlign: "center"
                        }}>
                            Weekend Offer</h1>

                        < h1 style={{
                            fontSize: "40px",
                            fontWeight: "600",
                            textAlign: "center",
                            zIndex: "2"
                        }}>
                            Organic Foods Up To 50% off
                        </h1>

                        <Button id='weekend-offer-shop-now-btn'>
                            Shop Now
                        </Button>


                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;