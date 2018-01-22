import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './DashboardLogin.css';
import GoogleLogin from 'react-google-login';




class DashboardLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      name: '',
      tokenExpiresAt: null,
      clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
    };
    this.responseGoogle            = this.responseGoogle.bind(this);
    this.failureResponseGoogle     = this.failureResponseGoogle.bind(this);
    this.submitAuthRequestToServer = this.submitAuthRequestToServer.bind(this);
    this.checkResponseStatus       = this.checkResponseStatus.bind(this);
    this.parseJSON                 = this.parseJSON.bind(this);
    this.handleError               = this.handleError.bind(this);
  }

  responseGoogle(response){
    this.setState({
      token: response.tokenId,
      name: response.profileObj.name,
      tokenExpiresAt: response.tokenObj.expires_at,
    });
  }

  failureResponseGoogle(response){
    this.props.notifications.add('danger', `Sorry, there was a problem. \n\nDetails:\n ${response}`);
  }

  handleSuccess(response) {
    this.props.history.push('dashboard/home');
    return response;
  }

  handleError(error) {
    const response = error.response;
    const _this = this;
    response.json()
      .then((resp) => {
        _this.props.notifications.add('danger', `Sorry, there was a problem. Details: ${resp.message}`);
      })
  }

  parseJSON(response) {
    return response.json();
  }

  checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response
      throw error;
    }
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-dashboard-wrapper">
          <div className="login-white-line"></div>
          <div className="google-login-div">
            <GoogleLogin className="google-login-style"
              clientId={this.state.clientId}
              onSuccess={this.responseGoogle}
              onFailure={this.failureResponseGoogle}
              buttonText=""
            >
              <div>Sign In With Google</div>
            </GoogleLogin>
          </div>
        </div>

        <div className="login-bottom-text">Not the page you wanted? <a href="#/">Go back.</a></div>
      </div>
    );
  }
}

export default DashboardLogin;