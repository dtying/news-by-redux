import * as api from '../api';

export const toggleNews = (id) => ({
  type: 'TOGGLE_NEWS',
  id
});

export const toggleFavourite = (id) => ({
  type: 'TOGGLE_FAVOURITE',
  id
});

export const fetchNews = (url) => (dispatch) => {
  dispatch({
    type: 'FETCH_NEWS_REQUEST'
  });

  return api.fetchNews(url).then(
    response => dispatch({
      type: 'FETCH_NEWS_SUCCESS',
      response: response.results
    }),
    error => dispatch({
      type: 'FETCH_NEWS_FAILURE',
      error
    }));
};


export const fetchDetails = (url) => (dispatch) => {
  dispatch({
    type: 'FETCH_DETAILS_REQUEST'
  });

  return api.fetchNews(url).then(
    response => dispatch({
      type: 'FETCH_DETAILS_SUCCESS',
      response: response.content
    }),
    error => dispatch({
      type: 'FETCH_DETAILS_FAILURE',
      error
    }));
};


export const inputKeyword = (keyword) => ({
  type: 'INPUT_KEYWORD',
  keyword
});


export const updateLastQuery = (keyword) => ({
  type: 'UPDATE_LAST_QUERY',
  keyword
});


export const updateLastPage = (page) => ({
  type: 'UPDATE_LAST_PAGE',
  page
});

export const searchKeyword = (opts) => (dispatch) => {
  dispatch({
    type: 'SEARCH_KEYWORD_REQUEST'
  });

  const url = api.generateUrl(opts);
  console.log(url);

  return api.fetchNews(url).then(
    response => dispatch({
      type: 'SEARCH_KEYWORD_SUCCESS',
      response: response.results
    }),
    error => dispatch({
      type: 'SEARCH_KEYWORD_FAILURE',
      error
    })
  );
};

export const gotoNextPage = () => ({
  type: 'GOTO_NEXT_PAGE'
});


export const gotoPrevPage = () => ({
  type: 'GOTO_PREV_PAGE'
});
