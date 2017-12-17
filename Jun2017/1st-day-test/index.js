import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

const styles = {
	app: {
		paddingTop: 40,
		textAlign: 'center',
	},
}

class App extends Component {
	render() {
		return (
			<div style={styles.app}>
				Welcome to React!
			</div>
		)
	}
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)

const subapp = document.querySelector('#subapp')
const element = <div>Hello World - second time!</div>
render(element, subapp)

const complicateapp = document.querySelector('#complicate-app')
const complicateelement = (
	<div>
		<input type={'text'} defaultValue={'Type here!'} />
		<select>
			<option>A</option>
			<option>B</option>
		</select>
		<img src={'https://instagram.fdad2-1.fna.fbcdn.net/t51.2885-15/e35/19367270_710811089110697_3439806558240768000_n.jpg'} />
	</div>
)
render(complicateelement, complicateapp)



class Card extends Component {
	state = {
		width: null,
		height: null,
	}

	saveRef = (ref) => this.containerNode = ref

	measure() {
		const {clientWidth, clientHeight} = this.containerNode

		this.setState(
			{
				width: clientWidth,
				height: clientHeight,
			}
		)
	}

	componentDidMount() {
		this.measure()
	}

	componentDidUpdate() {
		this.measure()
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.state.width !== nextState.width ||
			this.state.height !== nextState.height
		)
	}

	renderContent() {
		const {color, subtitle, type} = this.props

		const style = {
			margin: 20,
			padding: 20,
			color: 'white',
			backgroundColor: this.props.color,
		}

		return (
			<div>
				<h1>{this.props.children}</h1>
				{
					subtitle && (
						<h2>{subtitle}</h2>
					)
				}
				{
					type ? (
						<h2>{type}</h2>
					) : (
						<h2>No type</h2>
					)
				}
			</div>			
		)
		
	}

	render() {
		const {loading, error} = this.props

		const {width, height} = this.state

		const style = {
			margin: 20,
			padding: 20,
			color: 'white',
			backgroundColor: this.props.color,
		}

		let content

		if (error) {
			content = 'Error'
		} else if (loading) {
			content = 'Loading'
		} else {
			content = this.renderContent()
		}

		return (
			<div style={style} ref={this.saveRef}>
				Content: {content}
				Width: {width}
				Heigh: {height}
			</div>
		)
	}
}

const flashcard = document.querySelector('#flash-card')
const flashelement = (
	<div>
		<Card color={'skyblue'} error={true} subtitle={'1st card'}>Card 1</Card>
		<Card color={'steelblue'} loading={true} type={'Flash'}>Card 2</Card>
		<Card color={'green'} type={'Flash'}>Card 3</Card>
	</div>
)

render(flashelement, flashcard)




class Counter extends Component {
	state = { count: 0 }

	componentDidMount() {
		setInterval(() => {
			this.setState({ count: this.state.count + 1 })
		}, 1000)
	}

	render() {
		const {count} = this.state
		const {color, size} = this.props

		return (
			<div style={{ color, fontSize: size }}>
				{count}
			</div>
		)
	}
}

class Button extends Component {
	render() {
		const { onpress, children } = this.props
		return (
			<div onClick={ onpress }>
				{children}
			</div>
		)
	}

}

class CounterApp extends Component {
	state = {color: 'lightblue'}

	randomize = () => this.setState({ color: '#' + Math.random().toString(16).substr(-6) })

	render() {

		const style = {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		}

		return (
			<div style={ style }>
			<input
				type={'button'}
				value={'Randomize color'}
				onClick={this.randomize}
			/>
			<Button onpress={ this.randomize }>
				ClickMe!
			</Button>
			<Counter color={this.state.color} size={64}></Counter>
			</div>
		)
	}
}

render(<CounterApp/>, document.querySelector("#counter"))

class Input extends Component {
	state = { value: '' }

	handleChange = (e) => {
		this.setState({value: e.target.value})
	}

	render() {
		const { value } = this.state

		return (
			<div>
				<input
					type={'text'}
					value={value}
					placeholder={'Place Holder'}
					onChange={this.handleChange} />
				Value: {value}
			</div>
		)
	}
}

render(<Input/>, document.querySelector("#input"))

class List extends Component {
	render() {

		const employees = [
			{id: '1', name: 'Phu Ha'},
			{id: '2', name: 'Vinh Khang'},
			{id: '3', name: 'May'},
		]

		const usingMapIndexAsKey = [
			{id: '1', name: 'Khiem Do'},
			{id: '2', name: 'The Tran'},
			{id: '3', name: 'Hoan Tran'},
		]

		return (
			<div>
			{employees.map( item => <div key={item.id}>{item.name}</div>)}
			{usingMapIndexAsKey.map( (item, index) => <div key={index}>{item.name}</div>)}
			</div>
		)
	}
}

render(<List/>, document.querySelector("#employeeList"))































































































