import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
    return (
        <Card className="my-3 py-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} width={171} height={280}/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                
                    <Card.Text as="div">
                        <div className="my-3">
                            {product.rating} rating {product.numReviews} reviews
                            <Rating value={product.rating} text={`${product.numReviews}`} color={'orange'}/>
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
