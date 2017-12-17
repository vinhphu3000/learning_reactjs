import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Input extends Component {
	state = {	
		value: ''
	}

	handleOnChange = (e) => {
		this.setState({ value: e.target.value })
	}

	handleOnKeyPress = (e) => {
		if (e.key !== "Enter")
			return

		const { value } = this.state
		const { onsubmitting } = this.props

		if (!value)
			return

		onsubmitting(value)
		this.setState({value: ""})
	}

	render() {
		return (
			<div>
				<input style={styles.input} type={'text'} placeholder={'Input new to-do here'} onChange={this.handleOnChange} onKeyPress={this.handleOnKeyPress} />
			</div>
		)
	}
}

const styles = {
  input: {
    fontSize: "100%",
    padding: 15,
    borderWidth: 0
  }
};
