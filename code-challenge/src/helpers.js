// log only the cell values
export function logBoardValues(board) {
  board.cells.forEach(row =>
    console.log(row
      .map(cell => cell.value)
      .join(" ")
    )
  )
}

export function logBoardCells(board) {
  board.cells.forEach(row =>
    console.log(row
      .map(cell => [
        cell.value,
        cell.neighbors.up,
        // `${cell.aliveNeighbors()} n`,
        `row ${cell.location.row}`,
        `col ${cell.location.column}`

      ])
      .join(" ")
    )
  )
}