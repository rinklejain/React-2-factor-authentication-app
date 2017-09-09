import React from 'react'

class Registered extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		var registered_numbers = []
		for (var num in localStorage) {
			registered_numbers.push(<li key={num}>{num}</li>)
		}
		return(
			<div>
			<div><h2>Registered</h2></div>
			<div><ul>
			{registered_numbers}
			</ul></div>
			</div>
		);
	}
}

export default Registered