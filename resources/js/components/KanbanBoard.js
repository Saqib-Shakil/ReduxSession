
import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux'
import { loadCards } from '../actions'
import { bindActionCreators } from 'redux'

class KanbanBoard extends Component {
  componentWillMount() {
    this.props.loadCards()
  }
  render() {
    
    return (
      <div className="app">
        <List id='todo'
          title="To Do"
          status={"todo"} />
        <List id='in-progress'
          title="In Progress"
          status={"in-progress"} />
        <List id='done'
          title='Done'
          status={"done"} />
      </div>
    );
  }
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadCards
  }, dispatch)
}
export default connect(undefined, mapDispatchToProps)
  (KanbanBoard);
