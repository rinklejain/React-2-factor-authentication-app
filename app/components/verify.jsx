import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import Alert from 'react-s-alert'

class Verify extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			count: 0,
			verified: false,
			redirect: false
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let number = this.props.number;
		if(this.props.otp == this.input.value)
		{
			localStorage.setItem(number, 0);
			this.setState({
				verified: true,
				redirect: true
			});
			Alert.info("Number: " + number + " registered successfully!");
			return;
		}
		this.input.value = '';
		this.setState(prevState => ({
			count: prevState.count + 1
		}));
		if(this.state.count == 2){
			this.setState({
				redirect: true
			});
			Alert.info("Too many unsuccesful attempts. Number: " + 
				number + " not registered.");
		}
	}

	render(){
		var count = this.state.count;
		var number = '';
		if(this.props)
		number = this.props.number;
		return (
			<div className = "row align-items-center main-div" >
				<div className = "col-2"></div>
				<div className = "col-8 card text-center main-div-content">
					<div className = "card-body div-contents">
						{this.state.redirect && <Redirect to = {{ pathname: '/'}} />}
						<h3 className ="card-subtitle mb-2 text-muted">
						  A verification code has been sent to {number.substring(0,1)}{'*'.repeat(6)}{number.substring(-1,3)}
						</h3>
						<h6 className ="card-subtitle mb-2 text-muted">
						  (Do not refresh page)</h6>
						<form onSubmit = {this.handleSubmit}>
							<div className = "form-group row div-contents">
								<label className = "col-sm-2 col-form-label">Verification Code</label>
								<div className = "col-sm-8">
								<input type="password" ref={(input) => this.input = input} 
								  placeholder = "Password" defaultValue="" className = "form-control" required/>
								{count > 0 && <small className="form-text error-field">
								  Incorrect Code, {3 - count} attempts remaining</small>} 
								</div>
							</div>
							<button type="submit" value="Submit" className="btn btn-primary"> Submit </button>
						</form>	
					</div>
				</div>		
			</div>
		);
	}
}

export default Verify