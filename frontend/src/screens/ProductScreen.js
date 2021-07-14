import React from 'react';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating';

// The products
import products from '../products';

const ProductScreen = ({ match }) => {
	const product = products.find((product) => product._id === match.params.id);

	return (
		<div>
			<Link className='btn btn-dark' to='/'>
				Go Back
			</Link>

			<Row className='my-3'>
				<Col md={6}>
					<Image src={product.image} alt={product.name}></Image>
				</Col>

				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>
							<h3>Price: ${product.price}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>{product.description}</p>
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
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
									<Col>Status: </Col>
									<Col>
										{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Button
										className='btn-block'
										disabled={product.countInStock === 0}
									>
										Add To Cart
									</Button>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ProductScreen;
