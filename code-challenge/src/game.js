import chalk from "chalk";
import { Cell, Grid } from "./classes.js";
import { logBoardValues, logBoardCells } from "./helpers.js";
import { alive, dead } from "./theme.js";

const sampleGrid = [
  [alive, alive, dead, dead, dead],
  [alive, alive, dead, dead, dead],
  [dead, alive, alive, dead, dead],
  [dead, alive, dead, dead, dead],
  [dead, dead, dead, dead, dead]
]

const board = new Grid(3)

// logBoardValues(board)
logBoardCells(board)