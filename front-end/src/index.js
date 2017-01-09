import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Match, Miss } from 'react-router'

// Routes
import Routes from './components/Routes'

// Material UI functions
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
