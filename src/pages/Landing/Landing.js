import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, Button} from 'reactstrap';
import './Landing.css';
import LanguageList from '../../data/languages.js';

class Landing extends Component {
	// state to store languages
	// state = {
	// 	languages: []
	// };

	// // when component mounts, grab question matching route params
	// componentWillMount() {
	// 	var languageArray = QuestionList.find(x => x.id === this.props.match.params.id);
	// 	this.setState({
	// 		question: current
	// 	});
	// };

	startQuiz = event => {
		event.preventDefault();
		window.location = '/question/start';
	}

	openLink = (event, link) => {
		event.preventDefault();
		window.open(link, '_blank');
	}

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

	makeButtons = answers => {
		const buttons = answers.map(answer => 
			answer.next ?
				<Button color='secondary' onClick={e => this.nextQuestion(e, answer.next)}>{answer.option}</Button> :
				<Button color='secondary' onClick={e => this.showResult(e, answer.result)}>{answer.option}</Button>
		);
		return <Col>{buttons}</Col>;
	};

	render () {
		return (
			<div>
				<a href='http://joycekim.me' className='bluetext' target='_blank'>Joyce Kim</a>
				<a href='https://github.com/joyce-kim/which-language' className='bluetext' target='_blank'>github</a>
				<Container>
					<Jumbotron>
						<h1>What <span className='bluetext'>Programming</span> Language Should You Learn First?</h1>
						<Button color='primary' size='lg' onClick={this.startQuiz}>Start</Button>{' '}
					</Jumbotron>
					{this.makeCards()}
				</Container>
			</div>
		);
	}
}

export default Landing;

// <CardImg top width='auto' height="150px" src={language.image} alt="Card image cap" />