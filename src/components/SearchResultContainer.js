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
  }

  componentDidMount() {
    this.fetchSearchResult();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      console.log(prevProps.query);
      console.log(this.props.query);
      this.fetchSearchResult();
    }
  }

  fetchSearchResult() {
    const {query, page, searchKeyword} = this.props;
    searchKeyword({query: query, page: page});
  }

  handleGotoNextPage = () => {
    const {gotoNextPage, searchKeyword, query, page} = this.props;  
    gotoNextPage();
    searchKeyword({page: page - 0 + 1, query});
  };

  handleGotoPrevPage = () => {
    const {gotoPrevPage, searchKeyword, query, page} = this.props;
    gotoPrevPage();
    searchKeyword({page: page - 0 - 1, query});
  };

  render() {
    const {results, query, page, isFetching, opts} = this.props;

    if (isFetching) {
      return <Spinner />
    }

    return (
      <div className="search-result-page">
        <SearchResultPage query={query} results={results}/>
        <div className="footer">
          <Link className="prev-page-btn" to={`/news-by-redux-demo/search?query=${query}&page=${page-0-1}`}
                onClick={this.handleGotoPrevPage}
                style={{visibility: page - 0 !== 1 ? 'visible' : 'hidden'}}>
            <span>&lt;</span>
          </Link>
          <span>Page {page}</span>
          <Link className="next-page-btn" to={`/news-by-redux-demo/search?query=${query}&page=${page-0+1}`}
                onClick={this.handleGotoNextPage}>
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
