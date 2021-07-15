import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import products from './data/products.js';

const app = express();

app.get('/', (req, res) => {
	res.send('PROSHOP API');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((product) => product._id === req.params.id);

	res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(
		`Server up and running in ${process.env.NODE_ENV} mode on port ${PORT} - http://localhost:${PORT}`
	)
);
