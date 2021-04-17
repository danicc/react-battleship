import { useReducer } from 'react'
import { initializeSinglePlayerGame } from 'utils'
import { Game } from 'types'

const initialState: Game = {
  boardGrid: [[]],
  ships: [],
  aliveShips: [],
  startGameDate: undefined,
  endGameDate: undefined,
  turns: 0,
  landedShots: 0,
  initialAttempts: 0,
  currentAttempts: 0,
  phase: 'PLAYING',
}

type InitGameAction = {
  type: 'INIT_GAME'
  payload: {
    boardSize: number
    attempts: number
  }
}

type ShotShipTurnAction = {
  type: 'SHOT_SHIP_TURN'
  payload: {
    shipName: number
  }
}

type ShotMissTurn = {
  type: 'SHOT_MISS_TURN'
}

type Action = InitGameAction | ShotShipTurnAction | ShotMissTurn
type Dispatch = (action: Action) => void
type SinglePlayerGame = [Game, Dispatch]

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'INIT_GAME': {
      const {
        payload: { boardSize, attempts },
      } = action
      const initializedGameState = initializeSinglePlayerGame(boardSize, attempts)

      return {
        ...state,
        ...initializedGameState,
      }
    }
    case 'SHOT_SHIP_TURN': {
      const {
        payload: { shipName },
      } = action
      const { ships, aliveShips, landedShots, phase, turns } = state

      const shootedShipIdx = ships.findIndex(({ name }) => name === shipName)

      const shootedShip = { ...ships[shootedShipIdx] }
      shootedShip.lives = shootedShip.lives - 1

      let updatedAliveShips = aliveShips
      if (shootedShip.lives === 0) {
        updatedAliveShips = aliveShips.filter((name) => name !== shipName)
      }

      let updatePhase = phase
      if (!updatedAliveShips.length) {
        updatePhase = 'GAME_WIN'
      }

      const leftSide = ships.slice(0, shootedShipIdx)
      const rightSide = ships.slice(shootedShipIdx + 1)
      const updatedShips = [...leftSide, shootedShip, ...rightSide]

      return {
        ...state,
        landedShots: landedShots + 1,
        turns: turns + 1,
        ships: updatedShips,
        aliveShips: updatedAliveShips,
        phase: updatePhase,
      }
    }
    case 'SHOT_MISS_TURN': {
      const { currentAttempts, turns, phase } = state
      const isGameOver = currentAttempts === 1

      let updatedPhase = phase
      if (isGameOver) {
        updatedPhase = 'GAME_OVER'
      }
      return {
        ...state,
        turns: turns + 1,
        currentAttempts: currentAttempts - 1,
        phase: updatedPhase,
      }
    }
    default: {
      return state
    }
  }
}

function useSinglePlayerGame(): SinglePlayerGame {
  return useReducer(reducer, initialState)
}

export default useSinglePlayerGame
