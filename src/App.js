import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
// import People from './components/People';
import Feeds from './components/Feeds';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path='/'>
          {/* put these too in home */}
          {/* <People /> */}
          <Feeds />
        </Route>
        <Route path='/profile/:slug'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

// Header
// Posts
// Posts

export default App;
