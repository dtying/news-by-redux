const opts = (state = {page: 1}, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
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
