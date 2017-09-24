
import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';
import initialState from './initialState'


var destination = document.querySelector("#container");   // or document.getElementById('container')

render(<KanbanBoard cards={initialState} />, destination);
