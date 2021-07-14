import React from 'react';

// Bootstrap
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/product/${product._id}`}>
				<Card.Img variant='top' src={product.image} />
			</a>
			<Card.Body>
				<a href={`/product/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</a>
				<Card.Text as='div'>
					{product.rating} from {product.numReviews} reviews
				</Card.Text>

				<Card.Text>
					<h3>${product.price}</h3>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;