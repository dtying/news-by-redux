import {combineReducers} from 'redux';

const createList = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_NEWS_SUCCESS':
        return [...state,
          ...action.response.map(news => news.id)];
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'FETCH_NEWS_REQUEST':
        return true;
      case 'FETCH_NEWS_SUCCESS':
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching
  });
};

export default createList;

export const getList = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
