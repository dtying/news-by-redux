import {combineReducers} from 'redux';

const createDetails = () => {
  const ids = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_DETAILS_SUCCESS':
        return {
          ...state,
          [action.response.id]: action.response
        };
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'FETCH_DETAILS_REQUEST':
        return true;
      case 'FETCH_DETAILS_SUCCESS':
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

export default createDetails;


export const getDetailIds = (state) => state.ids;

export const getDetailIsFetching = (state) => state.isFetching;
