import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const defaultGame = {
  board: {},
  level: 1,
};

export const game = createReducer(defaultGame, {
  [types.UPDATE_BOARD](state, action) {
    return {
      ...state,
      board: action.board,
    };
  },
  [types.LEVEL_UP](state) {
    return {
      ...state,
      level: state.level + 1,
    };
  },
  [types.RESET_GAME]() {
    return defaultGame;
  },
});
