import React, { Component } from 'react';
import './Login.css';


class Login extends Component {

	render () {
		return (
			<div>
			<div id="fullBg" />

<div className="container">
<form className="form-signin">
	 <h1 className="form-signin-heading">Please Login</h1>
	 <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
	 <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
	 <a href="/auth/google">Sign In with Google</a>
	 <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
 </form>
<p className="text-center sign-up"><strong>Sign up</strong> for a new account</p>
</div>
			</div>
		)
	}
}

export default Login;
