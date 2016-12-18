import {combineReducers} from 'redux';
import byId, {getById} from './byId';
import createList, * as fromList from './createList';
import opts, * as fromOpts from './opts';
import createDetails, * as fromDetails from './createDetails';

const newsApp = combineReducers({
  byId,
  listByFilter: createList(),
  opts,
  details: createDetails()
});

export default newsApp;

export const getList = (state) => {
  const ids = fromList.getList(state.listByFilter);
  return ids.map(id => getById(state.byId, id));
};


export const getIsFetching = (state) =>
  fromList.getIsFetching(state.listByFilter);


export const getOpts = (state) =>
  fromOpts.getOpts(state.opts);


export const getDetailIds = (state) =>
  fromDetails.getDetailIds(state.details);


export const getDetailIsFetching = (state) =>
  fromDetails.getDetailIsFetching(state.details);
