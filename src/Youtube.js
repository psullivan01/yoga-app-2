import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Youtube.css';

class YoutubePlayer extends Component {

	render() {

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };
		return (
            <YouTube
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
   

export default YoutubePlayer;