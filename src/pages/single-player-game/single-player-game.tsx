import React, { useState, useEffect, useCallback } from 'react'
import Confetti from 'react-confetti'
import format from 'date-fns/format'
import { PickAttempts, BoardGrid, ShipsStatus } from 'components'
import { add as addSinglePlayerGame } from 'services/singlePlayerGames'
import { Cell } from 'types'
import useSinglePlayerGame from 'hooks/useSinglePlayerGame'
import { BoardContainer, GameStatus, Overlay, StatusContainer } from './single-player-game.styles'

const BOARD_SIZE = 10

type PagePhase = 'IDLE' | 'STARTED'

function SinglePlayerGame(): JSX.Element {
  const [pagePhase, setPagePhase] = useState<PagePhase>('IDLE')
  const [levelAttempts, setLevelAttempts] = useState(0)
  const [
    {
      boardGrid,
      ships,
      startGameDate,
      endGameDate,
      turns,
      landedShots,
      currentAttempts,
      phase: gamePhase,
    },
    dispatch,
  ] = useSinglePlayerGame()
  const accuracy = (turns > 0 ? (landedShots * 100) / turns : 0).toFixed(2)

  useEffect(() => {
    if (pagePhase === 'STARTED') {
      dispatch({ type: 'INIT_GAME', payload: { boardSize: BOARD_SIZE, attempts: levelAttempts } })
    }
  }, [dispatch, levelAttempts, pagePhase])

  useEffect(() => {
    const finishedGame = gamePhase === 'GAME_WIN' || gamePhase === 'GAME_OVER'
    if (finishedGame) {
      const singlePlayerGameStatus = {
        startTime: format(startGameDate || new Date(), 'MM-dd-yyyy hh:mm aaa'),
        endTime: format(endGameDate || new Date(), 'MM-dd-yyyy hh:mm aaa'),
        turns,
        accuracy,
        status: gamePhase === 'GAME_WIN' ? 'Won' : 'Lost',
      }
      addSinglePlayerGame(singlePlayerGameStatus)
    }
  }, [accuracy, endGameDate, gamePhase, startGameDate, turns])

  const handleOnLevelAttemptsChange = useCallback((newAttempts) => {
    setLevelAttempts(newAttempts)
  }, [])

  const handleOnCellClick = useCallback(
    function handleOnCellClick(cell: Cell) {
      const landedShot = cell.value !== 0
      if (landedShot) {
        dispatch({
          type: 'SHOT_SHIP_TURN',
          payload: {
            shipName: cell.value,
          },
        })
        return
      }

      dispatch({
        type: 'SHOT_MISS_TURN',
      })
    },
    [dispatch],
  )

  function initGame() {
    dispatch({ type: 'INIT_GAME', payload: { boardSize: BOARD_SIZE, attempts: levelAttempts } })
  }

  if (pagePhase === 'IDLE') {
    return (
      <PickAttempts
        onAttemptsChange={handleOnLevelAttemptsChange}
        onSubmit={() => {
          setPagePhase('STARTED')
        }}
      />
    )
  }

  return (
    <>
      {gamePhase === 'GAME_WIN' && <Confetti />}
      <h4>Attempts left: {currentAttempts === Infinity ? '∞' : currentAttempts}</h4>
      <BoardContainer>
        {gamePhase === 'GAME_OVER' && (
          <Overlay>
            <h5>Game Over</h5>
            <button onClick={initGame}>Try Again!</button>
          </Overlay>
        )}
        {gamePhase === 'GAME_WIN' && (
          <Overlay>
            <h5>You Win!</h5>
            <button onClick={initGame}>Play Again!</button>
          </Overlay>
        )}
        <BoardGrid board={boardGrid} onCellClick={handleOnCellClick} />
      </BoardContainer>
      <StatusContainer>
        <GameStatus>
          <h5>Turns: {turns}</h5>
          <h5>Accuracy: {accuracy}%</h5>
        </GameStatus>
        <ShipsStatus ships={ships} />
      </StatusContainer>
    </>
  )
}

export default SinglePlayerGame
