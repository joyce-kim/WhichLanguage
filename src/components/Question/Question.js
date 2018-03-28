import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './aboutpanel.css';

const AboutPanel = props => (
	<Col md={{size: 12}} className="aboutDiv">
		<div className="item">
			<h2>The George Washington University</h2>
			<h3>Full-Stack Web Development Bootcamp</h3>
			<h4>Class of Feb 2018</h4>
		</div>
		<div className="item">
			<h2>Carnegie Mellon University</h2>
			<h3>B.S. Decision Science</h3>
			<h6>minor. Business Administration</h6>
			<h6>minor. Photography</h6>
			<h4>Class of Dec 2016</h4>
		</div>
		<div className="item">
			<h2>Skills:</h2>
			<Col md={{size: 4}} className='itemList'>
				<h5>Browser Based Technologies</h5>
				<ul>
					<li>HTML/CSS</li>
					<li>JavaScript</li>
					<li>React.js</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>Handlebars</li>
					<li>Firebase</li>
					<li>Cookies, Local Storage</li>
				</ul>
			</Col>
			<Col md={{size: 4}} className='itemList'>
				<h5>Databases</h5>
				<ul>
					<li>MongoDB</li>
					<li>MySQL</li>
				</ul>
				<h5>Node.js</h5>
				<ul>
					<li>Express</li>
					<li>MERN Stack</li>
				</ul>
			</Col>
			<Col md={{size: 4}} className='itemList'>
				<h5>Adobe Suite</h5>
				<ul>
					<li>Photoshop</li>
					<li>Dreamweaver</li>
					<li>inDesign</li>
				</ul>
			</Col>
		</div>
	</Col>
);

export default AboutPanel;