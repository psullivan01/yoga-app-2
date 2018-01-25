import React, { Component } from 'react';
import './HomePage.css';
import image from './img/yogapro.png';

class HomePage extends Component {

	render () {
		return (

      <div>

      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <img src={image} width="850" height="300" alt="No Image"/>
              <div><button class="btn btn-primary menuButton" href="/workout" type="submit">Workout Now!</button></div>
            </div>
          </div>
        </div>
      </header>
      <h3 className="yogaBenifits">Benefits From Yoga</h3>
      <section className="features-icons text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                <img src="https://www.shareicon.net/data/128x128/2016/09/07/827300_yoga_512x512.png" alt="Smiley face" width="100" height="100"/>

                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <i className="icon-screen-desktop m-auto text-primary"></i>
                    <h3>Good for Health</h3>
                    <p className="lead mb-0">Find balance, harmony, energy, mental clarity, enhance and improve your mood.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSircCGnN-NNrwSlTJKawEYEIaT0xQC-8Cr23kRavWmlAVGgVVD" alt="Smiley face" width="100" height="100"/>
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <i className="icon-layers m-auto text-primary"></i>
                    <h3>Good for Body</h3>
                    <p className="lead mb-0">Improve metabolism, strengthen and tone muscles, improve balance and increase flexibility.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                <img src="https://image.flaticon.com/icons/png/512/215/215703.png" alt="Smiley face" width="100" height="100"/>
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                      <i className="icon-check m-auto text-primary"></i>
                    <h3>Good for Cardio</h3>
                    <p className="lead mb-0">Yoga helps lower blood pressure, increase blood circulation, and decrease physical pain.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <div class="row" id="box-search">
    <div class="thumbnail text-center">
        <img src="http://www.dreams.metroeve.com/wp-content/uploads/2016/05/Zen.jpg" alt="" class="img-responsive"/>
        <div class="caption">
            <p>DROP AND GIVE ME ZEN</p>
        </div>
    </div>
</div>

      </div>
          );
        }
      }

      export default HomePage;
