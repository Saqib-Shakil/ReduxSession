
import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './components/KanbanBoard';
//import initialState from './initialState'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import './mockedApi'
let store = configureStore()
var destination = document.querySelector("#container");   // or document.getElementById('container')

render(<Provider store={store}>
    <KanbanBoard />
</Provider>, destination);
