import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const defaultModal = {
  visible: false,
  msg: null,
  color: null,
};

export const modal = createReducer(defaultModal, {
  [types.SHOW_MODAL](state, action) {
    return {
      ...state,
      ...action.modal,
    };
  },
});
