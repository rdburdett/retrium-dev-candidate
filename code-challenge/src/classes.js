export class Cell {
  constructor(value, row, column, up, down, left, right) {
    this.value = value || false,
    this.location = {
      row: row,
      column: column
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
  constructor(size, cells) {
    this.size = size || null,
    this.cells = cells || null
  }

  generateCells() {
    const grid = {}
    
    return grid;
  }
}