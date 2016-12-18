import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();

// Render the main component into the dom
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
