import React, { Component } from 'react';
import WorkoutScreen from './WorkoutScreen.js';
import DisplayWorkout from './Workout.css';

class Workout extends Component {

	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div className="resultBackground">
			<div className=" col-lg-6">
				<h4 className="title-pic">Pose: {this.props.pose}</h4>
				<h4 className="card-time">Time Remaining: {this.props.time}</h4>
	        	<img className="card-img-top-pic" src={this.props.posePicture} alt="pose"/>
	      	</div>
			</div>
		)
	}
}

export default Workout;