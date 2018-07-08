import * as types from './types';

export const setRoute = route => ({
  type: types.CHANGE_ROUTE,
  route,
});
