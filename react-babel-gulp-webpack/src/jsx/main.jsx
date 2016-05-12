/** @jsx React.DOM */
var Hello = require('./Hello');
var React = require('react');
var ReactDom = require('react-dom');

ReactDom.render(
  <Hello />,
  document.getElementById('content')
);
