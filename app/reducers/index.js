import { combineReducers } from 'redux';
import * as RoutesReducer from './routes';
import * as GameReducer from './game';
import * as ModalReducer from './modal';

export default combineReducers({
  ...RoutesReducer,
  ...GameReducer,
  ...ModalReducer,
});
