import read from './read';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
      let nextState = {...state};
      action.response.forEach(n =>
        nextState[n.id] = {...n, ...read(undefined, action)});
      return nextState;
    case 'TOGGLE_NEWS':
          return {
            ...state,
            [action.id]: read(state[action.id], action)
          };
    default:
      return state;
  }
};

export default byId;


export const getById = (state, id) => state[id];

export const getReadById = (state, id) => state[id].read;
