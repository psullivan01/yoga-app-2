import React, { Component } from 'react';
import MyWorkouts from './MyWorkouts.js';
import WorkoutScreen from './WorkoutScreen.js';
import Login from './Login.js';
import HomePage from './HomePage.js';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (

      <div>
      <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <nav className="navbar navbar-light bg-faded">
              <a className="navbar-brand" href="#">
                <img src="https://seeklogo.com/images/O/OM_YOGA-logo-6F30131211-seeklogo.com.png" width="50" height="50" alt=""/>
              </a>
              <a className="navbar-brand" href="#">Yoga</a>
            </nav>

            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="/HomePage">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workout">Workout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/my_workouts">My Workouts</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="/login">Log In</a>
              </li>
            </ul>

          </div>

        </nav>


        <Route path="/my_workouts" component={MyWorkouts}/>
        <Route path="/workout" component={WorkoutScreen}/>
        <Route path="/login" component={Login}/>
        <Route path="/HomePage" component={HomePage}/>




      </div>
    );
  }
}

export default App;
