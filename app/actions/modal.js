import * as types from './types';

export const showModal = modal => ({
  type: types.SHOW_MODAL,
  modal,
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});
