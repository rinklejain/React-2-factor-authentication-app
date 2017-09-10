import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			exists: false,
			formError: '',
			submitted: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	};

	handleUserInput(e){
		let value = this.input.value;
		let inputValid = value.match(/^[2-9]{2}[0-9]{8}$/i);
		let err = inputValid ? '' : '* Number is invalid';
		this.setState({
			formError: err,
			exists: false
		});
		return;
	}

	handleSubmit(e) {
		e.preventDefault();

		if(localStorage.getItem(this.input.value)){
			this.setState({
				exists: true
			});
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
			<div className = "row align-items-center main-div" >
				<div className = "col-2"></div>
				<div className = "col-8 card text-center main-div-content">
					<div className = "card-body div-contents">
						<h3 className ="card-subtitle mb-2 text-muted">Register your Mobile here</h3>
						<form onSubmit = {this.handleSubmit}>
							<div className = "form-group row div-contents">
								<label className = "col-sm-2 col-form-label">Mobile Number</label>
								<div className = "col-sm-8">
								<input type ="text" placeholder = "10-digit mobile number"
								  ref = {(input) => this.input = input} onChange = {this.handleUserInput}
								  className = "form-control"/>
								<small className="form-text error-field">{this.state.formError}</small>
								</div>
								{this.state.exists == true &&
								  <small className="form-text error-field">Number already exists</small>}
							</div>
							<button type="submit" value="Submit" disabled = {!(this.state.formError == '')} 
							  className="btn btn-primary"> Submit </button>
						</form>
						{this.state.exists == false && this.state.submitted &&
				 		  <Redirect to ={{ pathname:'/verify' ,state:{number: this.state.number} }}/>}
					</div>
				</div>
			</div> 
		);
	}
}
export default withRouter(Register)