const read = (state = {read: false}, action) => {
  if (state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case 'TOGGLE_NEWS':
      return {...state, read: true};
    case 'FETCH_NEWS_SUCCESS':
    default:
      return state;
  }
};


export default read;

