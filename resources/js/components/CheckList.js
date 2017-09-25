
import React, { Component } from 'react';
import { addTask } from '../actions'
import { connect } from 'react-redux';
class CheckList extends Component {

	render() {
		let tasks = this.props.tasks.map((task) => (
			<li key={task.id} className="checklist__task">
				<input type="checkbox" defaultChecked={task.done} />
				{task.name}{' '}
				<a href="#" className="checklist__task--remove" />
			</li>
		));

		return (
			
			<div className="checklist">
				<ul>{tasks}</ul>
				<form onSubmit={(e) => {
					e.preventDefault();
					this.props.addTask(this.props.cardId, this.refs.input.value);
					this.refs.input.value = ''
				}  }>
					<input type="text"
						ref="input"
						className="checklist--add-task"
						placeholder="Type then hit Enter to add a task"
						/>
				</form>
			</div>
		);
	}
}

export default connect((state, { cardId }) =>
	({
		tasks: state.filter(p => p.id === cardId)[0].tasks
	}),
	{ addTask }
)(CheckList);
