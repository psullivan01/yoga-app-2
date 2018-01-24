import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";
import './DashboardLogin.css';
import GoogleLogin from 'react-google-login';




class DashboardLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      name: '',
      tokenExpiresAt: null,
      clientId: 	
      '84320499637-1pc5pbkgqnr0ensft35akk9ni6i82307.apps.googleusercontent.com',
    };
    this.responseGoogle            = this.responseGoogle.bind(this);
    this.failureResponseGoogle     = this.failureResponseGoogle.bind(this);
    this.checkResponseStatus       = this.checkResponseStatus.bind(this);
    this.parseJSON                 = this.parseJSON.bind(this);
    this.handleError               = this.handleError.bind(this);
    this.handleSuccess               = this.handleSuccess.bind(this);
  }

  responseGoogle(response){
    console.log("responseGoogle")
    this.setState({
      token: response.tokenId,
      name: response.profileObj.name,
      tokenExpiresAt: response.tokenObj.expires_at,
    });
  }

  failureResponseGoogle(response){
    console.log("failureResponseGoogle")
    this.props.notifications.add('danger', `Sorry, there was a problem. \n\nDetails:\n ${response}`);
  }

  handleSuccess(response) {
    console.log("handleSuccess")
    this.props.history.push('/');
    return response;
  }

  handleError(error) {
    console.log("handleError")
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
            <GoogleLogin className="btn btn-default btn-login btn-google"
              clientId={this.state.clientId}
              onSuccess={this.handleSuccess}
              onFailure={this.handleError}
              buttonText=""
            >
            <i class="fa fa-google-plus-official fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;
    Login with Google
            </GoogleLogin>
          </div>
        </div>
        <div className="login-bottom-text">Not the page you wanted? <a href="#/">Go back.</a></div>
      </div>
    );
  }
}

export default withRouter(DashboardLogin);