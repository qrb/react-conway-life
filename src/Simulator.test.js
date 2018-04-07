import Simulator from "./Simulator"
import Board from "./Board"

it ("can initialize a board with all cells alive", () =>
{
  const board = new Board({ width: 30, height: 20 })
  const sim = new Simulator({ board })

  sim.pollute()

  expect(sim.board.cells.map(c => c.alive).indexOf(true)).not.toBe(-1)
  expect(sim.board.cells.map(c => c.alive).indexOf(true)).not.toBe(-1)
})
