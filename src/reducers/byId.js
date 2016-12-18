const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_NEWS':
      let nextState = {...state};
      action.response.forEach(news => nextState[news.id] = news);
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getById = (state, id) => state[id];
