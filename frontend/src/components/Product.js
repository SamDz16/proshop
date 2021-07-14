import React from 'react';

import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

// Bootstrap
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img variant='top' src={product.image} />
			</Link>
			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
				<Rating value={product.rating} text={`${product.numReviews} reviews`} />

				<Card.Text as='div'>
					<h3>${product.price}</h3>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
