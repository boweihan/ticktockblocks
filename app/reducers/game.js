import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const defaultGame = {
  level: 1,
};

export const game = createReducer(defaultGame, {
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
