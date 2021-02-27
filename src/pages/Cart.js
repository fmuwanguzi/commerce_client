import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message  from '../components/Message'
import { addToCart } from '../actions/cartActions'



function Cart({ match, location, history }) {
    const productId = match.params.id
    
    // if location.search exist split so you only get the qty
    //want to turn the string into a number Number(value)
    const qty = location.search ? Number(location.search.split('=')[1]): 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    console.log(cart, 'these are the cart items')


    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='primary'>
                        Your cart is empty <Link to='/'> head Home</Link>
                    </Message>
                ): (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => {
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.Image}/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                )}
            </Col>
            
            <Col md={4}>
                
            </Col>
        </Row>
    )
}

export default Cart
