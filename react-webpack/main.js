var React = require('react');
var ReactDOM = require('react-dom');//react-domをインポート
var Header = require('./header.jsx');
var Body = require('./body.jsx');
var Footer = require('./footer.jsx');

var Content = React.createClass({
  render:function(){
    return (
      <div>
        <Header/>
        <div>
          <Body/>
        </div>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
