require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import NewsMain from './NewsMain';
import DetailContainer from './DetailContainer';
import SearchResultContainer from './SearchResultContainer';

const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/news-by-redux-demo/" component={App}>
        <IndexRoute component={NewsMain}/>
        <Route path="details/**" component={DetailContainer}/>
        <Route path="search**" component={SearchResultContainer}/>
      </Route>
    </Router>
  </Provider>;

export default Root;
