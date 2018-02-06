import React, { Component } from 'react';
import axios from 'axios';
import MyWorkoutsListItem from './MyWorkoutsListItem.js'
import './MyWorkout.css';


class MyWorkouts extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: localStorage.getItem('email')
		}
	}

	runGet() {
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

			 	if (row.muscle_array) {
			 		var uniqueMuscles = row.muscle_array.reduce((a, b)=>{
			 			if (a.indexOf(b) < 0) {
			 				a.push(b)
			 			}
			 			return a
			 		}, [])

			 		var commaMuscles = uniqueMuscles.join(", ")
			 	} else {
			 		var commaMuscles = " "
			 	}

			 	if (row.pose_array) {
			 		var uniquePoses = row.pose_array.reduce((a, b)=>{
			 			if (a.indexOf(b) < 0) {
			 				a.push(b)
			 			}
			 			return a
			 		}, [])

			 		var commaPose = uniquePoses.join(", ")
			 	} else {
			 		var commaPose = " "
			 	}

				return (
					<tr>
						<td>{row.workout_date.split("T")[0]}</td>
						<td>{row.workout_duration}</td>
						<td>{commaMuscles}</td>
						<td>{commaPose}</td>
					</tr>
				)
			})
		} else {
			this.runGet()
		}

		return (
			<div className="container">
				<div className="durationText">My Workouts</div>
				<table class="table table-fixed">
					<thead>
						<tr class="tableHeader">
							<th class="col-xs-3 dateRow">Date</th>
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