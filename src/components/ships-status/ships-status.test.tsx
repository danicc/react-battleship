import React from 'react'
import { render, screen } from 'test-utils'
import { createInitialShips } from 'utils'
import ShipsStatus from './ships-status'

const createShipsOptions = {
  oneSpaceLongAmount: 4,
  twoSpacesLongAmount: 3,
  threeSpacesLongAmount: 2,
  fourSpacesLongAmount: 1,
}
const mockedShips = createInitialShips(createShipsOptions)

describe('<ShipStatus />', () => {
  test('should render all the ships', () => {
    render(<ShipsStatus ships={mockedShips} />)
    const shipStatusElement = screen.queryAllByText(/ship/i)
    expect(shipStatusElement).toHaveLength(mockedShips.length)
  })
  test('sinked ships should have different background than alive ships', () => {
    const shipsWithOneSinked = [...mockedShips]
    const aliveShip = {
      ...shipsWithOneSinked[0],
      name: 1,
      lives: 1,
    }
    const sinkedShip = {
      ...shipsWithOneSinked[1],
      name: 2,
      lives: 0,
    }

    shipsWithOneSinked[0] = aliveShip
    shipsWithOneSinked[1] = sinkedShip
    render(<ShipsStatus ships={shipsWithOneSinked} />)
    const aliveShipElement = screen.getByTestId('1')
    const sinkedShipElement = screen.getByTestId('2')

    expect(aliveShipElement).toBeInTheDocument()
    expect(sinkedShipElement).toBeInTheDocument()
    expect(sinkedShipElement.className).not.toEqual(aliveShipElement.className)
  })
})
