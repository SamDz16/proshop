import React from 'react';

//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>Copyright &copy; P R O S H O P</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
