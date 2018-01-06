import React, { Component } from 'react';
import MyWorkouts from './MyWorkouts.js';
import WorkoutScreen from './WorkoutScreen.js';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (

      <div>
        <div className="App">
          <div className="navbar">


            <Link to="/workout">Create New Workout</Link>
            <Link to="/my_workouts">My Workouts</Link>

          </div>
          
        </div>

        <Route path="/my_workouts" component={MyWorkouts}/>
        <Route path="/workout" component={WorkoutScreen}/>

      </div>
    );
  }
}

export default App;
