import React, { Component } from 'react';
import './WorkoutCard.css';

class WorkoutCard extends Component {

	constructor() {
		super();
		this.state = {
			isPicked: false
		}
	}

	onButtonPress() {
		if (this.state.isPicked) {
			this.setState({
				isPicked: false
			})
		} else {
			this.setState({
				isPicked: true
			})
		}
	}

	render() {

		var muscleClass = "MuscleCard"

		if (this.state.isPicked) {
			muscleClass += " isPicked"
		}

		return (

	    	<div className="cardStyle card col-lg-4">
	    		<div className={muscleClass}>
		        	<img className="card-img-top" src={this.props.muscleImage} alt="muscle"/>
		        	<div className="card-block">
		          		<h4 className="card-title">{this.props.muscleTitle}</h4>
		          		<div className="addButton">
		          			<button type="button" className="btn btn-success btn-sm" onClick={this.onButtonPress.bind(this)} value={this.props.muscle}>Add</button>
		          		</div>
		        	</div>
		        </div>
	      	</div>
	    )
	}
}

export default WorkoutCard;
