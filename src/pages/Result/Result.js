import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, Button} from 'reactstrap';
import LanguageList from '../../data/languages';

class Result extends Component {

	// state to store result
	state = {
		result: {}
	};

	// before component mounts, grab language matching route params
	componentWillMount() {
		console.log(LanguageList);
		var current = LanguageList.find(x => x.name === this.props.match.params.id);
		this.setState({
			result: current
		});
	};

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