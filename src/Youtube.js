import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Youtube.css';

class YoutubePlayer extends Component {

	render() {

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
		return (
            <YouTube
          videoId="mgneq0V0NrU"
          opts={opts}
          onReady={this._onReady}
        />  
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      
    }
  }
   

export default YoutubePlayer;