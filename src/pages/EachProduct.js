import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function EachProduct({ match }) {
    const [qty, setQty] = useState(1)


    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error , product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails( match.params.id ))
    }, [dispatch, match])    



    return (
        <div>
            {loading ?
                <Loader />
                :error
                ? <Message variant='danger'>{error}</Message> 
                :(
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

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs="auto" className="my-1">
                                            <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {
                                                // ...array(n).keys()  returns a new Array Iterator object that contains the keys for each index in the array.
                                                // counts how many are in stock in our case
                                                [...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={x+1} value={x+1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                {/* disabled has a conditional that makes the button unclickable when out of stock */}
                                <Button className="btn-block" disabled={ product.countInStock == 0 } type='button'>Add to cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )
                
            
            }
  
            
            <Link to='/' className='btn btn-light my-3'>Home</Link>
        </div>
    )
}

export default EachProduct
