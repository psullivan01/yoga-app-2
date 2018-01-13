import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

	render () {
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
                <a className="nav-link active" href="/">Home</a>
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
				<Route path="/" component={HomePage}/>




      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <img src="https://secure2.convio.net/seva/images/content/pagebuilder/longviewyogastudio.png" width="400" height="300" alt=""/>
              <h3 className="mb-5">DROP AND GIVE ME ZEN!</h3>
            </div>
          </div>
        </div>
      </header>

      <section className="features-icons bg-light text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                <img src="https://www.shareicon.net/data/128x128/2016/09/07/827300_yoga_512x512.png" alt="Smiley face" width="100" height="100"/>

                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-screen-desktop m-auto text-primary"></i>
                    </div>
                    <h3>Good for Health</h3>
                    <p className="lead mb-0">Find balance, harmony, energy, mental clarity, enhance and improve your mood.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSircCGnN-NNrwSlTJKawEYEIaT0xQC-8Cr23kRavWmlAVGgVVD" alt="Smiley face" width="100" height="100"/>
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-layers m-auto text-primary"></i>
                    </div>
                    <h3>Good for Body</h3>
                    <p className="lead mb-0">Improve metabolism, strengthen and tone muscles, improve balance and increase flexibility.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbi-nwbZOPSTjDdiobCkfzhbdz-E81sKfC-79jB8nga2-lTxMT" alt="Smiley face" width="100" height="100"/>
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-check m-auto text-primary"></i>
                    </div>
                    <h3>Good for Cardio</h3>
                    <p className="lead mb-0">Yoga helps lower blood pressure, increase blood circulation, and decrease physical pain.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>



      </div>
          );
        }
      }

      export default HomePage;
