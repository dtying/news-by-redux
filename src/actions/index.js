import * as api from '../api';

export const toggleNews = (id) => ({
  type: 'TOGGLE_NEWS',
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




