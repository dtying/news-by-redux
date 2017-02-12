import {createStore, applyMiddleware} from 'redux';
import newsMain from './reducers';

const logger = (store) => (next) => (action) => {
  if (!console.group) {
    return next(action);
  }

  console.group(action.type);
  console.log('state before', store.getState());
  console.log('action', action);
  const returnValue = next(action);
  console.log('state after', store.getState());
  console.groupEnd(action.type);
  return returnValue;
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
};

const configureStore = () => {
  let middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }


  const store = createStore(
    newsMain,
    applyMiddleware(...middlewares)
  );


  return store;
};

export default configureStore;
