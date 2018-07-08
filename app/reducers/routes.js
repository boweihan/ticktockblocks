import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import routeConstants from '../constants/routes';

const defaultRoutes = {
  ...routeConstants,
  menu: true,
};

export const routes = createReducer(defaultRoutes, {
  [types.CHANGE_ROUTE](state, action) {
    return {
      ...routeConstants,
      [action.route]: true,
    };
  },
});
