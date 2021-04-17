import React from 'react'
import { render, screen } from 'test-utils'

import BoardCell from './board-cell'

const defaultCell = {
  value: 0,
  row: 1,
  col: 1,
  enabled: true,
}
const onCellClick = () => undefined

describe('<BoardCell />', () => {
  test('should render enabled cell', () => {
    render(<BoardCell idx={0} cell={defaultCell} onClick={onCellClick} />)

    screen.getByTestId('enabled')
  })
  test('should render disabled water cell', () => {
    const disabledWaterCell = {
      ...defaultCell,
      enabled: false,
    }

    render(<BoardCell idx={0} cell={disabledWaterCell} onClick={onCellClick} />)

    const cellElement = screen.getByText(/x/i)
    expect(cellElement).toHaveAttribute('color', 'red')
  })
  test('should render disabled ship cell', () => {
    const disabledShipCell = {
      ...defaultCell,
      value: 1,
      enabled: false,
    }

    render(<BoardCell idx={0} cell={disabledShipCell} onClick={onCellClick} />)

    const cellElement = screen.getByText(/✓/i)
    expect(cellElement).toHaveAttribute('color', 'green')
  })
})
