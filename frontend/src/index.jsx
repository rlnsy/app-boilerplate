import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import { BrowserRouter as Router} from 'react-router-dom'

const root = document.getElementById('root');

// Loads app at /app subdomain.
// Change basename to root ('/') when running locally
const load = () => render((
    <AppContainer>
      <Router basename='/app'>
        <App />
      </Router>
    </AppContainer>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', load);
}

load();
