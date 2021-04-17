import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BoardCell } from './board-cell'
import { Board, Cell } from 'types'

const Root = styled.div`
  display: grid;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  grid: repeat(10, minmax(20px, 35px)) / repeat(10, minmax(20px, 35px));
`

type Props = {
  board: Board | undefined
  onCellClick: (cell: Cell) => void
}
function BoardGrid({ board, onCellClick }: Props): JSX.Element {
  const [cells, setCells] = useState<Cell[]>([])

  useEffect(() => {
    if (board) {
      let draftCells: Cell[] = []
      for (let i = 0; i < board?.length; i++) {
        for (let j = 0; j < board?.length; j++) {
          const newCell = {
            value: board[i][j],
            row: i,
            col: j,
            enabled: true,
          }
          draftCells = [...draftCells, newCell]
        }
      }
      setCells(draftCells)
    }
  }, [board])

  function handleOnCellClick(idx: number) {
    const draftCell = {
      ...cells[idx],
      enabled: false,
    }

    const leftSide = cells.slice(0, idx)
    const rightSide = cells.slice(idx + 1)
    setCells([...leftSide, draftCell, ...rightSide])

    onCellClick(draftCell)
  }

  return (
    <Root>
      {cells.map((cell, idx) => (
        <BoardCell
          key={`${idx}-${cell.enabled}`}
          cell={cell}
          idx={idx}
          onClick={handleOnCellClick}
        />
      ))}
    </Root>
  )
}

export default BoardGrid
