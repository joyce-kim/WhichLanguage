import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, Button} from 'reactstrap';
import LanguageList from '../../data/languages';

class Landing extends Component {
	
	// route to quiz on user click
	startQuiz = event => {
		event.preventDefault();
		window.location = '/question/start';
	}

	// open links in new tab
	openLink = (event, link) => {
		event.preventDefault();
		window.open(link, '_blank');
	}

	// create an info card for each language
	makeCards = () => {
		const cards = LanguageList.map((language, i) => (
			<Col md='4'>
				<Card id={i}>			
					<CardBody>
						<CardTitle>{language.name}</CardTitle>
						<CardText>{language.description}</CardText>
						<Button onClick={e => this.openLink(e, language.link)}>Learn More</Button>
					</CardBody>
				</Card>
			</Col>
		));
		return <Row>{cards}</Row>
	}

	render () {
		return (
			<div>
				<Button id='github-link' color='link' className='links bluetext' onClick={e => this.openLink(e, 'https://github.com/joyce-kim/which-language')}>Github</Button>
				<Button id='jk-link' color='link' className='links bluetext' onClick={e => this.openLink(e, 'http://joycekim.me')}>Joyce Kim</Button>	
				<Container>
					<Jumbotron>
						<h1>What <span className='bluetext'>Programming</span> Language Should You Learn First?</h1>
						<Button id='start-quiz' color='primary' size='lg' onClick={this.startQuiz}>Start</Button>{' '}
					</Jumbotron>
					{this.makeCards()}
				</Container>
			</div>
		);
	}
}

export default Landing;