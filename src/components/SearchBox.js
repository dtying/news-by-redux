import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {getSearchOptsQuery, getSearchOptsPage, getSearchLastQuery, getSearchLastPage} from '../reducers';
import {Link, browserHistory} from 'react-router';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {inputKeyword} = this.props;
    inputKeyword(e.target.value);
  }

  handleSubmit(e) {
    const {query, page} = this.props;
    e.preventDefault();
    browserHistory.push(`/news-by-redux-demo/search?query=${query}&page=${page}`);
  }

  render() {
    const {query, page} = this.props;
    return (
      <form action="/news-by-redux-demo/search" method="get" className="searchbox" onSubmit={this.handleSubmit}>
        <input className="box" type="text" placeholder="search" autoComplete="off" spellCheck="false" name="query"
               value={query}
               onChange={this.handleChange}/>
        <input type="hidden" name="page" value={page}/>
        <Link to={`/news-by-redux-demo/search?query=${query}&page=${page}`}>
          <img className="icon" src="/news-by-redux-demo/images/searchicon.png" onClick={this.handleSubmit}/>
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  query: getSearchOptsQuery(state),
  page: getSearchOptsPage(state),
  lastQuery: getSearchLastQuery(state),
  lastPage: getSearchLastPage(state)
});

SearchBox = connect(
  mapStateToProps,
  actions
)(SearchBox);

export default SearchBox;
