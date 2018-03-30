import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import QuestionList from '../../data/questions';

class Questionnaire extends Component {
	// state to store current question
	state = {
		question: {}
	};

	// before component mounts, grab question matching route params
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

	goBack = event => {
		event.preventDefault();
		window.history.go(-1);
	}

	// create buttons that lead to either a subsequent question or a result
	makeButtons = answers => {
		const buttons = answers.map(answer => 
			answer.next ?
				<Button size='large' outline color='primary' onClick={e => this.nextQuestion(e, answer.next)}>{answer.option}</Button> :
				<Button size='large' outline color='primary' onClick={e => this.showResult(e, answer.result)}>{answer.option}</Button>
		);
		return <Col className='text-center' sm={{ size: 8, offset: 2 }}>{buttons}</Col>;
	};

	render () {
		return (
			<Container className='questionContainer'>
				<Row>
					<Col className='text-center' sm={{ size: 8, offset: 2 }}>
						<h1 className='question-title'>{this.state.question.title}</h1>
					</Col>
				</Row>
				<Row>
					{this.makeButtons(this.state.question.answers)}
				</Row>
				<Button className='backButton' color='link' onClick={e => this.goBack(e)}>Back</Button>
			</Container>
		);
	}
}

export default Questionnaire;