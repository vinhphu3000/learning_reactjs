import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = { greeting: 'Hello' }
		this.vietnamesify = this.vietnamesify.bind(this);
	}

	vietnamesify() {
		this.setState({ greeting: 'Xin chào' });
	}

	render() {
		return (
			<div className="HelloWorld">
				{this.state.greeting} {this.props.name}!
				<br/>
				<button onClick={this.vietnamesify}>Vietnamesify!</button>
			</div>
		);
	}
};

export default HelloWorld;