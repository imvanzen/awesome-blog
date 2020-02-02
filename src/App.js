import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './components/pages';
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
