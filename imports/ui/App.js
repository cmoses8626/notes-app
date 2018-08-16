import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import NotFound from './NotFound';
import Signup from './Signup';

export default class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Switch>
          <Route exact path='/' render={() => (
            Meteor.userId() ? (
              <Redirect to='/dashboard'/>
            ) : (
              <Login/>
            )
          )}/>
          <Route path='/signup' render={() => (
            Meteor.userId() ? (
              <Redirect to='/dashboard'/>
            ) : (
              <Signup/>
            )
          )}/>
          <Route exact path='/dashboard' render={() => (
            Meteor.userId() ? (
              <Dashboard/>
            ) : (
              <Redirect to='/'/>
            )
          )}/>
          <Route component={NotFound}/> {/* This will always match at end of Switch */}
        </Switch>
      </div>
    );
  }
}
