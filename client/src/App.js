import React, { Component } from 'react';
import logo from './logo.svg';
import MyWorkouts from './MyWorkouts.js';
import WorkoutScreen from './WorkoutScreen.js';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (

      <div>
      <nav class="navbar navbar-light bg-light static-top">
          <div class="container">
            <nav class="navbar navbar-light bg-faded">
              <a class="navbar-brand" href="#">
                <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/03/creative-yoga-logo-design.png" width="30" height="30" alt=""/>
              </a>
              <a class="navbar-brand" href="#">P&ZYoga</a>
            </nav>


            <ul class="nav justify-content-end">
              <li className="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/workout">Workout</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/my_workouts">Calendar</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-primary" href="#">Sign In</a>
              </li>
            </ul>

          </div>

        </nav>


        <div className="App">
          <div className="navbar">


            <Link to="/workout">Create New Workout</Link>
            <Link to="/my_workouts">My Workouts</Link>

          </div>

        </div>

        <Route path="/my_workouts" component={MyWorkouts}/>
        <Route path="/workout" component={WorkoutScreen}/>





      <header class="masthead text-white text-center">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <img src="https://secure2.convio.net/seva/images/content/pagebuilder/longviewyogastudio.png" width="400" height="300" alt=""/>
              <h3 class="mb-5">DROP AND GIVE ME ZEN!</h3>
            </div>
            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div class="form-row">
                  <div class="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" class="form-control form-control-lg" placeholder="Enter your email..."/>
                  </div>
                  <div class="col-12 col-md-3">
                    <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up!</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <section class="features-icons bg-light text-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                      <i class="icon-screen-desktop m-auto text-primary"></i>
                    </div>
                    <h3>Good for Health</h3>
                    <p class="lead mb-0">Find balance, harmony, energy, mental clarity, enhance and improve your mood.</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                      <i class="icon-layers m-auto text-primary"></i>
                    </div>
                    <h3>Good for Body</h3>
                    <p class="lead mb-0">Improve metabolism, strengthen and tone muscles, improve balance and increase flexibility.</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                      <i class="icon-check m-auto text-primary"></i>
                    </div>
                    <h3>Good for Cardio</h3>
                    <p class="lead mb-0">Yoga helps lower blood pressure, increase blood circulation, and decrease physical pain.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>



      </div>
    );
  }
}

export default App;
