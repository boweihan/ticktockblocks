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
        };
      } else {
        row[i] = { key: i, index };
        newRow = true;
      }
    }

    if (newRow) {
      this.indices.unshift(index);
      this.board.unshift(row);
      this.rows += 1;
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
}

export default BoardStruct;
