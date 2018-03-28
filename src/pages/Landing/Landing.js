import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './Landing.css';

class Landing extends Component {

	handleClick = event => {
		event.preventDefault();
		console.log('clicked');
		window.location = '/question/start';
	}

	render () {
		return (
			<Container>
				<Jumbotron>
					<h1>What Programming Language Should You Learn First?</h1>
					<Button color='primary' size='lg' onClick={this.handleClick}>Start</Button>{' '}
				</Jumbotron>
			</Container>
		);
	}
}

export default Landing;