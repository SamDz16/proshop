import React from 'react';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';

// The products
import products from '../products';

const HomeScreen = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} xl={3} lg={4}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
