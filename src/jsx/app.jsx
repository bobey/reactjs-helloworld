var React = require('react'),
    Hello = require('./hello.jsx');

React.renderComponent(
  <Hello name="World" />,
  document.getElementById('content')
);
