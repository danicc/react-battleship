import { createBoard, createInitialShips, locateShipInBoard } from 'utils'
import { Game, GamePhase, Ship } from 'types'

function initializeSinglePlayerGame(boardSize: number, attempts: number): Game {
  let boardGrid = createBoard(boardSize)
  const ships = createInitialShips()
  const aliveShips = ships.map(({ name }) => name)
  ships.forEach((ship: Ship) => {
    boardGrid = locateShipInBoard(ship, boardGrid)
  })

  return {
    boardGrid,
    ships,
    aliveShips,
    startGameDate: new Date(),
    endGameDate: undefined,
    turns: 0,
    landedShots: 0,
    initialAttempts: attempts,
    currentAttempts: attempts,
    phase: GamePhase.PLAYING,
  }
}

export default initializeSinglePlayerGame
