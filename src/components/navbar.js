// import { Link, Outlet } from "react-router-dom"

// function NavBar() {
//     return (
//         <>
//             <Link to="/">Home</Link>
//             <Link to="/productPage">Products</Link>
//             <Link to="/cartPage">Cart</Link>
//             <Link to="/checkOut">Checkout</Link>
//             <Outlet />
//         </>
//     )
// }
// export default NavBar


import "../CSS/nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import food from "../assets/foodsto.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Navget() {
    return (
        <Container fluid>
            <Navbar>
                <Container fluid id="des" md={12}>
                    <img src={food} />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            style={{ maxHeight: "100px" }}
                            navbarScroll>

                            <Nav >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/productPage">Products</Nav.Link>
                                <Nav.Link as={Link} to="/cartPage">Cart</Nav.Link>
                                <Nav.Link href="#action4">Product</Nav.Link>
                                <Nav.Link href="#action5">Blog</Nav.Link>
                                <Nav.Link
                                    style={{ width: "70%", float: "left" }}
                                    href="#action6"
                                >
                                    MyAccount
                                </Nav.Link>
                                <Button
                                    id="btn-nav"
                                    style={{ height: "33px", marginTop: "10px" }}
                                    variant="outline-success"
                                >
                                    Search
                                </Button>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Navget;