import React from 'react';
import ReactDOM from 'react-dom';

// Routes
import Routes from './components/Routes'

// Material UI functions
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
