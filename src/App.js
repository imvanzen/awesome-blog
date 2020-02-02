import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Home, NotFound } from './components/pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
