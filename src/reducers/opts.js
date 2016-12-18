const opts = (state = {page: 1}, action) => {
  switch (action.type) {
    case 'RECEIVE_NEWS':
      return {
        ...state,
        page: state.page + 1
      };
    default:
      return state;
  }
};


export default opts;


export const getOpts = (state) => state;
