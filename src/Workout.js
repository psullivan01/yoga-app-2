import React, { Component } from 'react';
import WorkoutScree from './WorkoutScreen.js'

class Workout extends Component {

	constructor(props) {
		super(props)
	}

	render () {
		return (

			<div className="cardStyle card col-lg-4">
				<h4 className="card-title">{this.props.pose}</h4>
				<h4>{this.props.time}</h4>
	        	<img className="card-img-top" src={this.props.posePicture} alt="pose"/>
	      	</div>

		)
	}
}

export default Workout;