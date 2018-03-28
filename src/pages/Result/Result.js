import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './Result.css';

class Result extends Component {

	state = {
		result: ''
	};

	// when component mounts, grab question matching route params
	componentDidMount() {
		var params = this.props.match.params.id;
		this.setState({
			result: params
		});
	};

	handleClick = event => {
		event.preventDefault();
		console.log('clicked');
		window.location = '/question/start';
	}

	render () {
		return (
			<Container>
				<Jumbotron>
					<h1>{this.state.result}</h1>
				</Jumbotron>
				<Row>
					<Col>
						<h2>Learn Here:</h2>
					</Col>
					<Col>
						<h2>In the News:</h2>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Result;