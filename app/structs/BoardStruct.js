import React from 'react';
import { Dimensions } from 'react-native';
import Colors from '../constants/colors';

const Width = Dimensions.get('window').width;

const getTileStyle = tileSize => {
  return {
    width: tileSize,
    height: tileSize,
    backgroundColor: Colors.lightBrown,
    margin: 2,
    borderRadius: 5,
  };
};

class BoardStruct {
  rows: null;
  cols: null;
  tileComponent: null;
  tileSize: null;
  board: null;
  keys: null;

  constructor(rows, cols, tileComponent) {
    this.rows = rows;
    this.cols = cols;
    this.tileComponent = tileComponent;
    this.tileSize = Width * 0.8 / cols - 4;
    this.board = [];
    this.keys = [];
    for (let i = 0; i < rows; i += 1) {
      this.addRow();
    }
  }

  addRow() {
    const row = [];
    for (let i = 0; i < this.cols; i += 1) {
      row.push(
        <this.tileComponent key={i} style={getTileStyle(this.tileSize)} />,
      );
    }
    this.board.push(row);
    this.keys.push(new Date().getTime());
    this.rows += 1;
  }

  removeBlock(rowIndex, colIndex) {
    this.shiftBlockDown(rowIndex + 1, colIndex);
  }

  shiftBlockDown(rowIndex, colIndex) {
    if (rowIndex <= this.board.length) {
      if (colIndex <= this.board[rowIndex].length) {
        this.board[rowIndex - 1][colIndex] = this.board[rowIndex][colIndex];
        this.board[rowIndex][colIndex] = null;
      }
    }
  }

  getBoard() {
    return { board: this.board, keys: this.keys };
  }

  getBoardReverse() {
    return { board: this.board.reverse(), keys: this.keys.reverse() };
  }

  getTileSize() {
    return this.tileSize;
  }
}

export default BoardStruct;
