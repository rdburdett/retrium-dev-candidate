import {
  alive,
  dead
} from "./theme.js";

export class Cell {
  constructor(value, row, column, up, down, left, right) {
    this.value = value || false,
      this.location = {
        row: row,
        column: column,
      },
      this.neighbors = {
        up: up || null,
        down: down || null,
        left: left || null,
        right: right || null,
      }
  }

  aliveNeighbors() {
    const populatedNeighbors = Object
      .values(this.neighbors)
      .filter((neighbor) => neighbor === true)
    return populatedNeighbors.length;
  }
}


export class Grid {
  constructor(input = 2) {
    this.size = (typeof (input) === "number") ? input : input.length
    // this.size = size || (inputGrid ? inputGrid.length: 2),
    this.cells = this.generateCells(input)
  }
  buildFromSize(size) {
    const board = []
    for (let i = 0; i < size; i++) {
      board.push([])
      for (let j = 0; j < size; j++) {
        const life = (Math.random() > 0.5) ? alive : dead
        board[i].push(new Cell(life, i, j))
      }
    }
    return board
  }
  buildFromGrid(input) {
    return input.map((row) => {
      return row.map(element => new Cell(element))
    })
  }



  generateCells(input) {
    return (typeof (input) === "number") ?
      // create cells from size parameters
      this.buildFromSize(input) :
      // create cells from inputGrid
      this.buildFromGrid(input)
  }
}