import React, { Component } from 'react';

class Greeting extends Component {

	render() {
		return <h1>Hello, {this.props.name} from react!</h1>
	}

}

export default Greeting;