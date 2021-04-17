import { Ship } from 'types'

function createInitialShips({
  oneSpaceLongAmount = 4,
  twoSpacesLongAmount = 3,
  threeSpacesLongAmount = 2,
  fourSpacesLongAmount = 1,
} = {}): Ship[] {
  const ships: Ship[] = []

  for (let i = 0; i < oneSpaceLongAmount; i++) {
    const name = ships.length + 1
    const spacesLong = 1
    ships.push(new Ship(name, spacesLong))
  }

  for (let i = 0; i < twoSpacesLongAmount; i++) {
    const name = ships.length + 1
    const spacesLong = 2
    ships.push(new Ship(name, spacesLong))
  }

  for (let i = 0; i < threeSpacesLongAmount; i++) {
    const name = ships.length + 1
    const spacesLong = 3
    ships.push(new Ship(name, spacesLong))
  }

  for (let i = 0; i < fourSpacesLongAmount; i++) {
    const name = ships.length + 1
    const spacesLong = 4
    ships.push(new Ship(name, spacesLong))
  }
  return ships
}

export default createInitialShips
