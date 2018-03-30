import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, Button} from 'reactstrap';
import './Result.css';
import LanguageList from '../../data/languages.js';

class Result extends Component {

	// state to store result
	state = {
		result: {}
	};

	// before component mounts, grab language matching route params
	componentWillMount() {
		var current = LanguageList.find(x => x.name === this.props.match.params.id);
		this.setState({
			result: current
		});
	};

	makeCards = () => {
		const cards = LanguageList.map(language =>
			<Col md='4'>
				<Card>
					
					<CardBody>
						<CardTitle>{language.name}</CardTitle>
						<CardText>{language.description}</CardText>
						<Button onClick={e => this.openLink(e, language.link)}>Learn More</Button>
					</CardBody>
				</Card>
			</Col>
		);
		return <Row>{cards}</Row>
	}

	render () {
		return (
			<div>
				<a href='http://joycekim.me' className='bluetext' target='_blank'>Joyce Kim</a>
				<a href='https://github.com/joyce-kim/which-language' className='bluetext' target='_blank'>github</a>
				<Container className='resultContainer'>
					<Jumbotron>
						<h1 className='bluetext'>{this.state.result.name}</h1>
						<p>{this.state.result.description}</p>
					</Jumbotron>
					{this.makeCards()}
				</Container>
			</div>
		);
	}
}

export default Result;