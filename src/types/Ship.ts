export default class Ship {
  name: number
  spacesLong: number
  lives: number

  constructor(name: number, spacesLong: number) {
    this.name = name
    this.spacesLong = spacesLong
    this.lives = spacesLong
  }
}
