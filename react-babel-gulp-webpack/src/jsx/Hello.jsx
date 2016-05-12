/** @jsx React.DOM */
var React = require('react');
var Hello = React.createClass({
  getInitialState: function () {
    return { name: "Click me!"  };
  },
  onClick: function () {
    this.setState( {name: "Hello!" });
  },
  render: function() {
    return <div onClick={ this.onClick } >{this.state.name}</div>;
  }
});

module.exports = Hello;
