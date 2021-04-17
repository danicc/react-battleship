import { fireEvent } from '@testing-library/react'
import React from 'react'
import { render, screen } from 'test-utils'
import { createBoard } from 'utils'

import Board from './board'

const board = createBoard()
const cellsAmount = board.length * board.length
const onCellClick = () => undefined

describe('<Board />', () => {
  test('should disable board cell on click', () => {
    render(<Board board={board} onCellClick={onCellClick} />)

    const allCellsElement = screen.queryAllByTestId(/enabled/i)
    expect(allCellsElement).toHaveLength(cellsAmount)

    const firstCellElement = allCellsElement[0]
    fireEvent.click(firstCellElement, {})

    expect(screen.queryAllByTestId(/enabled/i)).toHaveLength(cellsAmount - 1)
  })
})
