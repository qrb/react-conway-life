class MatrixHelper {

  constructor(options)
  {
    const { width, height } = options
    this.width = parseInt(width, 10)
    this.height = parseInt(height, 10)
  }

  get size()
  {
    return this.width * this.height
  }

  getPosition(i) {
    const w = this.width
    const r = Math.floor(i / w)
    return {
      x: i - r * w,
      y: r
    }
  }

  getNeighbours(i) {
    const w = this.width
    const h = this.height
    return [
      i - w - 1,  i - w,    i - w + 1,
      i - 1,     /* i */    i + 1,
      i + w - 1,  i + w,    i + w + 1
    ].filter(t => t > -1 && t < w * h)
  }
}

export default MatrixHelper
