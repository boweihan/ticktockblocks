import TileTypes from '../constants/tileTypes';

class BoardStruct {
  rows: null;
  cols: null;

  board: null;
  indices: null;

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.board = [];
    this.indices = [];

    for (let i = 0; i < rows; i += 1) {
      this.addRow();
    }
  }

  addRow() {
    // need unique index per row for react rendering
    const index = new Date().getTime().toString();
    const row = new Array(this.cols).fill(null);

    let newRow = false;

    for (let i = 0; i < this.cols; i += 1) {
      const nextAvailableRowIndex = this.getNextAvailableRow(i);
      if (nextAvailableRowIndex > -1) {
        this.board[nextAvailableRowIndex][i] = {
          key: i,
          index: this.indices[nextAvailableRowIndex],
          type: TileTypes.getRandomTileType(),
        };
      } else {
        row[i] = { key: i, index, type: TileTypes.getRandomTileType() };
        newRow = true;
      }
    }

    if (newRow) {
      this.indices.unshift(index);
      this.board.unshift(row);
      this.incrementRows();
    }
  }

  getNextAvailableRow(colIndex) {
    for (let i = this.board.length - 1; i >= 0; i -= 1) {
      if (!this.board[i][colIndex]) {
        return i;
      }
    }
    return -1;
  }

  // remove block, shift blocks down if needed and remove empty top row
  removeBlock(colIndex, index, type) {
    switch (type.name) {
      case 'standard':
        this.removeSingleBlock(colIndex, index);
        break;
      case 'bomb':
        this.removeBomb(colIndex, index);
        break;
      case 'laser':
        this.removeLaser(colIndex, index);
        break;
      default:
        break;
    }
  }

  // custom removal methods
  removeLaser(colIndex, index) {
    const rowIndex = this.indices.indexOf(index);
    this.board.splice(rowIndex, 1);
    this.indices.splice(rowIndex, 1);
    this.decrementRows();
  }

  removeBomb(colIndex, index) {
    const colIndexArr = [];
    const indexes = [];
    indexes.push(index);
    const i = this.indices.indexOf(index);
    if (i > 0) {
      indexes.push(this.indices[i - 1]);
    }
    if (i < this.indices.length - 1) {
      indexes.push(this.indices[i + 1]);
    }
    for (let a = 0; a < indexes.length; a += 1) {
      colIndexArr.push([colIndex, indexes[a]]);
      if (colIndex > 0) {
        colIndexArr.push([colIndex - 1, indexes[a]]);
      }
      if (colIndex < this.cols - 1) {
        colIndexArr.push([colIndex + 1, indexes[a]]);
      }
    }
    for (let a = 0; a < colIndexArr.length; a += 1) {
      this.removeSingleBlock(...colIndexArr[a]);
    }
  }

  removeSingleBlock(colIndex, index) {
    const rowIndex = this.indices.indexOf(index);
    if (rowIndex > -1 && this.board[rowIndex][colIndex]) {
      this.board[rowIndex][colIndex] = null; // remove the block
      this.shiftBlockDown(rowIndex - 1, colIndex); // display is reversed direction of row indices, -1 is one up
      this.removeTopRowsIfNeeded();
    }
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

  removeTopRowsIfNeeded() {
    for (let i = 0; i < this.board.length; i += 1) {
      if (!this.removeTopRowIfNeeded()) {
        break;
      }
    }
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
      this.decrementRows();
    }
    return empty;
  }

  incrementRows() {
    this.rows += 1;
  }

  decrementRows() {
    this.rows -= 1;
  }

  getBoard() {
    return { board: this.board, indices: this.indices };
  }

  getRows() {
    return this.rows;
  }
}

export default BoardStruct;
