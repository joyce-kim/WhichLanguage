import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Questionnaire.css';
import QuestionList from '../../data';

class Questionnaire extends Component {
	// state to store current question
	state = {
		question: {}
	};

	// when component mounts, grab question matching route params
	componentWillMount() {
		var current = QuestionList.find(x => x.id === this.props.match.params.id);
		this.setState({
			question: current
		});
	};
	
	// redirect to next question
	nextQuestion = (event, id) => {
		event.preventDefault();
		window.location = '/question/' + id;
	};

	// redirect to result page
	showResult = (event, id) => {
		event.preventDefault();
		window.location = '/result/' + id;
	};

	// buttons for each answer option;
	// if a following question exists, redirect to next question
	// else, redirect to result page
	makeButtons = answers => {
		const buttons = answers.map(answer => 
			answer.next ?
				<button color='secondary' onClick={e => this.nextQuestion(e, answer.next)}>{answer.option}</button> :
				<button color='secondary' onClick={e => this.showResult(e, answer.result)}>{answer.option}</button>
		);
		return <Col>{buttons}</Col>;
	};

	render () {
		return (
			<Container>
				<Row>
					<Col>
						<h1>{this.state.question.title}</h1>
					</Col>
				</Row>
				<Row>
					{this.makeButtons(this.state.question.answers)}
				</Row>
			</Container>
		);
	}
}

export default Questionnaire;