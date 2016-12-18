import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import NewsMain from './NewsMain';
import NewsDetail from './NewsDetail';

const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={NewsMain}/>
      <Route path="/details/**" component={NewsDetail}/>
    </Router>
  </Provider>;

export default Root;
