import {combineReducers} from 'redux';

const createSearch = () => {

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'SEARCH_KEYWORD_REQUEST':
        return true;
      case 'SEARCH_KEYWORD_SUCCESS':
      case 'SEARCH_KEYWORD_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const lastQuery = (state = '', action) => {
    switch (action.type) {
      case 'UPDATE_LAST_QUERY':
        return action.keyword;
      default:
        return state;
    }
  };

  const lastPage = (state = 0, action) => {
    switch (action.type) {
      case 'UPDATE_LAST_PAGE':
        return action.page;
      default:
        return state;
    }
  };

  const opts = (state = {query: '', page: 1}, action) => {
    switch (action.type) {
      case 'INPUT_KEYWORD':
        return {
          ...state,
          query: action.keyword,
          page: 1
        };
      case 'GOTO_NEXT_PAGE':
        return {
          ...state,
          page: state.page + 1
        };
      case 'GOTO_PREV_PAGE':
        return {
          ...state,
          page: state.page - 1
        };
      default:
        return state;
    }
  };

  const searchResult = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_KEYWORD_SUCCESS':
        return [...action.response];
      default:
        return state;
    }
  };


  return combineReducers({
    isFetching,
    lastQuery,
    lastPage,
    opts,
    searchResult
  });
};

export default createSearch;

export const getIsFetching = (state) => state.isFetching;

export const getLastQuery = (state) => state.lastQuery;
export const getLastPage = (state) => state.lastPage;

export const getOpts = (state) => state.opts;
export const getOptsPage = (state) => state.opts.page;
export const getOptsQuery = (state) => state.opts.query;

export const getSearchResult = (state) => state.searchResult;


