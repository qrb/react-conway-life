import React, { Component } from 'react';
import Simulator from './Simulator'
import Board from './Board'
import './App.css';

class App extends Component {

  state = {
    playButtonLabel: "Play",
    playing: false,
    interval: undefined,
    board: undefined
  }

  constructor(props) {
    super(props)
    const board = new Board({ width: 50, height: 25 })
    this.sim = new Simulator({ board })
    this.sim.pollute()
    this.state.board = board;
  }

  handlePlay = () =>
  {
    if (this.state.playing)
    {
      clearInterval(this.state.interval)
      this.setState({
        playing: !this.state.playing,
        playButtonLabel: "Play",
        interval: undefined
      })
    } else {
      this.setState({
        playing: !this.state.playing,
        playButtonLabel: "Stop",
        interval: setInterval(this.handleGenerate, 0)
      })
    }
  }

  handleGenerate = () =>
  {
    this.sim.generate()
    this.setState({
      board: this.sim.board
    })
  }

  handleKill = () =>
  {
    this.sim.kill()
    this.setState({
      board: this.sim.board
    })
  }

  handlePollute = () =>
  {
    this.sim.pollute()
    this.setState({
      board: this.sim.board
    })
  }

  handleDraw = (cell) =>
  {
    cell.alive = !cell.alive
    this.forceUpdate()
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.handleGenerate}>One Generation</button>
          <button onClick={this.handlePlay}>{this.state.playButtonLabel}</button>
          <button onClick={this.handleKill}>Kill</button>
          <button onClick={this.handlePollute}>Pollute</button>
        </div>
        <div className="board">
          { this.state.board.cells.map((cell, index) =>
            <div
              key={index}
              className={`cell ${cell.alive ? 'alive' : null}`}
              onClick={()=>this.handleDraw(cell)}
              />
          )}
        </div>
      </div>
    )
  }
}

export default App
