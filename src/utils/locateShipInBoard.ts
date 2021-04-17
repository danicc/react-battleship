import { Ship } from 'types'

function locateShipInBoard(ship: Ship, board: number[][]): number[][] {
  const size = board.length - 1
  const boardWithShip = JSON.parse(JSON.stringify(board))

  let located = false
  while (!located) {
    const initialRow = Math.floor(Math.random() * size)
    const initialColumn = Math.floor(Math.random() * size)

    if (boardWithShip[initialRow][initialColumn] !== 0) {
      continue
    }

    // horizontal from left to right
    let endPosition = initialColumn + ship.spacesLong
    if (endPosition <= size) {
      const boardPlaceholder = boardWithShip[initialRow].slice(initialColumn, endPosition)

      if (boardPlaceholder.every((val: number) => val === 0)) {
        for (let i = initialColumn; i < endPosition; i++) {
          boardWithShip[initialRow][i] = ship.name
        }
        located = true
        break
      }
    }

    // vertical from top to bottom
    endPosition = initialRow + ship.spacesLong
    if (endPosition <= size) {
      let boardPlaceholder: number[] = []
      for (let i = initialRow; i < endPosition; i++) {
        boardPlaceholder = [...boardPlaceholder, boardWithShip[i][initialColumn]]
      }

      if (boardPlaceholder.every((val: number) => val === 0)) {
        for (let i = initialRow; i < endPosition; i++) {
          boardWithShip[i][initialColumn] = ship.name
        }
        located = true
        break
      }
    }

    // horizontal from right to left
    let startPosition = initialColumn - ship.spacesLong
    if (startPosition >= 0) {
      const boardPlaceholder = boardWithShip[initialRow].slice(startPosition, initialColumn)
      if (boardPlaceholder.every((val: number) => val === 0)) {
        for (let i = startPosition; i < initialColumn; i++) {
          boardWithShip[initialRow][i] = ship.name
        }
        located = true
        break
      }
    }

    // vertical from botom to top
    startPosition = initialRow - ship.spacesLong
    if (startPosition >= 0) {
      let boardPlaceholder: number[] = []
      for (let i = startPosition; i < initialRow; i++) {
        boardPlaceholder = [...boardPlaceholder, boardWithShip[i][initialColumn]]
      }

      if (boardPlaceholder.every((val: number) => val === 0)) {
        for (let i = startPosition; i < initialRow; i++) {
          boardWithShip[i][initialColumn] = ship.name
        }
        located = true
        break
      }
    }
  }

  return boardWithShip
}

export default locateShipInBoard
