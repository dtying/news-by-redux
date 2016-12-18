import * as api from '../api';

export const toggleNews = (id) => ({
  type: 'TOGGLE_NEWS',
  id
});

const receiveNews = (response) => ({
  type: 'RECEIVE_NEWS',
  response: response.results
});

export const fetchNews = (url) =>
  api.fetchNews(url).then(response => receiveNews(response));


export const requestNews = () => ({
  type: 'REQUEST_NEWS'
});

export const receiveDetails = (response) => ({
  type: 'RECEIVE_DETAILS',
  response: response.content
});

export const fetchDetails = (url) =>
  api.fetchNews(url).then(response => receiveDetails(response));

export const requestDetails = () => ({
  type: 'REQUEST_DETAILS'
});
