import React, { Component } from 'react';
const quad = require('./img/quadriceps.jpg');
const ham = require('./img/hamstrings.jpg');
const hip = require('./img/hips.jpg');
const lBack = require('./img/lower_back.jpg');
const uBack = require('./img/upper_back.jpg');
const shoulder = require('./img/shoulders.jpg');

class WorkoutScreen extends Component {

	render () {
		return (
			    <div class="container" id="topDiv">
			      <div class="row">

			        <div class="col-lg-12">
			          <form id="yoga-form">
			            <div class="submitNav">
			            <span class="durationText">Select Workout Duration</span>
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
			            <div class="card-deck row">
			              <div class="cardStyle card col-lg-4">
			                <img class="card-img-top" src={quad} />
			                <div class="card-block">
			                  <h4 class="card-title">Quads</h4>
			                  <div class="addButton">
			                  <button type="button" class="btn btn-success btn-sm" id="addButton1" value="quads">Add</button>
			                  </div>
			                </div>
			              </div>
			              <div class="cardStyle card col-lg-4">
			                <img class="card-img-top" src={ham}></img>
			                <div class="card-block">
			                  <h4 class="card-title">Hamstrings</h4>
			                  <div class="addButton">
			                  <button type="button" class="btn btn-success btn-sm" id="addButton2" value="hamstrings">Add</button>
			                  </div>
			                </div>
			              </div>
			              <div class="cardStyle card col-lg-4">
			                <img class="card-img-top" src={hip}></img>
			                <div class="card-block">
			                  <h4 class="card-title">Hips</h4>
			                  <div class="addButton">
			                  <button type="button" class="btn btn-success btn-sm" id="addButton3" value="hips">Add</button>
			                  </div>
			                </div>
			              </div>
			              <div class="cardStyle card col-lg-4">
			                <img class="card-img-top" src={lBack}></img>
			                <div class="card-block">
			                  <h4 class="card-title">Lower Back</h4>
			                  <div class="addButton">
			                  <button type="button" class="btn btn-success btn-sm" id="addButton4" value="lowerBack">Add</button>
			                  </div>
			                </div>
			              </div>
			              <div class="cardStyle card col-lg-4">
			                <img class="card-img-top" src={uBack}></img>
			                <div class="card-block">
			                  <h4 class="card-title">Upper Back</h4>
			                  <div class="addButton">
			                  <button type="button" class="btn btn-success btn-sm" id="addButton5" value="upperBack">Add</button>
			                  </div>
			                </div>
			              </div>
			              <div class="cardStyle card col-lg-4">
			                <img class="card-img-top" src={shoulder}></img>
			                <div class="card-block">
			                  <h4 class="card-title">Shoulders</h4>
			                  <div class="addButton">
			                  <button type="button" class="btn btn-success btn-sm" id="addButton6" value="shoulders">Add</button>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div class="submitButton">
			            <button type="submit" class="btn btn-primary" id="submission">Generate Workout</button>
			          </div>
			          </form>

			        </div>
			        </div>
			        <div class="row">
			          <div class="col-lg-12">
			            <div id="result">

			              <table id="summaryTable" class="tableStyle table table-striped">
			              </table>
			            </div>
			          </div>
			        </div>
			      </div>
		)
	}
}

export default WorkoutScreen;