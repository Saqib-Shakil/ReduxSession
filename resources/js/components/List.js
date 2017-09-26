
import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';

class List extends Component {
	render() {
		if (this.props.cardsLoading)
			return <div>Loading</div>
			
		var cards = this.props.cards.map((card, key) => {
			return <Card key={key}
				id={card.id}
			/>
		});

		return (
			<div className="list">
				<h1>{this.props.title}</h1>
				{cards}
			</div>
		);
	}
};

let mapStateToProps = (state, ownProps) => {
	return {
		cards: state.cards
			.filter(p => p.status === ownProps.status),
		cardsLoading: state.app.cardsLoading

	}
}
export default connect(mapStateToProps)(List);
