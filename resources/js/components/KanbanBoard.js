
import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux'

class KanbanBoard extends Component {
  render(){
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

export default connect()(KanbanBoard);
