import React, { Component } from 'react';
import logo from './logo.svg';
import MyWorkouts from './MyWorkouts.js'
import WorkoutScreen from './WorkoutScreen.js'
import './App.css';

class App extends Component {
  render() {
    return (

       <div>
        <div className="navbar">

          <Link to="/workout">Create New Workout</Link>
          <Link to="/my_workouts">My Workouts</Link>

        </div>

        <Route path="/my_workouts" component={MyWorkouts}/>
        <Route path="/workout" component={WorkoutScreen}/>
      </div>


    );
  }
}

export default App;
