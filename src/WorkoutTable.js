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
				<table class="table table-fixed">
					<thead>
						<tr class="tableHeader">
							<th class="col-xs-3">Duration</th>
							<th class="col-xs-3">Muscle Group</th>
							<th class="col-xs-6">Pose</th>
						</tr>
					</thead>
					{poseData}
				</table>
			</div>
		)
	}
}

export default WorkoutTable;