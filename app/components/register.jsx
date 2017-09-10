import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number:'',
			exists:false,
			formError: '',
			submitted :false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	};

	handleUserInput(e){
		let value = this.input.value;
		let inputValid = value.match(/^[2-9]{2}[0-9]{8}$/i);
		let err = inputValid ? '' : 'Number is invalid';
		this.setState({
			formError:err
		});
		return;

	}

	handleSubmit(e) {
		e.preventDefault();

		if(localStorage.getItem(this.input.value)){
			this.setState({
			exists: true
			})
			return;
		}
		localStorage.setItem(this.input.value, 0);
		this.setState({
			number: this.input.value,
			exists: false,
			submitted: true
		});
	}

	render(){
		return (
			<div>
				<div><h2>Register</h2></div>
				<form onSubmit = {this.handleSubmit} >
				<label>
				Mobile Number:
				<input type="text" placeholder = "10-digit mobile number"
					ref={(input) => this.input = input} onChange = {this.handleUserInput} />
				</label>
				<div>{this.state.formError}</div>	
				<input type="submit" value="Submit" disabled = {!(this.state.formError == '')}/>
				</form>
				{this.state.exists == true && <div><p>Number already exists</p></div>}
				{this.state.exists == false && this.state.submitted &&
				 <Redirect to ={{ pathname:'/verify' ,state:{number: this.state.number} }}/>
				}
			</div> 
		);
	}
}
export default withRouter(Register)