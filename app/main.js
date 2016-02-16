/** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = require('./components/ReactApp');

var mountNode = document.getElementById('outCont');

React.render(new ReactApp({}), mountNode);
