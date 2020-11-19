import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import People from './components/People';
import Feed from './components/Feed';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path='/'>
          {/* put these too in home */}
          <People />
          <Feed />
        </Route>
        <Route path='/profile/:slug'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
