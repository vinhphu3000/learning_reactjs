import React, { Component } from "react";
import { render } from "react-dom";
import { createStore } from "redux";

const types = {
  INCREMENT: 'INCREMENT',
}

const reducer = (state, action) => {
	if (action.type === types.INCREMENT) {
		return {count: state.count + 1}
	}

	return state
}

const initialState = {count: 0}

const store = createStore(reducer, initialState)

store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})


class App extends Component {
	render() {
		return (
			<div>
				{store.getState().count}
			</div>
		)
	}
}






render(<App/>, document.querySelector("#app"));