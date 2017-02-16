const isFavourite = (state = {isFavourite: false}, action) => {
  if (state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      return {...state, isFavourite: !state.isFavourite};
    case 'FETCH_NEWS_SUCCESS':
    default:
      return state;
  }
};

export default isFavourite;
