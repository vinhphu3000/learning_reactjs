import React, { Component } from 'react'

export default class Input extends Component {
	state = {
		value: ""
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value })
	}

	handleKeyPress = (e) => {
		if( e.key !== "Enter" )
			return

		const { onsubmitting } = this.props
		const { value } = this.state

		if ( !value )
			return

		onsubmitting(value)
		this.setState({ value: "" }) 

	}

	render() {
		return (
			<input style={styles.input} type={'text'} placeholder={'Input new todo'} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
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
