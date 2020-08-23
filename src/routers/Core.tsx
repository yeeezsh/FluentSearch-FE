import App from 'Apps/App';
import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import history from './history';

const Core: React.FC = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Route path="/">
          <App />
        </Route>
      </Router>
    </BrowserRouter>
  );
};

export default Core;
