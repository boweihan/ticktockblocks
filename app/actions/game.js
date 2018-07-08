import * as types from './types';

export const updateBoard = board => ({
  type: types.UPDATE_BOARD,
  board,
});

export const levelUp = () => ({
  type: types.LEVEL_UP,
});

export const resetGame = () => ({
  type: types.RESET_GAME,
});
