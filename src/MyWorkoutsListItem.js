import React, { Component } from 'react';

class MyWorkoutListItem extends Component {

	render() {
		
		return (
			<tbody>
				<tr>
					<td>{this.props.name}</td>
					<td>{this.props.date}</td>
					<td>{this.props.duration}</td>
					<td>{this.props.muscles}</td>
					<td>{this.props.poses}</td>
				</tr>
			</tbody>
		)
	}
}

export default MyWorkoutListItem;