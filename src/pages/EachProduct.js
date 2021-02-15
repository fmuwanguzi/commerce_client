import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function EachProduct({ match }) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        
        async function fetchProduct(){
            console.log('THIS COMES FIRST')
            const { data } = await axios.get(`${REACT_APP_SERVER_URL}/api/products/${match.params.id}/`)
            console.log(data, 'is this working')
            setProduct(data)
        }

        fetchProduct()

    }, [])    


    return (
        <div>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        
                        <ListGroup.Item>
                            <h3>{product.name} </h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'orange'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description : {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {/* if statement - if countInStock is more than 0 show 'instock' else show 'out' */}
                                        <strong>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                {/* disabled has a conditional that makes the button unclickable when out of stock */}
                                <Button className="btn-block" disabled={ product.countInStock == 0 } type='button'>Add to cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Link to='/' className='btn btn-light my-3'>Home</Link>
        </div>
    )
}

export default EachProduct
