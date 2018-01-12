import React, { Component } from 'react';

class WorkoutListItem extends Component {

	render() {
		
		return (
			<tbody>
				<tr>
					<td>{this.props.time}</td>
					<td>{this.props.muscle}</td>
					<td>{this.props.pose}</td>
				</tr>
			</tbody>
		)
	}
}

export default WorkoutListItem;