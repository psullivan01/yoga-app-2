import React, { Component } from 'react';
import axios from 'axios';
import MyWorkoutListItem from './MyWorkoutsListItem.js'

function getWorkouts() {
	axios.get('/my_workouts')
		.then((res)=>{
			console.log(res.data)
			return res.data
	})
}

class MyWorkouts extends Component {

	constructor() {
		super();
		this.state = {
			response: getWorkouts()
		}
	}


	render () {

		var historyTable = this.state.response.map((row, index)=>{
			return <MyWorkoutListItem key={index} 
									name={this.state.response[index].name}
									date={this.state.response[index].date}
									duration={this.state.response[index].duration}
									muscles={this.state.response[index].muscles}
									poses={this.state.response[index].poses}
									{...row}/>
		})

		return (
			<div>
				<table class="table table-fixed">
					<thead>
						<tr class="tableHeader">
							<th class="col-xs-3">Name</th>
							<th class="col-xs-3">Date</th>
							<th class="col-xs-6">Duration</th>
							<th class="col-xs-6">Muscles</th>
							<th class="col-xs-6">Poses</th>
						</tr>
					</thead>
					{historyTable}
					{this.stateLog()}
				</table>
			</div>
		)
	}
}

export default MyWorkouts;