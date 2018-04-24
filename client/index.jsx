// React dependencies.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// Import scences.
import Routes from './routes/index.js';

// Application history. Routes, etc.
const history = createBrowserHistory();

// Render application.
ReactDOM.render(
  <Router history={history}>
    <Routes></Routes>
  </Router>,
  document.getElementById('application')
);

// Accept hot reload for development.
if (module.hot) {
  module.hot.accept();
}

// Exporting history for redirects.
export default history;
