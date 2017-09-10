import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom'
import Register from './register'
import Registered from './registered'


class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className = "row align-items-center main-div" >
				<div className = "col-2"></div>
				<div className = "col-8 card text-center main-div-content">
					<div className = "card-body div-contents">
						<h2 className="card-subtitle mb-2 text-muted">A demo 2-Factor Authentication App</h2>

						<Route path="/register" component={Register}/>
						<Route path="/registered_entries" component={Registered}/>

						<h3 className="card-text links text-muted">Register new number</h3>
					    <a href="/register" className="btn btn-primary btn-lg">Register</a>

					    <h3 className="card-text links text-muted">View registered numbers</h3>
					    <a href="/registered_entries" className="btn btn-primary btn-lg">Registered Entries</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Home