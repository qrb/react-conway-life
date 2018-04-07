import Board from "./Board";

it ("can initialize a board with all cells alive", () =>
{
  const board = new Board({
    width: 30,
    height: 30
  })
  board.initializeBoard(true)
  board.cells.map(cell => expect(cell.alive).toBe(true))
})

it ("can initialize a board with all cells dead", () =>
{
  const board = new Board({
    width: 10,
    height: 10
  })
  board.cells.map(cell => expect(cell.alive).toBe(false))
})

it ("can count the number of live neighbours for a given cell", () =>
{
  const i = 200
  const w = 30

  const board = new Board({
    width: w,
    height: 20
  })

  board.initializeBoard(true)
  expect(board.getLivingNeighbours(i)).toBe(8)
  board.initializeBoard(false)
  expect(board.getLivingNeighbours(i)).toBe(0)
  board.cells[i - w - 1].alive = true
  expect(board.getLivingNeighbours(i)).toBe(1)
  board.cells[i - w].alive = true
  expect(board.getLivingNeighbours(i)).toBe(2)
  board.cells[i - w + 1].alive = true
  expect(board.getLivingNeighbours(i)).toBe(3)
  board.cells[i - 1].alive = true
  expect(board.getLivingNeighbours(i)).toBe(4)
  board.cells[i + 1].alive = true
  expect(board.getLivingNeighbours(i)).toBe(5)
  board.cells[i + w - 1].alive = true
  expect(board.getLivingNeighbours(i)).toBe(6)
  board.cells[i + w].alive = true
  expect(board.getLivingNeighbours(i)).toBe(7)
  board.cells[i + w + 1].alive = true
  expect(board.getLivingNeighbours(i)).toBe(8)
})

