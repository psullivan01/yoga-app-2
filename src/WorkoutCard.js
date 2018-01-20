import React, { Component } from 'react';
import './WorkoutCard.css';

class WorkoutCard extends Component {

	render() {

		var muscleClass = "MuscleCard"
		var buttonText = "Add"
		//var btnstyling = ['btn','btn-success','btn-sm']

		if (this.props.isPicked) {
			muscleClass += " isPicked"
			buttonText = "Remove"
		}

		return (
	    	<div className="cardStyle card col-lg-4">
	    		<div className={muscleClass}>
		        	<img className="card-img-top" src={this.props.muscleImage} alt="muscle"/>
		        	<div className="card-block">
		          		<h4 className="card-title">{this.props.muscleTitle}</h4>
		          		<div className="addButton">
		          			<button type="button" className="btn btn-success btn-sm" onClick={this.props.pickCard}>{buttonText}</button>
		          		</div>
		        	</div>
		        </div>
	      	</div>
	    )
	}
}

export default WorkoutCard;
