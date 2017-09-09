import React from 'react';
import {browserHistory, Redirect, withRouter} from 'react-router-dom'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number:'',
			exists:false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	};
	handleSubmit(e) {
		e.preventDefault();

		console.log("in function", this.state.number);
		if(localStorage.getItem(this.input.value)){
			this.setState({
			exists: true
			})
			return;
		} 
		localStorage.setItem(this.input.value, 0);
		this.setState({
			number: this.input.value,
			exists: false
		});

		for (var key in localStorage) {
			console.log(key)
		}
		//browserHistory.push({pathname:'/topics'});
		//this.context.router.transitionTo('/');
		//<Redirect push to = "/topics"/>
	}



	render(){
		console.log(this.state.number);
		return (
			<div>
				<div><h2>Register</h2></div>
				<form onSubmit = {this.handleSubmit}>
				<label>
				Name:
				<input type="text" ref={(input) => this.input = input} />
				</label>
				<input type="submit" value="Submit" />
				</form>
				{this.state.exists == true && <div><p>Number already exists</p></div>}
			</div> 
		);
	}
}
export default withRouter(Register)