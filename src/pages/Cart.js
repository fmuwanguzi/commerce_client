import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'


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


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='primary'>
                        Your cart is empty <Link to='/' >Head Home</Link>
                    </Message>
                ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => {
                               return  <ListGroup.Item key={item.product}>
                                            <Row>
                                                <Col md={2}>
                                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>
                                                
                                                <Col md={3}>
                                                    <Link to={`/product/${item.product}`}> {item.name} </Link>
                                                </Col>
                                                
                                                <Col md={2}>
                                                    $ {item.price}
                                                </Col>

                                                <Col md={3}>
                                                    <Form.Control 
                                                        as="select" 
                                                        value={item.qty} 
                                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                        {
                                                            // ...array(n).keys()  returns a new Array Iterator object that contains the keys for each index in the array.
                                                            // counts how many are in stock in our case
                                                            [...Array(item.countInStock).keys()].map((x) => (
                                                                <option key={x+1} value={x+1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Col>
                                                
                                                <Col md={1}>
                                                    <Button 
                                                    type='button'
                                                    variant = 'light'
                                                    onClick={() => removeFromCartHandler(item.product)}
                                                    >
                                                        <i className='fas fa-trash-alt'> Remove item </i>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                            })}
                        </ListGroup>
                    )}
            </Col>
            
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0 )}) items </h2>
                                 $ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2) }                              
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                type='button'
                                className='btn-block'
                                disabled={cartItems.length === 0 }
                                onClick={checkoutHandler}
                                >
                                Proceed to checkout
                                </Button>
                            </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default Cart
