import React, { Component } from 'react';
import WorkoutCard from './WorkoutCard.js';
import './WorkoutScreen.css';
import WorkoutListItem from './WorkoutListItem.js';
import Workout from './Workout.js'
import Youtube from './Youtube.js'

var Promise = require('bluebird')

var	quad = require('./img/quadriceps.jpg')
var	ham = require('./img/hamstrings.jpg')
var	hip = require('./img/hips.jpg')
var	lBack = require('./img/lower_back.jpg')
var	uBack = require('./img/upper_back.jpg')
var	shoulder = require('./img/shoulders.jpg')
var	saddle = require('./img/saddle.png')
var	lizard = require('./img/lizard.jpg')
var	half_saddle = require('./img/half_saddle.jpg')
var	twisted_lizard = require('./img/twisted_lizard.jpg')
var	seated_forward_fold = require('./img/seated_forward_fold.jpg')
var	standing_straddle = require('./img/standing_straddle.jpg')
var	half_front_split = require('./img/half_front_split.jpg')
var	dragon = require('./img/dragon.jpg')
var	pigeon = require('./img/pigeon.jpg')
var	seated_cross_shin = require('./img/seated_cross_shin.jpg')
var	bound_angle = require('./img/bound_angle.jpg')
var	single_leg_forward_fold = require('./img/single_leg_forward_fold.png')
var	puppy_dog = require('./img/puppy_dog.jpg')
var	happy_baby = require('./img/happy_baby.jpg')
var	seal = require('./img/seal.jpg')
var	saddle_eagle = require('./img/saddle_eagle.jpg')
var	cow_face = require('./img/cow_face.jpg')
var	standing_forward_fold = require('./img/standing_forward_fold.jpg')
var	childs_pose_shoulders = require('./img/childs_pose_shoulders.jpg')
var	shoulder_opener = require('./img/shoulder_opener.jpg')
var	thread_the_needle = require('./img/thread_the_needle.jpg')

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

	constructor(props) {
		super(props);

		this.state = {
			time: 1,
			muscles: addCards(),
			workoutMuscles: [],
			workoutMuscleLookups: [],
			poseRand: [],
			workoutPoses: [],
			posePictures: [],
			poseBilateral: [],
			poseTime: "1:00",
			timePose: 0,
			workoutShown: false,
			currentPose: "",
			currentPicture: "",
			currentBilateral: false,
			currentTime: 0
		};
	}

	changeTime = (event) => {
        var time = parseInt(event.target.value)
        this.setState({
            time: time
        })
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


	getTimePose(timeMinutes, poseCount) {
		var timePose = (timeMinutes * 60) / poseCount
		return timePose
	}

	getPoseDuration(timeMintues, poseCount) {
		var timeSeconds = timeMintues * 60
		var timePose = timeSeconds / poseCount
		var seconds = timePose % 60

		if (seconds < 10) {
			seconds = '0' + seconds
		}

		var timeMinutesSeconds = Math.floor(timePose / 60) + ":" + seconds
		return timeMinutesSeconds
	}

	changeTime = (event) => {
		var time = parseInt(event.target.value)
		this.setState({
			time: time
		})
	}

	generateWorkout(event) {
		event.preventDefault()
		var selectedMuscles = []
		var selectedMuscleLookup = []
		var selectedPoses = []
		var selectedPoseLookup = []
		var selectedPoseImage = []
		var selectedPoseBilateral = []
		var selectedPose
		var poseRand = []
		var poses = {
			quads: [
				['Saddle', saddle, false],
				['Lizard', lizard, true],
				['Half Saddle', half_saddle, true],
				['Twisted Lizard', twisted_lizard, true]
			],
			hams: [
				['Seated Forward Fold', seated_forward_fold, false],
				['Standing Straddle', standing_straddle, false],
				['Half Front Split', half_front_split, true],
				['Dragon', dragon, true]
			],
			hips: [
				['Pigeon', pigeon, true],
				['Seated Cross Shin', seated_cross_shin, true],
				['Bound Angle', bound_angle, false],
			],
			lBack: [
				['Single Leg Forward Fold', single_leg_forward_fold, true],
				['Puppy Dog', puppy_dog, false],
				['Happy Baby', happy_baby, false],
				['Seal', seal, false]
			],
			uBack: [
				['Saddle Eagle', saddle_eagle, true],
				['Cow Face', cow_face, true],
				['Standing Forward Fold with Interlacing Fingers', standing_forward_fold, false]
			],
			shoulders: [
				["Child's Pose with Shoulders", childs_pose_shoulders, false],
				['Shoulder Opener', shoulder_opener, true],
				['Thread the Needle', thread_the_needle, true]
			]
		}
 
		for (var x=0; x<this.state.muscles.length; x++) {
			if (this.state.muscles[x].isPicked) {
				var lookup = this.state.muscles[x].lookup
				var rand = Math.floor(Math.random() * poses[lookup].length)
				
				selectedMuscles.push(this.state.muscles[x].title)
				selectedMuscleLookup.push(lookup)
				poseRand.push(rand)

				selectedPoses.push(poses[lookup][rand][0])
				selectedPoseImage.push(poses[lookup][rand][1])
				selectedPoseBilateral.push(poses[lookup][rand][2])
			}

			var timeMinutes = this.state.time
			var poseCount = selectedMuscles.length
			var poseTimer = this.getPoseDuration(timeMinutes, poseCount)
			var timePose = this.getTimePose(timeMinutes, poseCount)

			this.setState({
				workoutMuscles: selectedMuscles,
				workoutMuscleLookups: selectedMuscleLookup,
				poseRand: poseRand,
				workoutPoses: selectedPoses,
				posePictures: selectedPoseImage,
				poseBilateral: selectedPoseBilateral,
				poseTime: poseTimer,
				timePose: timePose
			})

		}	
	}



	displayTime(totalSeconds) {
		var minutes = Math.floor(totalSeconds / 60)
		var seconds = totalSeconds % 60

		if (seconds < 10) {
			seconds = '0' + seconds
		}

		var display = minutes + ":" + seconds
		this.setState({
			poseTime: display,
			currentTime: totalSeconds
		})
		totalSeconds--

		if (totalSeconds > 0) {
			setTimeout(()=>{
				this.displayTime(totalSeconds)
			}, 1000)
		} 
	}


	displayPoses(time, pose, title) {
		var move = pose.shift()
		var moveTitle = title.shift()

		this.setState({
			currentPicture: move,
			currentPose: moveTitle
		})

		this.displayTime(time)

		if (pose.length) {
			setTimeout(()=>{
				this.displayPoses(time, pose, title)
			}, time * 1000)
		}
	}

	launchWorkout(event) {
		event.preventDefault()

		this.setState({
			workoutShown: true
		})

		this.displayPoses(this.state.timePose, this.state.posePictures, this.state.workoutPoses)
	}


	render () {

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
	


		var yogaForm =
			<form id="yoga-form">
		        <div className="submitNav">
					<div className="stepTwo">Step 2:</div>
		            <span className="durationText">Select Workout Duration</span>
					<span className="workoutTime">
		            <select id="select" onChange={(e) => this.changeTime(e)}>
		              <option>1 Minute</option>
		              <option>2 Minutes</option>
		              <option>4 Minutes</option>
		              <option>6 Minutes</option>
		              <option>8 Minutes</option>
		              <option>10 Minutes</option>
		              <option>12 Minutes</option>
		              <option>14 Minutes</option>
		              <option>16 Minutes</option>
		              <option>18 Minutes</option>
		              <option>20 Minutes</option>
		            </select>
					</span>
		        </div>
		        <div className="card-deck row">

		        </div>
				<div className="stepThree">Step 3:</div>
		        <div className="submitButton">
		            <button type="submit" className="btn btn-primary generateTableButton" id="submission" href="#stepFour" onClick={this.generateWorkout.bind(this)}>Generate Workout</button>
		        </div>
		    </form>

			var finalTable =
			<div>
			<div>
				<br/>
				<div className="topTableText">*Click generate workout button to cycle throught new poses</div>
				<table class="table table-fixed">
					<thead> 
						<tr> 
							<th class="col-xs-3">Duration</th> 
							<th class="col-xs-3">Muscle Group</th> 
							<th class="col-xs-3">Pose</th> 
						</tr> 
					</thead>
					{workoutTable}
				</table>
				
				<br/>
				<div className="stepFour" id="stepFour">Step 4:</div>
				</div>
			<div className="beginButton">
					<a className="btn btn-primary beginWorkoutButton" onClick={this.launchWorkout.bind(this)} href="/launch_workout">Begin Workout</a>
			</div>
			</div>


		var youtube = null
		var stepOne = <div className="stepOne">Step 1:</div>

		if (this.state.workoutPoses.length === 0) {
			finalTable = ""
		}

		if (this.state.workoutShown) {
			workoutCards = ""
			workoutTable = ""
			finalTable = ""
			yogaForm = ""
			stepOne = ""
			youtube = <Youtube/>

			var workout = <Workout key={0}
									pose={this.state.currentPose}
									time={this.state.poseTime}
									posePicture={this.state.currentPicture}/>

			}



		return (
			
		    <div className="container" id="topDiv">
				{stepOne}
		    	<div className="row">
		      		{workoutCards}
		        	<div className="col-lg-12">
		        		{yogaForm}
		        	</div>
		        </div>
		        <div className="row">
		        	<div className="workoutScreen col-lg-12">
		        		<div id="result">
			            	{finalTable}
							{workout}
							{youtube}
		            	</div>
		          	</div>
		       	</div>
		    </div>
		)
	}
}


export default WorkoutScreen;

