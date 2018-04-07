class Simulator
{
  constructor(options)
  {
    this.board = options.board
  }

  generate()
  {
    return this.board.next((nextState, lastState, neighbours) =>
    {
      if (lastState.alive && neighbours < 2) nextState.alive = false
      if (lastState.alive && (neighbours === 2 || neighbours === 3)) nextState.alive = true
      if (lastState.alive && neighbours > 3) nextState.alive = false
      if (!lastState.alive && neighbours === 3) nextState.alive = true

      return nextState
    })
  }

  kill()
  {
    return this.board.next((nextState) =>
    {
      nextState.alive = false
      return nextState
    })
  }

  pollute()
  {
    return this.board.next((nextState) =>
    {
      if (Math.random() < .15)
      nextState.alive = true
      return nextState
    })
  }


}

export default Simulator
