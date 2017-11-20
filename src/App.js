import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoute from './components/MyRoute';
import { Provider } from 'react-redux'
import './css/index.css';

const App = ({ store }) => (
  <Provider store={store}>
    <div className='darbar-rishe'>
      <Router>
        <MyRoute />
      </Router>
    </div>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
