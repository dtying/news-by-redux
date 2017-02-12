const isFavourite = (state = {isFavourite: false}, action) => {
  if(state.id !== action.id){
    return state;
  }

  switch(action.type){
    case 'TOGGLE_FAVOURITE':
          return {...state, isFavourite: !state.isFavourite};
    default:
          return state;
  }
};

export default isFavourite;
