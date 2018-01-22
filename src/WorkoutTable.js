import React, { Component } from 'react';
import WorkoutListItem from './WorkoutListItem.js';
import './WorkoutTable.css';
class WorkoutTable extends Component {

	constructor() {
		super();
		this.state = {
			time: 10,
			muscles: []
		}
	}

	render () {

		var poseData = this.state.muscles.map((muscle, index)=>{
			return <WorkoutListItem key={index} {...muscle}/>
		})

		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Duration</th>
							<th>Muscle Group</th>
							<th>Pose</th>
						</tr>
					</thead>
					{poseData}
				</table>
			</div>
		)
	}
}

export default WorkoutTable;