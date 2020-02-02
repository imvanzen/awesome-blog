import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, NotFound } from './components/pages';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </div>
    </Router>
  );
}

export default App;
