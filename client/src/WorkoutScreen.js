import React, { Component } from 'react';
import WorkoutCard from './WorkoutCard.js';
const quad = require('./img/quadriceps.jpg');
const ham = require('./img/hamstrings.jpg');
const hip = require('./img/hips.jpg');
const lBack = require('./img/lower_back.jpg');
const uBack = require('./img/upper_back.jpg');
const shoulder = require('./img/shoulders.jpg');


class WorkoutScreen extends Component {

	constructor() {
		super();
		this.state = {
			time: 1,
			muscles: [
				{image: quad, title: 'Quads', isPicked: false}, 
				{image: ham, title: 'Hamstrings', isPicked: false},
				{image: hip, title: 'Hips', isPicked: false},
				{image: lBack, title: 'Lower Back', isPicked: false},
				{image: uBack, title: 'Upper Back', isPicked: false},
				{image: shoulder, title: 'Shoulders', isPicked: false}
			]
		};
	}


	pickMuscle(cardIndex) {
		var muscleToPick = {...this.state.muscles[cardIndex]};

		if (muscleToPick.isPicked) {
			return;
		}

		muscleToPick.isPicked = true;

		var newMuscles = this.state.muscles.map((muscle, index)=>{
			if (index === cardIndex) {
				return muscleToPick;
			}
			return muscle
		});

	}

	render () {

		var workoutCards = this.state.muscles.map((muscle, index)=> {
			return <WorkoutCard pickMuscle={this.pickMuscle.bind(this, index)}
								muscleImage={muscle.image}
								muscleTitle={muscle.title}
								isPicked={muscle.isPicked}
								key={index}/>
		})

		return (
			    <div className="container" id="topDiv">
			      <div className="row">
			      	{workoutCards}
			        <div className="col-lg-12">
			          <form id="yoga-form">
			            <div className="submitNav">
			            <span className="durationText">Select Workout Duration</span>
			            <select id="select">
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
			            <button type="submit" className="btn btn-primary" id="submission">Generate Workout</button>
			          </div>
			          </form>

			        </div>
			        </div>
			        <div className="row">
			          <div className="col-lg-12">
			            <div id="result">

			              <table id="summaryTable" className="tableStyle table table-striped">
			              </table>
			            </div>
			          </div>
			        </div>
			      </div>
		)
	}
}

export default WorkoutScreen;