import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import WorkoutCard from './WorkoutCard.js';
import WorkoutListItem from './WorkoutListItem.js';
import Workout from './Workout.js'
const quad = require('./img/quadriceps.jpg');
const ham = require('./img/hamstrings.jpg');
const hip = require('./img/hips.jpg');
const lBack = require('./img/lower_back.jpg');
const uBack = require('./img/upper_back.jpg');
const shoulder = require('./img/shoulders.jpg');

<Route path="/launch_workout" component={Workout}/>

function addCards() {
	var muscleImages = [quad, ham, hip, lBack, uBack, shoulder]
	var muscleTitles = ["Quads", "Hamstrings", "Hips", "Lower Back", "Upper Back", "Shoulders"]
	var muscleLookups = ["quads", "hams", "hips", "lBack", "uBack", "shoulders"]
	var deck = []

	for (var i=0; i<6; i++) {
		deck.push({
			image: muscleImages[i],
			title: muscleTitles[i],
			lookup: muscleLookups[i],
			isPicked: false
		})
	}
	return deck
}

class WorkoutScreen extends Component {

	state = {
		
	}

	constructor(props) {
		super(props);

		this.state = {
			time: 1,
			muscles: addCards(),
			workoutMuscles: [],
			workoutMuscleLookups: [],
			poseRand: [],
			workoutPoses: [],
			poseTime: "1:00",
			tableShown: false
		};
	}

	navigate() {
		this.props.router.push('/launch_workout')
	}

	pickCard(cardIndex) {
		var cardToPick = {...this.state.muscles[cardIndex]}

		if (cardToPick.isPicked) {
			cardToPick.isPicked = false
		} else {
			cardToPick.isPicked = true
		}

		var newDeck = this.state.muscles.map((card, index)=>{
			if (index === cardIndex) {
				return cardToPick
			}
			return card
		})

		this.setState({
			muscles: newDeck
		})
	}

	changeTime = (event) => {
		var time = parseInt(event.target.value)
		this.setState({
			time: time
		})
	}

	getPoseDuration(timeMintues, poseCount) {
		var timeSeconds = timeMintues * 60
		var timePose = timeSeconds / poseCount
		var seconds = timePose % 60

		console.log(seconds)

		if (seconds < 10) {
			seconds = '0' + seconds
		}

		var timeMinutesSeconds = Math.floor(timePose / 60) + ":" + seconds
		return timeMinutesSeconds
	}

	generateWorkout(event) {
		event.preventDefault()
		var selectedMuscles = []
		var selectedMuscleLookup = []
		var selectedPoses = []
		var poseRand = []
		var poses = {
		  quads : ["Saddle", "Lizard", "Half Saddle", "Twisted Lizard"],
		  hams : ["Seated Forward Fold", "Standing Straddle", "Half Front Split", "Dragon"],
		  hips : ["Pigeon", "Seated Cross Shin", "Bound Angle"],
		  lBack : ["Single Leg Forward Fold", "Puppy Dog", "Happy Baby", "Seal"],
		  uBack : ["Saddle Eagle", "Cow Face", "Standing Forward Fold with Interlacing Fingers"],
		  shoulders : ["Child's Pose with Shoulders", "Shoulder Opener", "Thread the Needle"],
		};

		for (var x=0; x<this.state.muscles.length; x++) {
			if (this.state.muscles[x].isPicked) {
				var rand = Math.floor(Math.random() * poses[this.state.muscles[x].lookup].length)
				var lookup = this.state.muscles[x].lookup

				selectedMuscles.push(this.state.muscles[x].title)
				selectedMuscleLookup.push(lookup)
				poseRand.push(rand)
				selectedPoses.push(poses[lookup][rand])
			}
		}

		var timeMinutes = this.state.time
		var poseCount = selectedMuscles.length
		var poseTimer = this.getPoseDuration(timeMinutes, poseCount)

		this.setState({
			workoutMuscles: selectedMuscles,
			workoutMuscleLookups: selectedMuscleLookup,
			poseRand: poseRand,
			workoutPoses: selectedPoses,
			poseTime: poseTimer
		})
	}

	render () {

		console.log(this.state)

		var workoutCards = this.state.muscles.map((muscle, index)=>{
			return <WorkoutCard pickCard = {this.pickCard.bind(this, index)}
								muscleImage={muscle.image}
								muscleTitle={muscle.title}
								isPicked={muscle.isPicked}
								key={index} />
		})

		var workoutTable = this.state.workoutMuscles.map((muscle, index)=>{
			return <WorkoutListItem key={index}
									muscle={muscle}
									time={this.state.poseTime}
									pose={this.state.workoutPoses[index]}/>
		})

		var finalTable =
		<div>
			<br/>
			<table>
				<thead> 
					<tr> 
						<th>Duration</th> 
						<th>Muscle Group</th> 
						<th>Pose</th> 
					</tr> 
				</thead>
					{workoutTable}
			</table>
			<br/>
			<button type="submit" className="btn btn-primary" id="Begin" onClick={this.navigate.bind(this)}>
				<a className="btn btn-primary" href="/launch_workout">Begin Workout</a>
			</button>
		</div>

		if (this.state.workoutPoses.length === 0) {
			finalTable = ""
		}

		return (
			    <div className="container" id="topDiv">
			      <div className="row">
			      	{workoutCards}
			        <div className="col-lg-12">
			          <form id="yoga-form">
			            <div className="submitNav">
			            <span className="durationText">Select Workout Duration</span>
			            <select id="select" onChange={(e) => this.changeTime(e)}>
			              <option>1</option>
			              <option>2</option>
			              <option>4</option>
			              <option>6</option>
			              <option>8</option>
			              <option>10</option>
			              <option>12</option>
			              <option>14</option>
			              <option>16</option>
			              <option>18</option>
			              <option>20</option>
			            </select>
			          </div>
			            <div className="card-deck row">

			            </div>
			            <div className="submitButton">
			            <button type="submit" className="btn btn-primary" id="submission" onClick={this.generateWorkout.bind(this)}>Generate Workout</button>
			          </div>
			          </form>

			        </div>
			        </div>
			        <div className="row">
			          <div className="col-lg-12">
			            <div id="result">

			              <table id="summaryTable" className="tableStyle table table-striped">
			              	{finalTable}
			              </table>
			            </div>
			          </div>
			        </div>
			      </div>
		)
	}
}

export default withRouter(WorkoutScreen);