import React, { Component } from 'react';
import MyWorkouts from './MyWorkouts.js';
import WorkoutScreen from './WorkoutScreen.js';
import Login from './Login.js';
import HomePage from './HomePage.js';
import DashboardLogin from './DashboardLogin.js';
import './App.css';
import image2 from './img/prologo1.png';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false

    }
  }

userInfo(newEmail, userName) {
  this.setState({
    email: newEmail,
    name: userName
  });

  localStorage.setItem('email', newEmail)
}


successfulLogin() {
  this.setState({
    isLoggedIn: true
  });
}

unSuccessfulLogin() {
  this.setState({
    isLoggedIn: false
  })
}

  render() {

    var navWorkout = <li className="nav-item">
    <Link  className="nav-link" to="/workout">Workout</Link>
  </li>

  var navMyWorkouts = <li className="nav-item">
  <Link className="nav-link" to="/my_workouts">My Workouts</Link>
</li>


    if(!this.state.isLoggedIn) {
      navWorkout = ""
      navMyWorkouts = ""
      var welcomeMessage = ""
     }  

    if (this.state.name) {
      var name = this.state.name
      var firstName = name.substr(0, name.indexOf(' '))
      console.log('first name here:', firstName)
      var welcomeMessage = 'Hello, ' + firstName
    }

    return (

      <div>
      <nav className="navbar  static-top">
          <div className="container">
            <nav className="navbar navbar-light bg-faded">
              <a className="navbar-brand" href="/">
                <img src={image2} width="70" height="55" alt=""/>
              </a>
           
            </nav>
            
            <ul className="nav justify-content-end">
              <li className="nav">{welcomeMessage}</li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
                {navWorkout}
                {navMyWorkouts}
              <li className="nav-item">
                <Link className="btn btn-primary loginButton" to="/DashboardLogin">Login</Link>
              </li>
            </ul>

          </div>

        </nav>

        <Route path="/my_workouts" render={()=>{
          return <MyWorkouts email={this.state.email} name={this.state.name}/>
        }}/>
        <Route path="/workout" render={()=>{
            return <WorkoutScreen email={this.state.email} name={this.state.name}/>
        }}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" render={()=>{
          return <HomePage loggedIn={this.state.isLoggedIn}/>
        }} />
        <Route path="/about" component={DashboardLogin}/>
        <Route path="/DashboardLogin" render={() =>{
          return <DashboardLogin userInfo={this.userInfo.bind(this)} successfulLogin={this.successfulLogin.bind(this)} unSuccessfulLogin={this.unSuccessfulLogin.bind(this)}/>
        }} />

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
