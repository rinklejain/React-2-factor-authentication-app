import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import ReactModal from 'react-modal'
import * as authenticate from './authenticate.jsx'
import Verify from './verify'


class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			exists: false,
			formError: '',
			verify: false,
			err: '',
			otp: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	};

	componentWillMount(){
		//ReactModal.setAppElement('#app');
	}

	handleUserInput(e){
		let value = this.input.value;
		let inputValid = value.match(/^[2-9]{1}[0-9]{9}$/i);
		let err = inputValid ? '' : '* Number is invalid';
		this.setState({
			formError: err
		});
		return;
	}

	handleSubmit(e) {
		e.preventDefault();
		authenticate.verifyNumber(this.input.value)
		.then(number => {
			this.setState({
				number: number
			});
			return authenticate.sendOTP(this.input.value);
		})
		.then(otp => {
			console.log("OTP: ", otp);
			this.setState({
				verify: true,
				otp: otp	
			})
			return;
		})
		.catch((err) => { 
			this.setState({
				formError: err,
				exists: true
			})
			console.log(err);
		})
	}

	render(){
		return (
			<div className = "row align-items-center main-div">
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
							</div>
							<button type="submit" value="Submit" disabled = {!(this.state.formError == '')} 
							  className="btn btn-primary"> Submit </button>
						</form>
						<ReactModal isOpen = {this.state.verify} contentLabel="Example Modal">
							<Verify number={this.state.number} otp={this.state.otp}>
							</Verify>
						</ReactModal>
				 	</div>
				</div>
			</div> 
		);
	}
}
export default withRouter(Register)