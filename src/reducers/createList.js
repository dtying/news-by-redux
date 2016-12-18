import {combineReducers} from 'redux';

const createList = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_NEWS':
        return [...state,
          ...action.response.map(news => news.id)];
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'REQUEST_NEWS':
        return true;
      case 'RECEIVE_NEWS':
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
