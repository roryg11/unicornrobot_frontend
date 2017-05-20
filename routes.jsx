var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var SmallApp = require('./components/SmallApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var UsersDirectory = require('./components/stories/UsersDirectory.react.jsx');
var UserPage = require('./components/stories/UserPage.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={SmallApp}>
    <DefaultRoute handler={UsersDirectory} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="usersDirectory" path="/users" handler={UsersDirectory}/>
    <Route name="user" path="/users/:userId" handler={UserPage} />
  </Route>
);
