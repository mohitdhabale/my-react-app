import { Container, Row, Col } from "react-bootstrap";
import Products from "./product"


const ProductPage = () => {
    return (
        <>
            <Container fluid>
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
            </Container>

            <Container>
                <Products />
            </Container>
        </>
    )
}

export default ProductPage;