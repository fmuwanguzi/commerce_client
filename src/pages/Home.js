import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

// this imports the array from that file
import products from '../products'

function Home() {
    return (
        <div>
            <h1> The Waviest </h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home
