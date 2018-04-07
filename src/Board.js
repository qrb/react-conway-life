import MatrixHelper from './MatrixHelper'
import Cell from './Cell'

class Board
{
  constructor(options)
  {
    this.matrix = new MatrixHelper(options)
    this.initializeBoard(false)
  }

  initializeBoard(alive = false)
  {
    this.cells = []
    for (let i = 0; i < this.matrix.size; i++) {
      this.cells.push(new Cell({
        position: this.matrix.getPosition(i),
        alive
      }))
    }
  }

  next(morph)
  {
    const future = []
    for (let i = 0; i < this.matrix.size; i++) {
      future.push(morph(new Cell({
        position: this.matrix.getPosition(i),
        alive: this.cells[i].alive
      }), this.cells[i], this.getLivingNeighbours(i)))
    }

    this.cells = future
  }

  getLivingNeighbours(i) {
    const neighbours = this.matrix.getNeighbours(i)
    return neighbours.reduce((count, n) => count + this.cells[n].alive, 0)
  }
}

export default Board
