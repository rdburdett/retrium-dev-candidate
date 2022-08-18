import chalk from 'chalk'
const log = (stuff) => console.log(chalk.red(stuff))


log(chalk.blue('Game of Life!'));

const petri = {
  0: [true, false, false, false]
}


log(petri)

console.log(petri[0])