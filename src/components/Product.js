import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'


function Product({ product }) {
    return (
        <Card className="my-3 py-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} height={240} width={171} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                
                    <Card.Text as="div">
                        <div className="my-3">
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'orange'}/>
                        </div>
                    </Card.Text> 
                    <Card.Text as="h4">
                        ${product.price}
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
