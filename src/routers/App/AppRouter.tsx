import Home from 'Pages/App/Home';
import React from 'react';
import { Route } from 'react-router';

const AppRouter: React.FC = () => {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/test">test path </Route>
    </>
  );
};

export default AppRouter;
