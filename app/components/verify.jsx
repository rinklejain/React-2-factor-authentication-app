import React from 'react';
import Popup from 'react-popup';
import {Redirect, withRouter} from 'react-router-dom'


var sid = require('shortid');

class Verify extends React.Component {
	constructor(props) {
		super(props);
		var redirect = false;
		if(!this.props.location.state){
			redirect = true;
		}
		this.state = {
			count : 0,
			code : sid.generate(),
			verified: false,
			redirect: redirect
		}
		// Verification code is logged.
		console.log("Verification Code:", this.state.code);
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillUnmount(){
		if(this.state.redirect == true)
			return;
		if(this.state.verified == false && this.state.count < 3) {
			localStorage.removeItem(this.props.location.state.number);
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.state.code == this.input.value)
		{
			this.setState({
				verified : true,
				redirect : true
			});
			return;
		}
		this.setState(prevState => ({
			count: prevState.count + 1
		}));
		if(this.state.count == 2){
			localStorage.removeItem(this.props.location.state.number);
			this.setState({
				redirect : true
			});
			
		}
	}

	render(){
		var count = this.state.count;
		if(this.props.location.state)
		var number = this.props.location.state.number;//this.props.location.state.number;
		return (
		<div>
		{this.state.redirect && <Redirect to = {{ pathname: '/'}} />}
		{count > 0 && <div>Incorrect Code, {3 - count} attempts remaining </div>}
		<form onSubmit = {this.handleSubmit}>
			<label>
			Verification Code:
			<input type="password" ref={(input) => this.input = input} 
				placeholder = "password" defaultValue = ''/>
			</label>
			<input type="submit" value="Submit" />
		</form>			
		</div>
		);
	}
}

export default Verify;