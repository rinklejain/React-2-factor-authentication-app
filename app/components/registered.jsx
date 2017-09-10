import React from 'react'

class Registered extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		var registered_numbers = []
		for (var num in localStorage) {
			registered_numbers.push(
				<li className="list-group-item" key={num}>{num}</li>);
		}
		return(
			<div className = "row align-items-center main-div" >
				<div className = "col-2"></div>
				<div className = "col-8 card text-center">
					<div className = "card-body div-contents">
						<h3 className ="card-subtitle mb-2 text-muted">Registered Mobile Numbers</h3>
						<div className = 'row'>
							<div className = 'col-sm-2'></div>
							<div className = 'col-sm-8'>
								<ul className="list-group">{registered_numbers}</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Registered