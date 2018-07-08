import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Client from '../middleware/clientMiddleware';
import error from '../middleware/errorMiddleware';
import handler from './errorHandler';
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const configureStore = () => {
  const client = Client();
  const logger = createLogger({
    predicate: () => __DEV__, // eslint-disable-line
  });
  const middlewares = [error(handler), thunk, client, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, {}, middlewareEnhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore();
