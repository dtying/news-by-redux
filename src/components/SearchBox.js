import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {getSearchOptsQuery, getSearchOptsPage, getSearchLastQuery, getSearchLastPage} from '../reducers';
import {Link} from 'react-router';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  handleChange(event) {
    const {inputKeyword} = this.props;
    inputKeyword(event.target.value);
  }

  handleClickSearch() {
    const {updateLastQuery, query, updateLastPage, page} = this.props;
    updateLastQuery(query);
    updateLastPage(page);
  }

  handleSubmit(e) {
    console.log(e.target);
  }

  render() {
    const {query, page} = this.props;
    return (
      <form action="/search" method="get" className="searchbox" onSubmit={(e)=>this.handleSubmit(e)}>
        <input className="box" type="text" placeholder="search" autoComplete="off" spellCheck="false" name="query" value={query}
               onChange={event => this.handleChange(event)}/>
        <input type="hidden" name="page" value={page} />
        <Link to={`/search?query=${query}&page=${page}`}>
          <img className="icon" src="/searchicon.png" onClick={()=>this.handleClickSearch()}/>
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
