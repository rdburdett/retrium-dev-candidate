export function logCells(cells) {
  cells.forEach(cell => {
    console.log(Object.entries(cell))
  });
}