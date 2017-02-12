import React from 'react';
import SearchResultPage from './SearchResultPage';
import {getSearchResult, getSearchIsFetching, getSearchOpts, getSearchLastQuery, getSearchLastPage} from '../reducers';
import * as actions from '../actions';
import * as api from '../api';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router';
import Spinner from './Spinner';

class SearchResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleGotoNextPage = this.handleGotoNextPage.bind(this);
  }

  componentDidMount() {
    const {results, query, lastQuery, lastPage, opts} = this.props;
    console.log(opts);
    if (results.length === 0 || query !== lastQuery || lastPage !== 1) {
      this.fetchSearchResult();
    }
  }

  fetchSearchResult() {
    const {query, page, searchKeyword} = this.props;
    searchKeyword({query: query, page: page});
  }

  handleGotoNextPage() {
    const {gotoNextPage, searchKeyword, query, page} = this.props;
    gotoNextPage();
    searchKeyword({page: page - 0 + 1, query});
  }

  handleGotoPrevPage() {
    const {gotoPrevPage, searchKeyword, query, page} = this.props;
    gotoPrevPage();
    searchKeyword({page: page - 0 - 1, query});
  }

  render() {
    const {results, query, page, isFetching, opts} = this.props;

    if (isFetching) {
      return <Spinner />
    }

    return (
      <div className="search-result-page">
        <SearchResultPage query={query} results={results}/>
        <div className="footer">
          {page - 0 !== 1 ?
            <Link className="prev-page-btn" to={`/search?query=${query}&page=${page-0-1}`} onClick={()=>this.handleGotoPrevPage()}>
              <span>&lt;</span>
            </Link> : null}
          <span>Page {page}</span>
          <Link className="next-page-btn" to={`/search?query=${query}&page=${page-0+1}`} onClick={()=>this.handleGotoNextPage()}>
            <span>&gt;</span>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, {params, location}) => ({
  opts: getSearchOpts(state),
  results: getSearchResult(state),
  isFetching: getSearchIsFetching(state),
  query: location.query.query,
  page: location.query.page,
  lastQuery: getSearchLastQuery(state),
  lastPage: getSearchLastPage(state)
});

SearchResultContainer = withRouter(connect(
  mapStateToProps,
  actions
)(SearchResultContainer));


export default SearchResultContainer;
