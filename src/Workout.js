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
			<div className=" col-lg-12">
				<h4 className="title-pic">{this.props.pose}</h4>
				<h4 className="card-time">{this.props.time}</h4>
			</div>
			<div className="col-sm-12" align="center">
	        	<img className="img-top-pic" src={this.props.posePicture} alt="pose"/>
	      	</div>
			</div>
		)
	}
}

export default Workout;