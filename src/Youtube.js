import React, { Component } from 'react';
import './Youtube.css';

class Youtube extends Component {

	render() {

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
		return (
            <Youtube
          videoId="M7lc1UVf-VE"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
   

export default Youtube;