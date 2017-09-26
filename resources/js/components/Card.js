
import React, { Component } from 'react';
import CheckList from './CheckList';
import marked from 'marked';
import { connect } from 'react-redux';
import { expandCard } from '../actions'
class Card extends Component {

	toggleDetails() {
		this.props.expandCard(this.props.id)	
	}

	render() {
		let cardDetails;
		if (this.props.showDetails) {
			cardDetails = (
				<div className="card__details">
					<span dangerouslySetInnerHTML={{ __html: marked(this.props.description) }} />
					<CheckList cardId={this.props.id} />
				</div>
			);
		};

		let sideColor = {
			position: 'absolute',
			zIndex: -1,
			top: 0,
			bottom: 0,
			left: 0,
			width: 7,
			backgroundColor: this.props.color
		};

		return (
			<div className="card">
				<div style={sideColor} />
				<div className={
					this.props.showDetails ? "card__title card__title--is-open" : "card__title"
				} onClick={this.toggleDetails.bind(this)}>
					{this.props.title}
				</div>
				{cardDetails}
			</div>
		);
	}
}

export default connect(
	(state, { id }) => {
		let card = state.cards.filter(p => p.id === id)[0]
		return {
			title: card.title,
			description: card.description,
			color: card.color,
			tasks: card.tasks,
			showDetails: card.expanded

		}
	},
	{
		expandCard
	}
)(Card);
