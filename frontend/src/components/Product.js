import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded box'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' className='product_image' />
			</Link>
			<Card.Body>
				<div
					className='container'
					style={{ marginBottom: '1rem', fontSize: '1.1rem' }}
				>
					<Link to={`/product/${product._id}`}>
						<Card.Title as='div' className='style'>
							<strong>{product.name}</strong>
						</Card.Title>
					</Link>
				</div>
				<div className='container'>
					<Card.Text as='div' className='style'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						></Rating>
					</Card.Text>
					<Card.Text as='h3' className='price'>
						${product.price}
					</Card.Text>
				</div>
			</Card.Body>
		</Card>
	)
}

export default Product

// instead of using props we have used destructuring here i.e we've taken product directly in the function so we can
// use product directly without using props.product everywhere. maily to reduce code
// and for easier understanding.
