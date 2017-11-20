import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import thunk from 'redux-thunk';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { SET_HOME_TOP, SET_HOME_MIDDLE, SET_HOME_BOTTOM } from './actions/types'

let store = createStore(reducer, applyMiddleware(thunk))

let homeTop = localStorage.getItem(SET_HOME_TOP);
let homeMiddle = localStorage.getItem(SET_HOME_MIDDLE);
let homeBottom = localStorage.getItem(SET_HOME_BOTTOM);

if (homeTop) {
	store.dispatch( { type: SET_HOME_TOP, payload: homeTop} )
}

if (homeMiddle) {
	store.dispatch( { type: SET_HOME_MIDDLE, payload: homeMiddle} )
}

if (homeBottom) {
	store.dispatch( { type: SET_HOME_BOTTOM, payload: homeBottom} )
}

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
