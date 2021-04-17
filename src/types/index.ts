export class Ship {
  name: number
  spacesLong: number
  lives: number

  constructor(name: number, spacesLong: number) {
    this.name = name
    this.spacesLong = spacesLong
    this.lives = spacesLong
  }
}

export type Board = number[][]

export type Cell = {
  value: number
  row: number
  col: number
  enabled: boolean
}

export type Game = {
  boardGrid: Board
  ships: Ship[]
  aliveShips: number[]
  startGameDate: Date | undefined
  endGameDate: Date | undefined
  turns: number
  landedShots: number
  initialAttempts: number
  currentAttempts: number
  phase: 'PLAYING' | 'GAME_OVER' | 'GAME_WIN'
}

export type GameStatus = {
  startTime: string
  endTime: string
  turns: number
  accuracy: string
  status: string
}
