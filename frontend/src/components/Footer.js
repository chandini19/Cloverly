import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>Copyright &copy; Cloverly</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer

// py-3 is padding in the y axis 3px
