require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import NewsMain from './NewsMain';
import DetailContainer from './DetailContainer';

const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/news-by-redux-demo" component={NewsMain}/>
      <Route path="details/**" component={DetailContainer}/>
    </Router>
  </Provider>;

export default Root;
