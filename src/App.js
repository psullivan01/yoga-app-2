import React, { Component } from 'react';
import MyWorkouts from './MyWorkouts.js';
import WorkoutScreen from './WorkoutScreen.js';
import Login from './Login.js';
import HomePage from './HomePage.js';
import DashboardLogin from './DashboardLogin.js';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';


class App extends Component {
  render() {
    return (

      <div>
      <nav className="navbar  static-top">
          <div className="container">
            <nav className="navbar navbar-light bg-faded">
              <a className="navbar-brand" href="/">
                <img src="https://www.logoai.com/uploads/icon/2017/06/29/14987185028816686.svg" width="90" height="47" alt=""/>
              </a>
           
            </nav>
            
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workout">Workout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/my_workouts">My Workouts</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary loginButton" href="/DashboardLogin">Log In</a>
              </li>
            </ul>

          </div>

        </nav>

        <Route path="/my_workouts" component={MyWorkouts}/>
        <Route path="/workout" component={WorkoutScreen}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={DashboardLogin}/>
        <Route path="/DashboardLogin" component={DashboardLogin}/>

        <div class="footerTest">
          <div id="motto">
            "Inhale the future. Exhale the past." - Unknown
          </div>
        </div>
        <div id="footerTest">
    <div class="footerWrap">
        <div class="toe">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="toe">
          <h3>About</h3>
          <a href="#">About Us</a>
          <a href="#">Testimonials</a>
        </div>
        <div class="toe">
          <h3>Follow</h3>
          <div id="social">
            <a id="fb" href="#" title="Facebook"></a>
            <a id="twitter" href="#" title="Twitter"></a>
          </div>
              
        </div>
      </div>
    </div>


      </div>
    );
  }
}

export default App;
