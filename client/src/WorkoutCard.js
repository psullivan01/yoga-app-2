import React, { Component } from 'react';

class WorkoutCard extends Component {
	render() {

		var muscleClass = "MuscleCard"

		if (this.props.isPicked) {
			muscleClass += " isPicked"
		}

		return (

	    	<div className="cardStyle card col-lg-4">
	    		<div className={muscleClass}>
		        	<img className="card-img-top" src={this.props.muscleImage} alt="muscle"/>
		        	<div className="card-block">
		          		<h4 className="card-title">{this.props.muscleTitle}</h4>
		          		<div className="addButton">
		          			<button type="button" className="btn btn-success btn-sm" onclick={this.props.pickMuscle} value={this.props.muscle}>Add</button>
		          		</div>
		        	</div>
		        </div>
	      	</div>

	    )
      
	}
}

export default WorkoutCard;