import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
	constructor(props) {
		super(props);
		this.state = { greetingName: '' };
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addGreeting = this.addGreeting.bind(this);
	}

	addGreeting() {
		this.props.addGreeting(this.state.greetingName);
		this.setState({ greetingName: '' });
	}

	handleUpdate(event) {
		console.log("event.target.value: " + event.target.value);
		this.setState({ greetingName: event.target.value });
	}

	render() {
		return (
			<div className="AddGreeter">
				<input
					type="text"
					onChange={this.handleUpdate}/>
				&nbsp;&nbsp;
				<button onClick={this.addGreeting}>Add</button>
			</div>
		);
	}
}

export default AddGreeter;