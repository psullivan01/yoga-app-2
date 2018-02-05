import React, { Component } from 'react';
import axios from 'axios';
import MyWorkoutsListItem from './MyWorkoutsListItem.js'


class MyWorkouts extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: localStorage.getItem('email')
		}
	}



	componentDidMount() {
		var url = '/my_workouts/' + this.state.email

		axios.get(url)
			.then((res)=>{
				this.setState({
					workoutData: res.data,
				})
				console.log(this.state)
			})
		.catch(function(error) {
			console.log(error)
		})
	}

	render () {

		if (this.state.workoutData) {
			 var workoutTable = this.state.workoutData.map((row, index)=>{
			 	console.log(row.name)
				return (
					<tr>
						<td>{row.workout_date}</td>
						<td>{row.workout_duration}</td>
						<td>{row.muscle_array}</td>
						<td>{row.pose_array}</td>
					</tr>
				)
			})
		}

		return (
			<div>
				<table class="table table-fixed">
					<thead>
						<tr class="tableHeader">
							<th class="col-xs-3">Date</th>
							<th class="col-xs-6">Duration</th>
							<th class="col-xs-6">Muscles</th>
							<th class="col-xs-6">Poses</th>
						</tr>
					</thead>
					<tbody>
						{workoutTable}
					</tbody>
				</table>
			</div>
		)
	}
}

export default MyWorkouts;