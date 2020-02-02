import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './components/pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
