import read from './read';
import isFavourite from './isFavourite';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
      let nextState = {...state};
      action.response.forEach(item =>
        nextState[item.id] = {...item, ...read(undefined, action), ...isFavourite(undefined, action)});
      return nextState;
    case 'TOGGLE_NEWS':
      return {
        ...state,
        [action.id]: read(state[action.id], action)
      };
    case 'TOGGLE_FAVOURITE':
      return {
        ...state,
        [action.id]: isFavourite(state[action.id], action)
      };
    default:
      return state;
  }
};

export default byId;


export const getById = (state, id) => state[id];

export const getReadById = (state, id) => state[id].read;

export const getIsFavouriteById = (state, id) => state[id].isFavourite;
