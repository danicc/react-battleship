function createBoard(size = 10): number[][] {
  return new Array(size).fill(0).map(() => new Array(size).fill(0))
}

export default createBoard
