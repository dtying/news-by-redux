import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import opts, * as fromOpts from './opts';
import createDetails, * as fromDetails from './createDetails';
import createSearch, * as fromSearch from './createSearch';

const newsApp = combineReducers({
  byId,
  listByFilter: createList(),
  opts,
  details: createDetails(),
  search: createSearch()
});

export default newsApp;

export const getById = (state, id) => fromById.getById(state.byId, id);
export const getReadById = (state, id) => fromById.getReadById(state.byId, id);
export const getIsFavouriteById = (state, id) => fromById.getIsFavouriteById(state.byId, id);

export const getList = (state) => {
  const ids = fromList.getList(state.listByFilter);
  return ids.map(id => fromById.getById(state.byId, id));
};

export const getIsFetching = (state) =>
  fromList.getIsFetching(state.listByFilter);

export const getOpts = (state) =>
  fromOpts.getOpts(state.opts);

export const getDetailIds = (state) =>
  fromDetails.getDetailIds(state.details);

export const getDetailIsFetching = (state) =>
  fromDetails.getDetailIsFetching(state.details);

export const getSearchResult = (state) =>
  fromSearch.getSearchResult(state.search);

export const getSearchIsFetching = (state) =>
  fromSearch.getIsFetching(state.search);

export const getSearchLastQuery = (state) => fromSearch.getLastQuery(state.search);
export const getSearchLastPage = (state) => fromSearch.getLastPage(state.search);

export const getSearchOpts = (state) =>
  fromSearch.getOpts(state.search);

export const getSearchOptsQuery = (state) => fromSearch.getOptsQuery(state.search);
export const getSearchOptsPage = (state) => fromSearch.getOptsPage(state.search);

