var React = require('react');

var Form = React.createClass({
  getInitialState: function() {
    return {name: '', email: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    if (!name || !email) {
      return;
    }

    // Ajaxで登録処理する

    this.setState({name: '', email: ''});
  },
  render: function() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          placeholder="Your email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = Form;