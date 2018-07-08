import { Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;

class BoardStruct {
  rows: null;
  cols: null;
  tileComponent: null;
  tileSize: null;

  board: null;
  indices: null;

  constructor(rows, cols, tileComponent) {
    this.rows = rows;
    this.cols = cols;
    this.tileComponent = tileComponent;
    this.tileSize = Width * 0.8 / cols - 4;

    this.board = [];
    this.indices = [];

    for (let i = 0; i < rows; i += 1) {
      this.addRow();
    }
  }

  addRow() {
    // need unique index per row for react rendering
    const index = new Date().getTime().toString();

    const row = [];
    for (let i = 0; i < this.cols; i += 1) {
      row.push({ key: i, index });
    }

    this.indices.push(index);
    this.board.push(row);
    this.rows += 1;
  }

  // remove block, shift blocks down if needed and remove empty top row
  removeBlock(colIndex, index) {
    const rowIndex = this.indices.indexOf(index);
    this.board[rowIndex][colIndex] = null; // remove the block
    this.shiftBlockDown(rowIndex - 1, colIndex); // display is reversed direction of row indices, -1 is one up
    this.removeTopRowIfNeeded();
  }

  // shift blocks down to fill in removed block
  shiftBlockDown(rowIndex, colIndex) {
    if (rowIndex >= 0) {
      if (colIndex < this.board[rowIndex].length) {
        const currentCell = this.board[rowIndex][colIndex];

        if (currentCell) {
          // move cell down one row visually
          this.board[rowIndex + 1][colIndex] = this.getUpdatedCell(
            this.board[rowIndex][colIndex],
            rowIndex + 1,
          );
          // keep checking if we need to shift
          this.board[rowIndex][colIndex] = null; // remove the block
          this.shiftBlockDown(rowIndex - 1, colIndex);
        }
      }
    }
  }

  // update cell index to correspond with correct indices entry
  getUpdatedCell(cell, newIndex) {
    const newCell = { ...cell };
    newCell.index = this.indices[newIndex];
    return newCell;
  }

  removeTopRowIfNeeded() {
    const topRow = this.board[0];
    let empty = true;
    for (let i = 0; i < topRow.length; i += 1) {
      if (topRow[i]) {
        empty = false;
        break;
      }
    }
    if (empty) {
      this.board.shift();
      this.indices.shift();
    }
  }

  getBoard() {
    return { board: this.board, indices: this.indices };
  }

  getTileSize() {
    return this.tileSize;
  }
}

export default BoardStruct;
